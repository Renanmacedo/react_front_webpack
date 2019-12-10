import React from 'react';
export default (props) => {
    const {contentClass, contentStyle} = props;
    return (
        
            <div className={`content-wrapper`} style={{...contentStyle}}>
                {props.children}
            </div>
    );
};