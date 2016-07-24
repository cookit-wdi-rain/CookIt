
import React            from 'react'
import Search           from './Search.jsx'
import Results          from './Results.jsx'
import ResultsSelected  from './ResultsSelected.jsx'
import ajax             from '../helpers/ajaxAdapter.js'
import Ingredients      from './Ingredients.jsx'
import Pantry           from './Pantry.jsx'

export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      dropdown:"cuisine",
      query: "",
      searched: false,
      results: [],
      ingredients: [],
      selected: false
    }
  }

  handleUpdateDrop(event){
    // console.log(event.target.value)
    this.setState({
      dropdown: event.target.value,
    })
  }

  handleUpdateSearch(event){
    // console.log(event.target.value)
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitSearch(event){
  event.preventDefault();
  // console.log(this.state.dropdown)
  if(this.state.dropdown ==="cuisine"){
    ajax.cuisineCall(this.state.query).then( cuisine =>{
  // ajax.testCall(this.state.query).then( cuisine =>{
  //console.log(this.state.query)
      this.setState({
        results: cuisine.results,
        // results:cuisine,
        dropdown:this.state.dropdown,
        selected: false,
        query:"",
        searched: true
      })
    })
  }
  if(this.state.dropdown === "ingredient"){
     ajax.ingredientsCall(this.state.query).then( ingredient =>{
    // ajax.testCall(this.state.query).then( ingredient =>{
  //console.log(this.state.query)
  console.log("ingredients",ingredient)
    this.setState({
      results: ingredient,
      dropdown: this.state.dropdown,
      query: "",
      searched: true

    })
  })
  }
}

pantryItem(){
  ajax.pantryCall().then( pantryItem => {
  console.log("pantry Item ", pantryItem)
    this.setState({
      ingredients: pantryItem
    })
  })
}

 selectRecipe(event){
    event.preventDefault();
    console.log(event.target.alt)
    //ajax.secondCall(event.target.alt)
    ajax.recipeCall(event.target.alt)
    .then( cuisine =>{
      this.setState({
        results: cuisine,
        //ingredients: cuisine.ingredients.split(", "),
        query: "",
        selected: true
      })
    })

  }


  render(){
      if(this.state.searched&&this.state.selected){
      return (
          <div className="row">

              <ResultsSelected
              recipes={this.state.results}
              onSelectRecipe={this.selectRecipe.bind(this)}
              dropdown={this.state.dropdown}
              />
              <Ingredients
                recipes={this.state.results}
               />
              <Pantry
                pantryThing={this.state.ingredients.ingredient_name}
              />
            </div>
        )
     } else if(this.state.searched){
      return (
          <div>
            <div>
            </div>
            <div>
              <Results
              recipes={this.state.results}
              onSelectRecipe={this.selectRecipe.bind(this)}
              dropdown={this.state.dropdown}
              />
            </div>
          </div>
        )
      } else {
      return(
        <Search
        onUpdateSearch={this.handleUpdateSearch.bind(this)}
        onUpdateDrop={this.handleUpdateDrop.bind(this)}
        onSubmitSearch={this.handleSubmitSearch.bind(this)}
        query={this.state.query}
        />
      )
    }
  }
}




