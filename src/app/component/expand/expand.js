
import React from 'react';
import Propstype from 'prop-types';
export default class Expand extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCollapse: false
        }
    }
    collapse() {

    }
    render() {
        return (
            <div className="rn-expand" >
                <div className="rn-expand-header">
                    {this.props.header}
                </div>
                <div className="rn-expand-collapse">
                    
                </div>
            </div>
        )
    }
}
Expand.propsType =  {
    header: Propstype.oneOfType([
        Propstype.string
        ,Propstype.element
    ])
}