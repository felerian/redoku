import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {store} from './StoreProvider.js';
import Navigation from './Navigation.jsx';
import Sudoku from './Sudoku.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component{

    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <div>
                        <Navigation />
                        <Sudoku />
                        <Footer />
                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

injectTapEventPlugin();

ReactDOM.render(<Main />, document.getElementById('main'));
