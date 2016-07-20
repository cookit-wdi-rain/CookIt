import React            from 'react'
import ReactDOM         from 'react-dom'

export default class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Hi</h1>
            </div>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
