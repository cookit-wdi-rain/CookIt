import React          from 'react'
// import Search         from './Search.jsx'
import Results        from './Results.jsx'
import TestingResults from './TestingResults.jsx'
// import RecipeResults  from './CuisineResults.jsx'
import ajax           from '../helpers/ajaxAdapter.js'

export default class SearchContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      // selected:"",
      query: "",
      searched: false,
      selected: false,
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
    // ajax.testCall(this.state.query).then( cuisine =>{
    //console.log(this.state.query)
    console.log("Got back cuisine ", cuisine, this.refs.menu.value)
      this.setState({
        // selected:this.refs.menu.value
        results: cuisine.results,
        // results:cuisine,
        query:"",
        selected: false,
        searched: true
      })
    })
    event.target.reset()
  }

  selectRecipe(event){
    event.preventDefault();
    console.log('doing something')
    this.setState({
      query: event.target.value
      })
    console.log(event.target.value)
    ajax.secondCall(event.target.value)
    .then(cuisine => console.log(cuisine))
    .then( cuisine =>{
      this.setState({
        results: cuisine,
        selected: true,
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
  }
  render(){
     if(this.state.searched){
      return (
          <div>
            <div>
              <SearchTest
              onUpdateSearch={this.handleUpdateSearch.bind(this)}
              onSubmitSearch={this.handleSubmitSearch.bind(this)}
              query={this.state.query} />
            </div>
            <div>
              <TestingResults
              recipes={this.state.results}
              //onUpdateSearch={this.handleUpdateSearch.bind(this)}
              onSelectRecipe={this.selectRecipe.bind(this)}
              selected={this.state.selected}
              query={this.state.query}/>
            </div>
          </div>
        )
      } else {
      return(
        <SearchTest
        onUpdateSearch={this.handleUpdateSearch.bind(this)}
        onSubmitSearch={this.handleSubmitSearch.bind(this)}
        query={this.state.query}
        />
      )
    }
  }
}






