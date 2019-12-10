
import React from 'react';

export default  class Header extends  React.Component {
    
    constructor(props) {
        super(props);
    }

    handleEvent(event) {
        
        if(this.checkIsSeleced(event.target.classList)) return;

        let nodeNav = event.target.parentNode;
        for(let i = 0; i < nodeNav.childNodes.length; i++) {
            if( this.checkIsSeleced(nodeNav.childNodes[i].classList) )
                nodeNav.childNodes[i].classList.remove('rn-navigation-item-selected');
        }
        event.target.classList.add('rn-navigation-item-selected');
        
    }
    checkIsSeleced(classList) {
        let count  = 0;
        while(classList.length > count) {
            if(classList[count] === 'rn-navigation-item-selected') return true;
            count++;
        }
    }
    render(){
        return (
            <header className="header-wrapper">
                    <nav className="rn-navigation"></nav>
            </header>
        )
    }
};