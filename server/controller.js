const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, profilePic } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.status(409).send("User Already Exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.create_user([
      username,
      hash,
      profilePic
    ]);
    req.session.user = {
      userId: newUser.user_id,
      username: newUser.username,
      password: newUser.password,
      profilePic: newUser.profile_pic,
    };
    res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const [user] = await db.check_user(username);
    if (!user) {
      return res.status(401).send("Incorrect Credentials");
    } else {
      const authenticated = bcrypt.compareSync(password, user.password);
      if (authenticated) {
        req.session.user = {
          userId: user.user_id,
          username: user.username,
          password: user.password,
          profilePic: user.profile_pic,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Email or Password Incorrect");
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  // getPosts: (req, res) => {
  //   const db = req.app.get('db');

  // }
};
