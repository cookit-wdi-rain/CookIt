import React   from 'react'
import Search  from './Search.jsx'
//import Results from './Results.jsx'
//import ajax    from '../helpers/ajaxAdapter.jsx'


export default class SearchContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      query: "",
      searched: false,
      result: []
    }
  }

  handleUpdateSearch(event){
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitSearch(event){
    event.preventDefault();
    CuisineCall(this.state.query).then( cuisine =>{
      console.log("Got back cuisine ", cuisine)
      this.setState({
        results: recipes.Search,
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
    return(
      <Search
      onUpdateSearch={this.handleUpdateSearch.bind(this)}
      onSubmitSearch={this.handleSubmitSearch.bind(this)}
      query={this.state.query}
      />
    )
  }

}













