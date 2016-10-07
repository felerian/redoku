const TOGGLE_SHOW_HIGHLIGHTS = 'TOGGLE_SHOW_HIGHLIGHTS';
const TOGGLE_SHOW_ERRORS = 'TOGGLE_SHOW_ERRORS';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const GENERATE_SUDOKU = 'GENERATE_SUDOKU';
const EMPTY_SUDOKU = 'EMPTY_SUDOKU';
const RESET_SUDOKU = 'RESET_SUDOKU';
const SOLVE_SUDOKU = 'SOLVE_SUDOKU';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const EDIT_CELL = 'EDIT_CELL';
const CHANGE_CELL = 'CHANGE_CELL';

const toggleShowHighlightsCreator = () => { return { type: TOGGLE_SHOW_HIGHLIGHTS } };
const toggleShowErrorsCreator = () => { return { type: TOGGLE_SHOW_ERRORS } };
const toggleDrawerCreator = () => { return { type: TOGGLE_DRAWER } };
const generateSudokuCreator = () => { return { type: GENERATE_SUDOKU } };
const emptySudokuCreator = () => { return { type: EMPTY_SUDOKU } };
const resetSudokuCreator = () => { return { type: RESET_SUDOKU } };
const solveSudokuCreator = () => { return { type: SOLVE_SUDOKU } };
const showMessageCreator = (message) => { return { type: SHOW_MESSAGE, value: message } };
const hideMessageCreator = () => { return { type: HIDE_MESSAGE } };
const editCellCreator = () => { return { type: EDIT_CELL } };
const changeCellCreator = () => { return { type: CHANGE_CELL } };

export const Actions = {
    toggleShowHighlights: toggleShowHighlightsCreator,
    toggleShowErrors: toggleShowErrorsCreator,
    toggleDrawer: toggleDrawerCreator,
    generateSudoku: generateSudokuCreator,
    emptySudoku: emptySudokuCreator,
    resetSudoku: resetSudokuCreator,
    solveSudoku: solveSudokuCreator,
    showMessage: showMessageCreator,
    hideMessage: hideMessageCreator,
    editCell: editCellCreator,
    changeCell: changeCellCreator
};

export const ActionTypes = {
  toggleShowHighlights: TOGGLE_SHOW_HIGHLIGHTS,
  toggleShowErrors: TOGGLE_SHOW_ERRORS,
  toggleDrawer: TOGGLE_DRAWER,
  generateSudoku: GENERATE_SUDOKU,
  emptySudoku: EMPTY_SUDOKU,
  resetSudoku: RESET_SUDOKU,
  solveSudoku: SOLVE_SUDOKU,
  showMessage: SHOW_MESSAGE,
  hideMessage: HIDE_MESSAGE,
  editCell: EDIT_CELL,
  changeCell: CHANGE_CELL
};
