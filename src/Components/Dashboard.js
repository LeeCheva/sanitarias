import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { Route, Switch, Redirect } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Navigator from './UI/Navigator';

import Main from './Main';
import Copyright from './Copyright';

import Locales from './Locales/';
import Inspecciones from './Inspecciones/';
import Usuarios from './Usuarios/';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 270;
const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};



class Dash extends Component {
 constructor(props) {
  super(props)
  this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  this.state = {
    mobileOpen: false
  }
}

handleDrawerToggle() {
  this.setState({mobileOpen: !this.state.mobileOpen})
}

render(){
  const { classes, User } = this.props;
  return(
    <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className={classes.root}>
    <CssBaseline />
    <nav className={classes.drawer}>
    <Hidden smUp implementation="js">
    <Navigator
    User={User}
    PaperProps={{ style: { width: drawerWidth } }}
    variant="temporary"
    open={this.state.mobileOpen}
    onClose={this.handleDrawerToggle}
    />
    </Hidden>
    <Hidden xsDown implementation="css">
    <Navigator PaperProps={{ style: { width: drawerWidth } }} />
    </Hidden>
    </nav>
    <div className={classes.app}>
    <Switch>
    <Redirect from="/" to="/Dashboard" exact />
    <Route exact path="/Dashboard"  component={(props) => <Main handleDrawerToggle={this.handleDrawerToggle} {...props} />} />
    <Route path="/Dashboard/Inspecciones"  component={(props) => <Inspecciones handleDrawerToggle={this.handleDrawerToggle} {...props} />} />
    <Route path="/Dashboard/Locales"  component={(props) => <Locales handleDrawerToggle={this.handleDrawerToggle} {...props} />} />
    <Route path="/Dashboard/Usuarios"  component={(props) => <Usuarios handleDrawerToggle={this.handleDrawerToggle} {...props} />} />
    <Route component={(props) => <div>Not Found</div>} />
    </Switch>
    <footer className={classes.footer}>
    <Copyright />
    </footer>
    </div>
    </div>
    </MuiPickersUtilsProvider>
    </ThemeProvider>
    );
}
}

export default withStyles(styles)(Dash);