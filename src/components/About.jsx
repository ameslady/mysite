import React, { Component } from 'react';
import me from '../images/me.jpg';
import '../stylesheets/Style.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutImage"> 
                    <img src={me} class="img-fluid"  alt="Responsive image"></img>
                </div>

                <br>
                </br>

                <div className="aboutHeader"> 
                    <h3> About Me </h3> 
                </div>

                <div className="aboutText">
                    <p className="text-center"> My name is Amy Martin and I am a recent graduate of Camosun College, with a diploma in Information Computer Systems from the School of Trades and Technology.
                    I have a passion for creative technology.</p>
                </div>
            </div>
        ); 
    } 
} 

export default About;