import { useState } from "react";

function useCustomCounter(){
   const[count,setCount]= useState(0);

   const handler=()=>{
       setCount(count+1);
   }
   return{
    count,
    handler
   }
}
export default useCustomCounter;