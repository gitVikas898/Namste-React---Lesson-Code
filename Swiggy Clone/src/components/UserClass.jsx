import React from "react";
import { useState } from "react";


export class UserClass extends React.Component {

    constructor(props){
        super(props)

       this.state = {
            userInfo:{
                name:"Dummy name",
                bio:"Dummy bio"
            }
       }
    }   

   async componentDidMount(){
    console.log("Component Did Mount")

     const userData = await fetch("https://api.github.com/users/gitVikas898");

     const response = await userData.json();

     this.setState({
        userInfo:response,
     })
   }

    render(){

        const {name,bio,twitter_username,avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                  <div className="user-info-box">
                      <h2>{name}</h2>
                      <p>{bio}</p>
                      <p>Twitter:{twitter_username}</p>
                  </div>
                  <div className="user-image-box">
                    <img src={avatar_url} alt="" className="user-img" />
                  </div>
             </div>
        )
    }
}