import React from 'react';
import { connect } from 'react-redux'
import { Actions } from './Actions.js'
import FlatButton from 'material-ui/FlatButton';

const styles = {
    content: {
        position: "absolute",
        width: "100%",
        height: "100%",
        minWidth: "0",
    }
}

const Cell = ({cell, onTap}) => {
    var value = cell.value;
    var style = {
        backgroundColor: cell.error ? "rgba(255, 0, 0, 0.15)" : "none"
    };
    return (
        <td className="sudoku-col" style={styles.col}>
            <div className="sudoku-cell">
                <FlatButton className="sudoku-cell-content"
                            label={<span style={{
                                    fontSize: "26px",
                                    fontWeight: cell.fixed ? "bold" : "normal"
                                }}>{value > 0 ? value : " "}</span>}
                            style={styles.content}
                            onTouchTap={() => {onTap}} />
            </div>
        </td>
    );
};

export default Cell
