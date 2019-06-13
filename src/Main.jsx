import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Photography from './components/Photography';
import Projects from './components/Projects';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Nav/>
                <Projects/>
                <Footer/>
            </div>
        ); 
    } 
} 

export default Main;