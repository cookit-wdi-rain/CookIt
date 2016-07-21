import React   from 'react'
import Search  from './Search.jsx'
import Results from './Results.jsx'
// import ajax    from '../helpers/ajaxAdapter.jsx'
import CuisineCall from '../helpers/ajaxAdapter.js'
import IngredientsCall from '../helpers/ajaxAdapter.js'
import RecipeCall from '../helpers/ajaxAdapter.js'

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
    RecipeCall(this.state.query).then( cuisine =>{
      console.log("Got back cuisine ", cuisine)
      this.setState({
        results: cuisine,
        query:"",
        searched: true
      })
    })
    // .then(recipes=>{
    //   this.setState({
    //     results: recipes.Search,
    //     query:"",
    //     searched: true
    //   })
    // })
  }
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
              recipes={this.state.results}/>
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













