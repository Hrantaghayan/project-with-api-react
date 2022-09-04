import React from "react"
function Body(props){
    let arr = props.imgarr
    arr=arr.map((el,ind)=>{
        return(
            <div>
                <img src={el} alt="good"/>
            </div>
        )
    })
    return(
        <div className="container">
            {arr}
        </div>
    )
}
export default Body