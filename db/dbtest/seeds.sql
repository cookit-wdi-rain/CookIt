insert into ingredients (ingredient_id, title, img) VALUES

  (48416, 'French Apple Tart',
   'https://spoonacular.com/recipeImages/french_apple_tart-48416.jpg'),
  (70306, 'Easy Cinnamon Apple Pie','https://spoonacular.com/recipeImages/easy-cinnamon-apple-pie-2-70306.jpg'),
  (73474, 'Apple Turnovers', 'https://spoonacular.com/recipeImages/apple-turnovers-2-73474.jpg')
  ;


insert into cuisine (cuisine_id, title, minutes_ready, img ) VALUES

  (613283, 'creamy parmesan garlic gnocchi', 20, 'https://spoonacular.com/recipeImages/creamy-parmesan-garlic-gnocchi-613283.jpg'),
  (548372, 'Avocado Pizza', 10, 'https://spoonacular.com/recipeImages/Charred-Corn-and-Avocado-Pizza-548372.jpg'),
  (483725, 'Charred Corn Salad', 40, 'https://spoonacular.com/recipeImages/Charred-Corn-and-Avocado-Pizza-548372.jpg');


insert into recipe (recipe_id, recipe_name, ingredients) VALUES

  (48416, 'French Apple Tart', 'apples, butter, flour, salt, sugar'),
  (70306, 'Easy Cinnamon Apple Pie', 'Cinamon, Flour, Salt, Milk, Apple' ),
  (73474, 'Apple Turnovers', 'CreamCheese, Apples, Water, Nutmeg'),
  (613283, 'creamy parmesan garlic gnocchi', 'parmesan, garlic, cheese, flour, salt'),
  (548372, 'Avocado Pizza', 'Cheese, flour, water, salt, basil, avocado' ),
  (483725, 'Charred Corn Salad', 'Corn, legumes, salt, eggs');

