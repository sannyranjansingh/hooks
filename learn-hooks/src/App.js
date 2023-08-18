// import React, { useState } from 'react'
// import Number from "./Number"



// function App() {
//       const [name,setName]= useState("sanny");
//       const[roll,setRoll]=useState(101);
//       let [count, setCount]=useState(0);

//       const handleChange=()=>{
//         setName("ranjan");
//         setRoll(105);
//         setCount(count+1);
//       }
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h3>Roll: {roll}</h3>
//       <h2>{count}</h2>
//       <button  onClick={handleChange}> change </button>
//       <Number/>
      
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import useCustomCounter from './CoustomHooks'

// function App() {
//    const data= useCustomCounter();
//   return (
   
//     <>
//       <h1>Count up:{data.count}</h1>
//       <button type="button" onClick={data.handler}>Increment</button>
//     </>
//   )
// }

// export default App;



// *****conditional based rendering ********************


// import React, { Component } from 'react'
// import User from './condationalReandaring/User';
// import Geust from './condationalReandaring/Geust';
// import PrimeMember from './condationalReandaring/PrimeMember';

// export default class App extends Component {
  // render() {
  // const isRegistered = this.props.cunsumer;
    //  const primeMember=this.props.primeMember;
  //   if (isRegistered) {
  //     return <User />;
  //   }
  //   return <Geust />;
  // }
    // return (
//       <>
//          <h1>welcome User</h1>
//           {primeMember && <PrimeMember/>}
//       </>
//     )
//   }
// }


// ********************login and logout condition based********************

// import React, { Component } from 'react'
// import User from './condationalReandaring/User';
// import Geust from './condationalReandaring/Geust';

// export default class App extends Component {
//   state={
//   isLoginIn:false
//   };

//   clickLogin =()=>{
//     this.setState({isLoginIn: true})
//   }
//   clickLogOut =()=>{
//     this.setState({isLoginIn: false})
//   }

//   render() {
//     const isLoginIn=this.state.isLoginIn;
//     if(isLoginIn){
//       return <User clickData={this.clickLogOut}/>
//     }else{
//       return <Geust clickData={this.clickLogin}/>
//     }
//   }
// }

// inline condation 
// import React, { Component } from 'react'
// import User from './condationalReandaring/User';
// import Geust from './condationalReandaring/Geust';

// export default class App extends Component {

//   state={
//       isLoginIn:false
//       };
    
//       clickLogin =()=>{
//         this.setState({isLoginIn: true})
//       }
//       clickLogOut =()=>{
//         this.setState({isLoginIn: false})
//       }
//   render() {
//     const isLoginIn=this.state.isLoginIn;
    
//     return (
//       <>
//          <div>
//           {isLoginIn ? <User clickData={this.clickLogOut}/>:<Geust clickData={this.clickLogin}/>}
//          </div>
//       </>
//     )
//   }
// }

import React, { Component } from 'react'
import Map from "./listOfKey/Map"
import InlineCss from './cssProperty/InlineCss'
import "./App.css"
import Styles from "./App.module.css"
import User from './User'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className={Styles.txt}>hello world</h1>
        <User/>
        <Map/>
        <InlineCss/>
      </div>
    )
  }
}
