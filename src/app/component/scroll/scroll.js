
import React from 'react';
export default (props) => {
    const { scrollPosition, scrollStyle } = props;
    
    return(
        <div style={{...scrollStyle}} className={`scroll-container ${checkPosition(scrollPosition)}`}>
            {props.children}
        </div>
    )    
};

const checkPosition = position => {
    return isNull(position) ? 'scrollabel' : position == 'horizontal' ? 'scrollabel-x' : position == 'vertical' ? 'scrollabel-y' : 'scrollabel';
}
const isNull = rawValue => {
    return rawValue == null && rawValue == '';
}
