import React from 'react';
import press from '../action/press';
import app from '../config/app.config';

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    buttonHandler(entry) {
        this.props.press(entry);
    }

    render() {
        const buttons = app.config.keyConfig.map((row, y) =>
            <tr key={y}>{row.map((button, x) =>
                <td key={x}>
                    <button key={button.key} className={button.class} onClick={this.buttonHandler.bind(this, button.action)}>{button.key}</button>
                </td>
            )}</tr>
        );

        return (
            <div id="buttons">
                <table>
                    <tbody>
                        {buttons}
                    </tbody>
                </table>
            </div>
        );
    }
};