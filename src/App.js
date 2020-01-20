import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Theme from './theme.json';
import './App.css';
import './Fonts/fa/css/all.min.css'

//import Main from './Components/Main';
import Dashboard from './Components/Dashboard';
//import Locales from './Components/Locales';
import Error404 from './Components/Error404';

const theme = createMuiTheme(Theme);
class App extends Component {
  render() {
    return (
       <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />            
            <Route path="/Dashboard" component={Dashboard} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
