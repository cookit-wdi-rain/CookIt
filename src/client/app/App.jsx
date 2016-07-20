import React              from 'react'
import ReactDOM           from 'react-dom'
import ajax               from '../helpers/ajaxAdapter.js'
import SearchByIngredient from './SearchByIngredient.jsx'

export default class App extends React.Component{
  constructor() {
    super();

    this.state = {
      recipes : {}
    }
  }


    render(){
        return(
            <div>
            <h1>Hi</h1>
            </div>
            <SearchByIngredient />

        )
    }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
