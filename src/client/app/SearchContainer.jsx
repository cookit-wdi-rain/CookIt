import React   from 'react'
import Search  from './Search.jsx'
// import RecipeResults from './Results.jsx'
// import IngredientResults from './Results.jsx'
import Results from './Results.jsx'

import testCall from '../helpers/ajaxAdapter.js'

//=======
// import CuisineCall from '../helpers/ajaxAdapter.js'
// import IngredientsCall from '../helpers/ajaxAdapter.js'
// import RecipeCall from '../helpers/ajaxAdapter.js'
//>>>>>>> 11159e03c7727ef25367f82b4a90b83017954298

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
    console.log(this.state.query)
    testCall.test(this.state.query).then( cuisine =>{

      console.log("Got back cuisine ", cuisine)
      this.setState({
        results: cuisine,
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
    // .then(recipes=>{
    //   this.setState({
    //     results: recipes.Search,
    //     query:"",
    //     searched: true
    //   })
    // })
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













