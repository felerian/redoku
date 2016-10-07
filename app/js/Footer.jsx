import React from 'react';
import { connect } from 'react-redux'
import { Actions } from './Actions.js'
import Snackbar from 'material-ui/Snackbar'

const Footer = ({message, showMessage, onHide}) => {
    return (
        <Snackbar message={<span>{message}</span>}
                  open={showMessage}
                  autoHideDuration={2000}
                  onRequestClose={onHide}/>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.ui.message,
        showMessage: state.ui.showMessage
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onHide: () => {
            dispatch(Actions.hideMessage())
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
