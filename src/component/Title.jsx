import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <h4 id="title">
                <b>{this.props.name}</b>
            </h4>
        );
    }
};