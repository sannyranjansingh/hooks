import React from 'react'

function Geust(props) {
  return (
    <div>
      <h1>welCome Geust</h1>
      <button onClick={props.clickData}>logIn</button>
      <button onClick={props.clickData}>signUp</button>
    </div>
  )
}

export default Geust
