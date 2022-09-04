import React from "react";
function Header(props){
    let arr;
 arr = props.breeds
  if(arr.length===0){
    props.getbreeds()
  }
  else{
    // debugger
    arr = arr.map((el,ind,arr) => {
        return (
            <option className="dog" key={arr[ind]}>{el}</option>
        )
    });
return (
    <div className="wrapper">
        <h1>About dogs</h1>
        <select className="choose" onChange={(e)=>{
            props.onSelectChange(e)
        }}>
            {arr}
        </select>
        <button className="btn" onClick={()=>{
            props.onbtnclick()
        }}>Click Me</button>
    </div>
)
  }
    // props.getbreeds()
}
export default Header