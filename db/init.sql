CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts(
post_id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INT REFERENCES users(user_id)
);

INSERT INTO users (username, password, profile_pic)
VALUES 
('ryanG', 'ryan', 'https://media-exp1.licdn.com/dms/image/C5603AQG-yczjTz5aGg/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=mgkTiE9TDCN3O9E8Ol86BQPztCR1XDZ2oT1fzdj7USA'),
('austinG', 'austin', 'https://media-exp1.licdn.com/dms/image/C4D03AQFlUn8LbtageQ/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=2O-HUxrjIIOWqJTDhAJH_hGym7nkCBCiVPz5zMUu-dc'),
('samG', 'sam', 'https://cdn.dribbble.com/users/3807961/screenshots/13899563/valeriehr_4x.png');