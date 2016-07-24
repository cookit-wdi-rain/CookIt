import React from 'react';

export default class CreateUser extends React.Component {

handleSubmit(event){
  event.preventDefault()
  let data = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
  }
    fetch('/api/users',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(data=>{
      console.log(data)
    })


}


  render(){
    return(
        <form onSubmit={this.handleSubmit} >
            <label>Name:</label>
            <input type="text" name="name"/><br/>
            <label>Email:</label>
            <input type="text" name="email"/><br/>
            <label>Password:</label>
            <input type="password" name="password"/><br/>
            <input type="submit" value="Create New User"/>
        </form>
    )
  }

}
