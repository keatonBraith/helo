require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const ctrl = require("./controller");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set("db", db);
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/auth/login", ctrl.login);
app.post("/auth/register", ctrl.register);
app.delete("/auth/logout", ctrl.logout);
app.get("/auth/user", ctrl.getUser);
// app.get('/api/posts', ctrl.getPosts);

app.listen(SERVER_PORT, () => {
  console.log(`Luke, the server ${SERVER_PORT} is your father!`);
});
