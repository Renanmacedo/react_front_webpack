
import React from 'react';
import { Link } from 'react-router-dom'
export default  (props) => (
    <div className="header--wrapper">
        <nav className="header--navigation">
            {
                props.items.map((item, i) => (
                    <Link className={"rn-button rn-button-primary"} key={i.toString()} to={item.to}>{item.title}</Link>   
                ))
            }
        </nav>
    </div>
);