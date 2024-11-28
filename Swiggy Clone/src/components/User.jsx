import React from "react"
import twitterImage from "../utils/img/twitter.png"
import insta from '../utils/img/instagram.png'
import linked from '../utils/img/linkedin.png'
import github from '../utils/img/github.png'


export class User extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                name :"Vikas",
                bio  :"Bio",
            }
        }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/gitVikas898");

        const response = await data.json();

        this.setState({
            userInfo:response,
        })
    }

    render()
    {  
        const {name, bio ,avatar_url} = this.state.userInfo;
        return (
           <div className="contact-card">
                <div className="contact-image-ctn">
                    <img src={avatar_url} className="user-img"></img>
                </div>
                <div className="contact-info">
                    <h2>{name}</h2>
                    <p>{bio}</p>
                    <h3>Social Links</h3>
                    <div className="contact-links">

                        <div className="socials">
                            <a href="#"> <img src={twitterImage} alt=""  className="ctn-icons"/></a>
                        </div>
                        <div className="socials">
                            <a href="#"> <img src={insta} alt=""  className="ctn-icons"/></a>
                        </div>
                        <div className="socials">
                             <a href="#"> <img src={linked} alt=""  className="ctn-icons"/></a>
                        </div>
                        <div className="socials">
                             <a href="#"> <img src={github} alt=""  className="ctn-icons"/></a>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

