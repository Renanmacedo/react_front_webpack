import React from 'react';
export default (props) => {
    const { header, source, body, thumbnail } = props;
    return (
        <div className="rn-card" {...props}>
        {  header && ( 
                <div className="rn-card-header">
                    <h1 className="rn-card-header-title">Title Header</h1>
                </div> )
            }
            { source && <img src={source} alt="card-image" className="nr-card-image"/> }
            {
                thumbnail && (
                    <div className="rn-card-content">
                        <div className="rn-card-content-inner">
                            {props.children}
                        </div>
                        <img src={thumbnail} alt="card-image" className="nr-card-image-thumbnail"/>
                    </div>
                )
            }
        </div>
    )
}