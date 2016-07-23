import React              from 'react'
import ReactDOM           from 'react-dom'
import SearchContainer    from './SearchContainer.jsx'
// import ajax               from '../helpers/ajaxAdapter.js'
// import SearchContainerTest from './SearchContainerTest.jsx'
export default class App extends React.Component{


    render(){
        return(

            <div>
            <SearchContainerTest />
            </div>
        )
    }
}
{/*this is a tes*/}
// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
