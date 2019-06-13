import React from 'react';
import flower from '../images/flower.png';
import '../stylesheets/Style.css';

const Header = (props) => {
    return (      
        <div>
            <h1 className="moonIcon"> ☾ </h1>
            <h1 className="header">AMY MARTIN</h1>
            <h6 className="subheading">amymariemart@gmail.com</h6>
        </div>
    );
} 

export default Header;