import React from 'react';

export default class History extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const recordList = this.props.records.map((record, i) => <li key={i} className="record">{record}</li>);

        return (
            <ol id="history-list">
                {recordList}
            </ol>
        );
    }
};