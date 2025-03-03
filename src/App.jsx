import { useState } from 'react';
import "./app.css"

function App() {
  const [isLoggedIn, setIsloggedIN] = useState(false);

  function handleClick() {
    setIsloggedIN(!isLoggedIn)
  }


  return (
    <div className="card" >
      <h1>{isLoggedIn ? "Welcome Shafee" : "Log in to Continue"}</h1>
      <input
        className='input-box'
        type="text"
        placeholder='UserName'
      />
      <input
        className='input-box'
        type="text"
        placeholder='Password'
      />
      <button className={isLoggedIn ? "log-out" : "Log-in"} onClick={() => handleClick()}>{isLoggedIn ? "log out" : "Log in"}</button>
      <p className="status">{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
    </div >
  )
}

export default App
