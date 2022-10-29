import React from 'react';
import ReactDOM from 'react-dom';

import {AppContext} from './contexts/AppContext';
import './styles/styles.scss'

import AppRouter from './routers/AppRouter';

const App = () => {
    
    return (
        <AppContext.Provider 
            value={{}}
        >
            <AppRouter />
        </AppContext.Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));