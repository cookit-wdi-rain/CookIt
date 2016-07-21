import React from 'react'
import Search from './Search.jsx'
import Results from './Results.jsx'
import ajax from '../helpers/ajaxAdapter.jsx'


export default class SearchContainer extends React.Component {

  contructor(){
    super()
    this.state = {
      query:"",
      searched: false,
      results:[]
    }

  }

  handleUpdateSearch(event){
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitSearch(event){
    event.preventDefault();
    ajax(this.state.query)
    .then(recipes=>{
      this.setState({
        results: recipes.Search,
        query:"",
        searched: true
      })
    })
  }
  render(){
    return(
      <Search
      onUpdateSearch={this.handleUpdateSearch.bind(this)}
      onSubmitSearch={this.handleSubmitSearch.bind(this)}
      query={this.state.query}
      />
    )
  }

}













