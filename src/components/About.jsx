import React, { Component } from 'react';
import me from '../images/me.jpg';
import insta from '../images/insta.png';
import linked from '../images/linked.png';
import '../stylesheets/Style.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutImage"> 
                    <img src={me} class="img-fluid"></img>
                </div>

                <br>
                </br>

                <div className="aboutHeader"> 
                    <h3> About Me </h3> 
                </div>

                <div className="aboutText">
                    <p className="text-center"> My name is Amy Martin and I am a recent graduate of Camosun College, with a diploma in Information Computer Systems from the School of Trades and Technology.</p>
                    <p className="text-center"> Please contact for resume.</p>
                </div>

                <div className="icons"> 
                    <a href="https://www.instagram.com/ameslady/"><img src={insta}></img></a>
                    <a href="https://www.linkedin.com/in/amymariemart/"><img src={linked}></img></a>
                </div>
            </div>
        ); 
    } 
} 

export default About;