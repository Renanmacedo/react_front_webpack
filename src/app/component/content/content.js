import React from 'react';
export default (props) => {
    const {contentClass, contentStyle} = props;
    return (
        <div className="content">
            <div className={`content-wrapper ${contentClass}`} style={{...contentStyle}}>
                {props.children}
            </div>
        </div>
    );
};