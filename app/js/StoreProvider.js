import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { ActionTypes } from './Actions.js';
import { List } from 'immutable';

const prepareSudoku = (sudoku) => {
    let result = []
    for (let r=0; r<9; r++) {
        let row = []
        for (let c=0; c<9; c++) {
            row.push({
                value: sudoku[r][c],
                fixed: true,
                hint: false,
                error: false,
                row: r,
                col: c
            });
        }
        result.push(row);
    }
    return result;
};

const generateSudoku = () => {
    return prepareSudoku([
        [0, 0, 0, 0, 0, 3, 0, 8, 0],
        [3, 0, 8, 1, 0, 0, 0, 0, 9],
        [0, 9, 0, 6, 2, 0, 0, 0, 4],
        [0, 0, 9, 0, 0, 7, 0, 2, 0],
        [8, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 3],
        [0, 0, 0, 7, 0, 6, 8, 0, 0],
        [2, 0, 5, 4, 8, 0, 3, 0, 0],
        [7, 0, 3, 0, 5, 0, 0, 1, 0]
    ]);
};

const emptySudoku = () => {
    return prepareSudoku([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
};

const boardReducer = (state = initialBoard, action) => {
    switch (action.type) {
        case ActionTypes.generateSudoku:
            return Object.assign({}, state, {
                sudoku: generateSudoku()
            })
        case ActionTypes.emptySudoku:
            return Object.assign({}, state, {
                sudoku: emptySudoku()
            })
    }
    return state
};

const initialBoard = {
    sudoku: null
};

const initialPreferences = {
    showHighlights: false,
    showErrors: true
};

const initialUi = {
    drawerOpen: false,
    message: null,
    showMessage: false
};

const preferencesReducer = (state = initialPreferences, action) => {
    switch (action.type) {
        case ActionTypes.toggleShowHighlights:
            return Object.assign({}, state, {
                showHighlights: !state.showHighlights
            })
        case ActionTypes.toggleShowErrors:
            return Object.assign({}, state, {
                showErrors: !state.showErrors
            })
    }
    return state;
};

const uiReducer = (state = initialUi, action) => {
    switch (action.type) {
        case ActionTypes.toggleDrawer:
            return Object.assign({}, state, {
                drawerOpen: !state.drawerOpen
            })
        case ActionTypes.showMessage:
            return Object.assign({}, state, {
                message: action.value,
                showMessage: true
            })
        case ActionTypes.hideMessage:
            return Object.assign({}, state, {
                showMessage: false
            })
    }
    return state;
};

export const store = createStore(
  combineReducers({
    board: boardReducer,
    preferences: preferencesReducer,
    ui: uiReducer
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
