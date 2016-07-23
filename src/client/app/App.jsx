import React              from 'react'
import ReactDOM           from 'react-dom'
import SearchContainer    from './SearchContainer.jsx'

import Header             from './Header.jsx'

// import ajax               from '../helpers/ajaxAdapter.js'




export default class App extends React.Component{


    render(){
        return(
          <container>
              <div>
              <Header />
              <SearchContainer />
              </div>
          </container>
        )
    }
}
{/*this is a tes*/}
// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
