import React from 'react';
import { connect } from 'react-redux';
import { Actions } from './Actions.js';
import Paper from 'material-ui/Paper';
import Cell from './Cell.jsx';
import Popover from 'material-ui/Popover';
import { Menu, MenuItem } from 'material-ui/Menu';

const styles = {
    table: {
        borderCollapse: "collapse",
        textAlign: "center",
        fontSize: "26px",
        cursor: "pointer",
        tableLayout: "fixed",
        width: "100%"
    },
    paper: {
        width: "90%",
        maxWidth: "600px",
        margin: "40px auto"
    }
}

const drawCell = (cell, index) => {
    return (
        <Cell cell={cell} onTap={onEditCell} key={index} />
    );
};

const drawRow = (row, index) => {
    return (
        <tr className="sudoku-row" key={index} >
            {row.map(drawCell)}
        </tr>
    );
};

const drawBoard = (sudoku) => {
    return (
        <table style={styles.table}>
            <tbody>
                {sudoku.map(drawRow)}
            </tbody>
        </table>
    );
};

const Sudoku = ({sudoku}) => (
    sudoku != null ?
        <div>
            <Paper style={styles.paper}
                   zDepth={3}>
                {drawBoard(sudoku)}
            </Paper>
            <Popover open={true}
                     anchorEl={null}
                     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                     targetOrigin={{horizontal: 'left', vertical: 'top'}}
                     onRequestClose={null}
                     >
                <Menu>
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help &amp; feedback" />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Sign out" />
                </Menu>
            </Popover>
        </div>
    : null
);

const mapStateToProps = (state, ownProps) => {
    return {
        sudoku: state.board.sudoku
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sudoku)
