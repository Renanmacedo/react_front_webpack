import React from 'react';
export default (props) => {
    const { header, source, body, thumbnail, styleWrapper  } = props;
    return (
       <div className="rn-card" style={{...styleWrapper}} >
        {  header && ( 
                <div className="rn-card-header">
                    <h1 className="rn-card-header-title"> { } </h1>
                </div> )
            }
            { source && <img src={source} alt="card-image" className="nr-card-image"/> }
            {/* {
                thumbnail && (
                    <div className="rn-card-content">
                        <div className="rn-card-content-inner">
                            {props.children}
                        </div>
                        <img src={thumbnail} alt="card-image" className="nr-card-image-thumbnail"/>
                    </div>
                )
            } */}
            {  props.children }
        </div>
    )
}