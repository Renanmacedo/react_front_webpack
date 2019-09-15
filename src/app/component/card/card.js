import React from 'react';
export default (props) => {

    return (
        <div className="rn-card" {...props}>
            <div className="rn-card-header">
                <h1 className="rn-card-header-title">Title Header</h1>
            </div>
            <img src={props.source} alt="card-image" className="nr-card-image"/> 

            <div className="rn-card-content">
                <p>Lore Ipsum</p>
            </div>
            <div className="rn-card-footer">
                <p>Footer card</p>
                <button className="rn-button ripple ripple-primary rn-button-outline rn-button-primary">
                    outline
                </button>
            </div>
        </div>
    )
}