// import React, { Component } from 'react'

// export default class Map extends Component {
//   render() {
//     const arr=[10,20,30,40]
//    const newArry= arr.map((num)=>{return <li>{num*3}</li> })
//     return (
//       <>
//           <ul>
//             <li>{newArry}</li>
//           </ul>
//       </>
//     )
//   }
// }

import React, { Component } from "react";

export default class Map extends Component {
  state = {
    users: [
      { id: 101, name: "sanny", course: "mca" },
      { id: 102, name: "nitish", course: "mca+bca" },
      { id: 104, name: "shivam", course: "b-tech" }
    ],
  };
  render() {
    const newData = this.state.users;
    console.log(newData)
    return (
      <>
        {newData.map((data) => {
          return (
            <h1 key={data.id}>
               Id:{data.id} name: {data.name} course:{data.course}
            </h1>
          );
        })}
      </>
    );
  }
}
