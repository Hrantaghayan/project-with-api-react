import React from "react";
import Header from "./header";
import Body from "./body";
class Getsrc extends React.Component{
    constructor(...args){
        super(...args)
     this.state={
        value:'affenpinscher',
        allbreeds:[],
        firstload:false,
        imgarr:[]
     }
    }
    onSelectChange=(e)=>{
        // debugger
      console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
    firstfetch=()=>{
        // debugger
        let arr;
            // debugger
            fetch('https://dog.ceo/api/breeds/list/all')
            .then((response)=>{
                return response.json()
            })
            .then((result)=>{
                // debugger
               arr = Object.keys(result.message)
               this.setState({
                allbreeds:arr,
                firstload:true
               })
            })
    }
    onbtnclick=()=>{
        debugger
        fetch(`https://dog.ceo/api/breed/${this.state.value}/images`)
        .then((response)=>{
            return response.json()
        })
        .then((result)=>{
            let arr = result.message.slice(0,3)
            this.setState({
                imgarr:arr
            })
        })
    }

    render(){
        // debugger
        return(
            <div className="auth-content">
            <Header
                        breeds={this.state.allbreeds}
                        getbreeds={this.firstfetch}
                        onSelectChange={this.onSelectChange}
                        onbtnclick={this.onbtnclick}
                   /> 
                   <Body
                   imgarr={this.state.imgarr}
                   />        
            </div>

        )
    }
}
export default Getsrc