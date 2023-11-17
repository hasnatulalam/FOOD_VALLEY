import { useState } from "react";

const User=({name,location})=>{
    const [count]=useState(0)
    const[count2]=useState(1)
    return (
      <div>
        <h1>Count={count}</h1>
        <h1>Count={count2}</h1>
       <h3>{name}</h3>
     <h3>{location}</h3>
     <p>Contact</p>
      </div>
    )
}
export default User;