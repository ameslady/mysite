import React, { Component } from 'react';
import ang from '../images/ang.jpg';
import dallas from '../images/dallas.jpg';
import emmy from '../images/emmy.jpg';
import sunflower from '../images/sunflower.jpg';
import shawni from '../images/shawni.jpg';
import mtdoug from '../images/mtdoug.jpg';
import okanagan from '../images/okanagan.jpg';
import abbey from '../images/abbey.jpg';
import salty from '../images/salty.jpg';
import '../stylesheets/Style.css';

class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
    
    render() {
        return (
            <div className="photos">
                <div className="row1">
                    <img className="img1" src={ang}></img>
                    <img className="img2" src={dallas}></img>
                    <img className="img3"src={emmy}></img>
                </div>

                <div className="row2">
                    <img src={sunflower}></img>
                    <img src={shawni}></img>
                    <img src={mtdoug}></img>
                </div>

                <div className="row3">
                    <img src={okanagan}></img>
                    <img src={abbey}></img>
                    <img src={salty}></img>
                </div>
            </div>
        ); 
    } 
} 

export default Photography;