import React, { Component } from 'react'
import PropsType from 'prop-types'

export default class FlexLayout extends Component {

    constructor(props) { super(props); }

    render() {
        const { children } = this.props;
        return (
            <div style={{display: 'flex', flex: '1 0 auto', flexFlow: this.props.flexLayout, alignItems: this.props.flexLayoutAlign }}>
                { children }
            </div>
        )
    }
}
FlexLayout.propsType = {

    flexLayout: PropsType.string
    ,flexLayoutAlign: PropsType.string
};
FlexLayout.defaultPropsType = {
    flexLayout: 'row'
    ,flexLayoutAlign: 'flex-start'
};