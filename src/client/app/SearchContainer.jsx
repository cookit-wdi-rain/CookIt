
import React            from 'react'
import Search           from './Search.jsx'
import Results          from './Results.jsx'
import ResultsSelected  from './ResultsSelected.jsx'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import Ingredients      from './Ingredients.jsx'
import Pantry           from './Pantry.jsx'
import Login            from './Login.jsx'
import CreateUser       from './CreateUser.jsx'

export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      dropdown:"cuisine",
      query: "",
      searched: false,
      results: [],
      ingredients: [],
      pantry: {},
      selected: false
    }
  }

   componentDidMount(){
    // go to the db and get all the tasks
    ajax.pantryCall().then(pantry=>{
      // when the data comes back, update the state
      this.setState({ pantry: pantry })
    })
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

addToPantry(event){
  event.preventDefault();
  let item = {item:event.target.value}
  ajax.addPantry(item)

  ajax.pantryCall().then(pantry=>{
      this.setState({ pantry: pantry })
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
        query: "",
        selected: true
      })
    })

  }


  render(){
      // if(!this.state.user){
      //   return(

      //     )


      // } else
      if(this.state.searched&&this.state.selected){
      return (

          <div className="row">

            <div className="col-sm-4">
              <Ingredients
                addToPantry={this.addToPantry.bind(this)}
                recipes={this.state.results}
               />
            </div>

            <div className="col-sm-4">
              <ResultsSelected
              recipes={this.state.results}
              onSelectRecipe={this.selectRecipe.bind(this)}
              dropdown={this.state.dropdown}
              />
            </div>

            <div className="col-sm-4">
              <Pantry
                pantry={this.state.pantry}
              />

            </div>
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
        <div>
          <Search
          onUpdateSearch={this.handleUpdateSearch.bind(this)}
          onUpdateDrop={this.handleUpdateDrop.bind(this)}
          onSubmitSearch={this.handleSubmitSearch.bind(this)}
          query={this.state.query}
          />
          </div>
      )
    }
  }
}




