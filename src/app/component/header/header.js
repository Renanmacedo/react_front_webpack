
import React from 'react';
import { Link } from 'react-router-dom'
export default  (props) => (
    <header className="header-wrapper">
        <div className="rn-shadow">
            <nav className="rn-navigation">
                <a className={"rn-navigation-item"} href="#home">
                    Home
                </a>
                <a className={"rn-navigation-item"} href="#quemsomos">
                    Quem Somos
                </a>
                <a className={"rn-navigation-item"} href="#quemsomos">
                    Contato
                </a>
                {/* {
                    props.items.map((item, i) => (
                        <Link 
                            className={"rn-navigation-item"} 
                            key={i.toString()} 
                            to={item.to}>{item.title}</Link>   
                    ))
                } */}
            </nav>
        </div>
    </header>
);