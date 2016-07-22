import React          from 'react'
import Search         from './Search.jsx'
import Results        from './Results.jsx'
import DropTest     from './Droptest.jsx'
//import TestingResults from './TestingResults.jsx'
// import RecipeResults  from './CuisineResults.jsx'
import ajax           from '../helpers/ajaxAdapter.js'

export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      dropdown:"cuisine",
      query: "",
      searched: false,
      results: []
    }
  }

  handleUpdateDrop(event){
    console.log(event.target.value)
    this.setState({
      dropdown: event.target.value,
    })
  }

  handleUpdateSearch(event){
    console.log(event.target.value)
    this.setState({
      query: event.target.value
    })
  }
  handleSubmitSearch(event){
    event.preventDefault();
    console.log(event.target.value)
    console.log(this.state.dropdown)
   if(this.state.dropdown ==="cuisine"){
    ajax.cuisineCall(this.state.query).then( cuisine =>{
    // ajax.testCall(this.state.query).then( cuisine =>{
    //console.log(this.state.query)
    console.log("Got back cuisine ", cuisine)
      this.setState({
        results: cuisine.results,
        // results:cuisine,
        // dropdown:event.state.dropdown,
        query:"",
        searched: true
      })
    })
    }
    if(this.state.dropdown === "ingredient"){
       ajax.ingredientsCall(this.state.query).then( ingredient =>{
    // ajax.testCall(this.state.query).then( cuisine =>{
    //console.log(this.state.query)
    console.log(ingredient)
      this.setState({
        results: ingredient,
        query:"",
        searched: true
      })
    })
    }
  }

  selectRecipe(event){
    event.preventDefault();
    this.setState({
      query: event.target.value
      })
    console.log(event.target.value)
    testCall.secondCall(event.state.query).then( cuisine =>{
      this.setState({
        results: cuisine,
        query: "",
        searched: true
      })
    })

  }

  // handleSubmitSearchIngredients(event){
  //   event.preventDefault();
  //   IngredientsCall(this.state.query).then( ingredient =>{
  //     console.log("Got back ingredient ", ingredient)
  //     this.setState({
  //       results: ingredient,
  //       query: "",
  //       searched: true
  //     })
  //   })
  // }
  render(){
     if(this.state.searched){
      return (
          <div>
            <div>
              <DropTest
              onUpdateSearch={this.handleUpdateSearch.bind(this)}
              onUpdateDrop={this.handleUpdateDrop.bind(this)}
              onSubmitSearch={this.handleSubmitSearch.bind(this)}
              query={this.state.query} />
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
        <DropTest
         onUpdateSearch={this.handleUpdateSearch.bind(this)}
        onUpdateDrop={this.handleUpdateDrop.bind(this)}
        onSubmitSearch={this.handleSubmitSearch.bind(this)}
        query={this.state.query}
        />
      )
    }
  }
}




