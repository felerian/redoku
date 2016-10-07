import React from 'react';
import { connect } from 'react-redux'
import { Actions } from './Actions.js'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Menu, MenuItem } from 'material-ui/Menu';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import Replay from 'material-ui/svg-icons/av/replay';
import ImageFlare from 'material-ui/svg-icons/image/flare';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const Navigation = ({
    drawerOpen,
    showHighlights,
    showErrors,
    onGenerateSudoku,
    onEmptySudoku,
    onResetSudoku,
    onSolveSudoku,
    onToggleDrawer,
    onToggleShowHighlights,
    onToggleShowErrors
}) => (
        <div>
            <AppBar title="Sudoku"
                    onLeftIconButtonTouchTap={onToggleDrawer} />
            <Drawer docked={false}
                    open={drawerOpen}
                    width={300}
                    onRequestChange={onToggleDrawer}>
                <Menu>
                    <MenuItem primaryText="New"
                              leftIcon={<ImageFlare />}
                              onTouchTap={onGenerateSudoku} />
                    <MenuItem primaryText="Edit custom sudoku"
                              leftIcon={<ModeEdit />}
                              onTouchTap={onEmptySudoku} />
                    <MenuItem primaryText="Start solving"
                              leftIcon={<PlayArrow />} />
                    <MenuItem primaryText="Reset"
                              leftIcon={<Replay />} />
                    <MenuItem primaryText="Solve this for me"
                              leftIcon={<NavigationCheck />} />
                </Menu>
                <Divider />
                <List>
                    <Subheader>Preferences</Subheader>
                    <ListItem primaryText="Show highlights"
                              rightToggle={<Toggle toggled={showHighlights} onToggle={onToggleShowHighlights} />}
                              insetChildren={true}
                              />
                    <ListItem primaryText="Show errors"
                              rightToggle={<Toggle toggled={showErrors} onToggle={onToggleShowErrors} />}
                              insetChildren={true}
                              />
                </List>
            </Drawer>
        </div>
    );

const mapStateToProps = (state, ownProps) => {
    return {
        drawerOpen: state.ui.drawerOpen,
        showHighlights: state.preferences.showHighlights,
        showErrors: state.preferences.showErrors
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleDrawer: () => {
            dispatch(Actions.toggleDrawer())
        },
        onGenerateSudoku: () => {
            dispatch(Actions.generateSudoku())
            dispatch(Actions.showMessage("Backend is not available. Creating dummy sudoku."))
            dispatch(Actions.toggleDrawer())
        },
        onEmptySudoku: () => {
            dispatch(Actions.emptySudoku())
            dispatch(Actions.toggleDrawer())
        },
        onResetSudoku: () => {
            dispatch(Actions.resetSudoku())
        },
        onSolveSudoku: () => {
            dispatch(Actions.solveSudoku())
        },
        onToggleShowHighlights: () => {
            dispatch(Actions.toggleShowHighlights())
        },
        onToggleShowErrors: () => {
            dispatch(Actions.toggleShowErrors())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)
