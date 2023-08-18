import React from 'react'

function User(props) {
  return (
    <div>
      <h1>welCome Sanny</h1>
      <button onClick={props.clickData}>logOut</button>
    </div>
  )
}

export default User
