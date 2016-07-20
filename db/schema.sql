DROP TABLE if EXISTS users;

CREATE TABLE users (
user_id INT PRIMARY KEY NOT NULL,
first_name VARCHAR NOT NULL,
email VARCHAR NOT NULL,
password TEXT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX ON users (user_id);

DROP TABLE IF EXISTS favorite_recipes;
CREATE TABLE favorite_recipes (
favorites_id INT PRIMARY KEY NOT NULL,
user_id INT REFERENCES users(user_id),
recipe_name TEXT,
recipe_url VARCHAR NOT NULL,
img_link TEXT NOT NULL
);


DROP TABLE IF EXISTS pantry_items;
CREATE TABLE pantry_items (
items_id INT PRIMARY KEY NOT NULL,
user_id INT REFERENCES users(user_id),
ingredient_name TEXT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT now()
);
