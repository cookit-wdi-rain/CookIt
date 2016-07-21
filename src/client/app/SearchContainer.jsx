import React          from 'react'
import Search         from './Search.jsx'
import Results        from './Results.jsx'
import TestingResults from './TestingResults.jsx'
import RecipeResults  from './CuisineResults.jsx'
import ajax           from '../helpers/ajaxAdapter.js'

export default class SearchContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      query: "",
      searched: false,
      results: []
    }
  }

  handleUpdateSearch(event){
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitSearch(event){
    event.preventDefault();
    ajax.cuisineCall(this.state.query).then( cuisine =>{
    //ajax.testCall(this.state.query).then( cuisine =>{
    //console.log(this.state.query)
    console.log("Got back cuisine ", cuisine)
      this.setState({
        results: cuisine.results,
        // results:cuisine,
        query:"",
        searched: true
      })
    })
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

  handleSubmitSearchIngredients(event){
    event.preventDefault();
    IngredientsCall(this.state.query).then( ingredient =>{
      console.log("Got back ingredient ", ingredient)
      this.setState({
        results: ingredient,
        query: "",
        searched: true
      })
    })

  render(){
     if(this.state.searched){
      return (
          <div>
            <div>
              <Search
              onUpdateSearch={this.handleUpdateSearch.bind(this)}
              onSubmitSearch={this.handleSubmitSearch.bind(this)}
              query={this.state.query} />
            </div>
            <div>
              <Results
              recipes={this.state.results}
              onSelectRecipe={this.selectRecipe.bind(this)}
              query={this.state.query}/>
            </div>
          </div>
        )
      } else {
      return(
        <Search
        onUpdateSearch={this.handleUpdateSearch.bind(this)}
        onSubmitSearch={this.handleSubmitSearch.bind(this)}
        query={this.state.query}
        />
      )
    }
  }
}













