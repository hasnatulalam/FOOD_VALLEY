import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            userInfo:{
                login:"Dummy",
                html_url:"Default"
            }
        }
       // console.log ("Child constructor called");
    }
   async componentDidMount(){
      //  console.log(" child Component Did Mount Call ");
        //Api calls this method
        const data=await fetch("https://api.github.com/users/hasnatul")
        const json=await  data.json()
       this.setState({
         userInfo:json
       })
     //  console.log(json)
       
    }
    componentDidUpdate(){
        //console.log("Component Did update")
    }
    componentWillUnmount(){
       // console.log("Component will unmount")
    }
    
    render() {
       
       
        console.log( "Child render is called")
       const {login,html_url}=this.state.userInfo;
        return(
        <div>   
            <h2 className="font-bold">Name: {login}</h2>  
            <h3 className="font-bold">Github_url : {html_url}</h3>
         </div>  
        );
    }
}

export default UserClass;

/* 

---MounTain---
Constructor(dummy)
Render(dummy)
<HTML Dummy Data>
component Did Mount
    <Api call>
    <This.setState> state variable is updated
 -----Update----

    render(Api Data);
    <HTML is Loaded new Api data>
    ComponentDidUpdate





*/