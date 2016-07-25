


# CookIt

##Summary 

The app forms a grocery list based on recipes selected and ingredients available.

![](https://media.giphy.com/media/rkgX9MTBXJa1O/giphy.gif)

## User Story

As a guest 

- You can search recipes and view details
- Have a non persistent grocery/pantry list
- When I select a dish it should take me to a seperate page with a list of needed ingredients
 

As a user 

- you can save recipes and pantry items to my kitchen
- When I select a dish it should take me to a seperate page with a list of needed ingredients and ingreedients I currently have


## Use Case
User will start by search by primary ingredient and/or cuisine type to return a list of recipes based on their search queries. The reuslts will show an image of the different dishes, nutrional facts and a link to the cookbook page. Once in the cookbook page, the user can view the ingredients needed, your pantry items, and dish details (dish image, nutritional facts, and recipe). 
<br><br>
From here the user can click on inidvidual needed ingredients to add them to their pantry (to specify what they need to purchase). The user can then be able to print the ingredient list and recipe. The user can then favorite all of their specific meals.
<br>

In the my kitchen page, as a signed in user you can view your favorited recipes and current pantry inventory. 

## ERD
![](http://i.imgur.com/55B6knf.png)

## Approach

1. Set up MVC
2. Set up server
3. Make database 
4. Set up the routes
5. Make the models
6. Run Webpack
7. Build React
8. Lay Out Components
9. Set up ajax call
10. Link ajax to components 
11. Styling


## Wireframe

Register / Log In
![](http://i.imgur.com/GTiAGTV.png)


Search for a Meal
![](http://i.imgur.com/na4RF7S.png)

Recipe
![](http://i.imgur.com/nl6fdFS.png)

The Kitchen (user page)
![](http://i.imgur.com/oALlJjC.png)


## Technologies Used

API's <br>
- https://spoonacular.com/food-api



- PSQL
- REACT
- NODE
- Express
- Bootstrap


## Sources

1. Link to wireframe: http://imgur.com/a/aWzBT
2. Referenced to return the value in a dropdown: http://stackoverflow.com/questions/28678466/how-to-get-select-elements-value-in-react-bootstrap

3. Referenced for dropdown: https://github.com/fraserxu/react-dropdown/blob/master/example/main.js

4. Referenced when distinguishing multiple inputs: http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler


## Hurdles

1. Finding a free and information rich API
2. Moving all the ajax calls to the API on the backend
3. Making the User Authentication tokens work correctly
4. Using the fetch calls to send and receive user submissions
#CookIt

https://cook-it.herokuapp.com/
