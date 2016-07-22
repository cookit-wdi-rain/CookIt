DROP TABLE if EXISTS users CASCADE;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY NOT NULL,
first_name VARCHAR NOT NULL,
email VARCHAR NOT NULL,
password TEXT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT now()
);


CREATE INDEX ON users (user_id);



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
