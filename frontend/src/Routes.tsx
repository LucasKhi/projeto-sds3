import DashBoard from 'pages/Dashboard';
import Home from 'pages/Home/index ';
import {BrowserRouter,Route, Switch} from 'react-router-dom'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>                
                </Route>
                <Route path="/">
                    <DashBoard/>                
                </Route>                  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;