import React from 'react';

export default class Panel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='box'>
                <div className='barCode'>Barcode:</div>
            <div id='entrybox'>
                <div id='entry'>
                    <span id='cal'>{this.props.value}</span>
                </div>
                <div id="ans"> 
                           
                    <span id='history'>
                        </span>
                        {this.props.history[0]}
                </div>
            </div>
            </div>
            
        );
    }
};