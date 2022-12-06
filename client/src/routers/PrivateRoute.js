import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    const { user } = useContext(AppContext);
    
    return (
            <Route {...rest} component={(props) => (
                user ? ( 
                    <div>
                        <Component {...props}/>
                    </div>
                ) : (
                    <Redirect to='/login' />
                )
            )}/>)
};

export default PrivateRoute;