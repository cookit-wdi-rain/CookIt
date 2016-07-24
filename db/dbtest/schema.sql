DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients (
main_id SERIAL PRIMARY KEY NOT NULL,
ingredient_id INT NOT NULL,
title VARCHAR NOT NULL,
img VARCHAR NOT NULL
);


DROP TABLE IF EXISTS cuisine;
CREATE TABLE cuisine (
main_id SERIAL PRIMARY KEY NOT NULL,
cuisine_id INT NOT NULL,
title VARCHAR NOT NULL,
minutes_ready VARCHAR NOT NULL,
img VARCHAR NOT NULL
);


DROP TABLE IF EXISTS recipe;
CREATE TABLE recipe (
main_id SERIAL PRIMARY KEY NOT NULL,
recipe_id INT,
recipe_name TEXT NOT NULL,
ingredients VARCHAR NOT NULL
);







