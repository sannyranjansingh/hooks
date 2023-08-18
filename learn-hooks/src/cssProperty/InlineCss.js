import React, { useState } from 'react'

function InlineCss() {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
    const btnStyle={
        padding:"10px 20px",
        border:"none",
        fontSize:"20px",
        borderRadius: "10px",  
        backgroundColor: isHover ? 'orange' : 'pink',
        color: isHover ? 'white' : 'black', 
        cursor:"pointer", 
        transition:"1s ease"
    }
    
    
  return (
    <div>
      <button style={btnStyle} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>submit</button>
    </div>
  )
}

export default InlineCss;
