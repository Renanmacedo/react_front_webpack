
import React from 'react';
import { Link } from 'react-router-dom'
export default  (props) => (
    <header className="header">
    <div className="header-wrapper"></div>
        <nav className="header--navigation">
            {
                props.items.map((item, i) => (
                    <Link 
                        className={"rn-button ripple ripple-secondary"} 
                        key={i.toString()} 
                        to={item.to}>{item.title}</Link>   
                ))
            }
        </nav>
    </header>
);