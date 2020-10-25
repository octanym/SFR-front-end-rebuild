import React, { useState } from 'react';


const LogIn = () => {

  //an object in state equal to 'credentials' that will hold the value of the inputs in a preferable format
  const [credentials, setCredentials] = useState({username: "", password: ""})

  //this triggers when we click submit
  const handleSubmit = (e) => {
  //stop default behavior that the click event triggers on the form element
  }

  //this triggers when any changes to the value of input element occurs
  const handleChanges = (e) => {
  //spreading and setting
    setCredentials({...credentials,
      [e.target.name]: e.target.value
  })
  console.log(credentials)
  //spread any occurring value changes of event targets into corresponding props in state
  }

  return (
    <>
      <h1>Log In to Secret Family Recipes</h1>
      <form onSubmit={handleSubmit} >

        <input
          value={credentials.username}
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChanges}
        />

        <input
          value={credentials.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
        />

        <button type="submit" >Go</button>
      </form>
    </>
  )
}

export default LogIn;