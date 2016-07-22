import React              from 'react'
import ReactDOM           from 'react-dom'
import SearchContainer    from './SearchContainer.jsx'
import ajax               from '../helpers/ajaxAdapter.js'
import Nav                from './Nav.jsx'
import Footer             from './Footer.jsx'

export default class App extends React.Component{
  constructor() {
    super();

    this.state = {
      recipes : {}
    }
  }


    render(){
        return(
          <container>
            <Nav />
              <div>
              <SearchContainer />
              </div>
            <Footer />
          </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
