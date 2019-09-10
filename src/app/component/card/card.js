import React from 'react';
export default (props) => {
    
    return (
        <div className="rn-card" {...props}>
            <div className="rn-card-header">
                <h1 className="rn-card-header-title">Title Header</h1>
            </div>
            {props.children}
        </div>
    )
}