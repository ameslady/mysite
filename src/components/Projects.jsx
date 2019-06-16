import React, { Component } from 'react';
import livestream from '../images/livestream2.png';
import tetris from '../images/tetris.PNG';
import wonka from '../images/wonka38.png';
import '../stylesheets/Style.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                    <div class="col-8 mx-auto">
                        <div class="card mb-3">
                            <img class="card-img-top" src={livestream} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Livestream Voting Application</h5>
                                <p class="card-text">Developed an iOS mobile application and a supporting web application for software development and consulting firm, Three Trees Technical, as a final project for the ICS program's Capstone course.</p>
                                <a href="https://teamrealitybytes.wixsite.com/capstone" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-8 mx-auto">
                        <div class="card mx-auto mb-3">
                            <img class="card-img-top" src={tetris} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Tetris</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                <div class="col-8 mx-auto">
                    <div class="card mx-auto mb-3">
                        <img class="card-img-top" src={wonka} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Online Shopping Cart</h5>
                            <p class="card-text">Implemented web development technologies in creating an online storefront for an applied computing project using HTML, XHTML, XML, PHP, CSS, and MySQL.</p>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    } 
} 

export default Projects;