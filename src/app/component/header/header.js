
import React from 'react';
export default  (props) => (
    <nav>
        <ul className="header--navigation">
        {
            props.items.map((item, i) => (
                <li key={i.toString()}>{item.title}</li>   
            ))
        }
        </ul>
    </nav>
);