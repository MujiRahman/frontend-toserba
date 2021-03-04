import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Login from '../../pages/login'
import { MainApp } from '../../pages/mainApp';
import Register from '../../pages/register'

interface Props{

}

const Routes: React.FC<Props> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/">
                    <MainApp/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;