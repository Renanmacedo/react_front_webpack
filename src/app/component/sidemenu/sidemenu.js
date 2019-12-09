
import React,{ Component } from 'react';
import PropsType from 'prop-types';
export default class Sidemenu extends Component {
    constructor(props) {

        super(props);
        this.state = {
            visible: true
        }
    }
    render(){
        return(
            <>
            { this.state.visible && 
                <div className="sidemenu--container" >
                    <div className="sidemenu--inner">
                        
                        { this.props.children }
                    </div>
                </div>
            }
            </>
        )
    }
}
Sidemenu.prototype = {
    items: PropsType.arrayT
}