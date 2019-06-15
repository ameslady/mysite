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
                    <img class="img-fluid p-1" src={ang}></img>
                    <img class="img-fluid p-1" src={dallas}></img>
                    <img class="img fluid p-1" src={emmy}></img>
                </div>

                <div className="row2">
                    <img class="img-fluid p-1" src={sunflower}></img>
                    <img class="img-fluid p-1" src={shawni}></img>
                    <img class="img-fluid p-1" src={mtdoug}></img>
                </div>

                <div className="row3">
                    <img class="img-fluid p-1" src={okanagan}></img>
                    <img class="img-fluid p-1" src={abbey}></img>
                    <img class="img-fluid p-1" src={salty}></img>
                </div>
            </div>
        ); 
    } 
} 

export default Photography;