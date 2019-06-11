import React from 'react';
import '../stylesheets/Style.css';

class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-md bg-white justify-content-md-center justify-content-start">
                <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                    <ul class="navbar-nav mx-auto text-md-center text-left">
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/photography">Photography</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a> 
                        </li>
                    </ul>
                </div>
            </nav>
        ); 
    } 
} 

export default Nav;