DROP TABLE if EXISTS users CASCADE;


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id serial unique primary key,
  name VARCHAR(50) unique,
  email VARCHAR(255) unique not null,
  password_digest TEXT not null,
  user_created timestamp not null default now()
);
CREATE INDEX on users (username) ;
CREATE INDEX on users (email) ;



DROP TABLE IF EXISTS favorite_recipes;
CREATE TABLE favorite_recipes (
favorites_id SERIAL PRIMARY KEY NOT NULL,
user_reference INTEGER REFERENCES users(user_id),
recipe_id INT NOT NULL,
recipe_name TEXT,
recipe_url VARCHAR NOT NULL,
img_link TEXT NOT NULL
);


DROP TABLE IF EXISTS pantry_items;
CREATE TABLE pantry_items (
items_id SERIAL PRIMARY KEY NOT NULL,
user_reference INTEGER REFERENCES users(user_id),
ingredient_name TEXT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT now()
);
