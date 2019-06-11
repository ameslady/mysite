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
                    <a href="/angela"><img className="img1" src={ang}></img></a>
                    <a href="/big-blue"><img className="img2" src={dallas}></img></a>
                    <a href="/emmy"><img className="img3"src={emmy}></img></a>
                </div>

                <div className="row2">
                    <a href="/sanfran"><img src={sunflower}></img></a>
                    <a href="/shawnigan"><img src={shawni}></img></a>
                    <a href="/mt-doug"><img src={mtdoug}></img></a>
                </div>

                <div className="row3">
                    <a href="/okanagan"><img src={okanagan}></img></a>
                    <a href="/abbey"><img src={abbey}></img></a>
                    <a href="/saltspring"><img src={salty}></img></a>
                </div>
            </div>
        ); 
    } 
} 

export default Photography;