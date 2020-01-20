import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from './UI/Header';

import logo from '../Assets/placeimage.gif';
//import axios from 'axios';
//import Dashboard from '../Dashboard';
/* Material Components */
//import Typography from '@material-ui/core/Typography';

//import Dashboard from '../Dashboard';

/*import Dash from '../../Base/Dash';*/

//import Isotipo from '../../Assets/isotipo.svg';



const styles = theme => ({
	paper: {
		maxWidth: 936,
		margin: 'auto',
		overflow: 'hidden',
	},
	searchBar: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	searchInput: {
		fontSize: theme.typography.fontSize,
	},
	block: {
		display: 'block',
	},
	addUser: {
		marginRight: theme.spacing(1),
	},
	contentWrapper: {
		margin: '40px 16px',
	},
	main: {
		flex: 1,
		padding: theme.spacing(6, 4),
		background: '#eaeff1',
	},
	listTable: {
		overflow: 'hidden'
	},
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	}
});


class Index extends Component {
	constructor(props) {
		super(props)
    //Methods
    this.handleTabChange = this.handleTabChange.bind(this)
    //State
    this.state = {
    	currentTab: 0
    }
}

handleTabChange(event, newValue) {
	this.setState({currentTab: newValue})
}
render(){
	const { classes } = this.props;
	return(
		<React.Fragment>
		<Header onDrawerToggle={this.props.handleDrawerToggle} Titulo={"Inicio del Sistema"}/>
		<main>
		<Container fixed>
		<Grid container 
		spacing={3} 
		direction="row"
		justify="center"
		alignItems="center">

		<Grid item xs={12}  sm={3} md={12} lg={3}>
		<List component="nav">
		<ListItem button component={Link} to="/Dashboard/Inspecciones/Busqueda">
		<ListItemIcon>
		
		</ListItemIcon>
		<ListItemText primary="Inspecciones" />
		</ListItem>

		<ListItem button component={Link} to="/Dashboard/LocalesFarmaceuticos">
		<ListItemIcon>
		
		</ListItemIcon>
		<ListItemText primary="Locales Farmaceuticos" />
		</ListItem>

		<ListItem button component={Link} to="/Dashboard/Usuarios">
		<ListItemIcon>
		
		</ListItemIcon>
		<ListItemText primary="Consulta Usuarios" />
		</ListItem>

		</List>
		</Grid>
		<Grid item xs={12}  sm={9} md={12} lg={9} zeroMinWidth>
		<img src={logo} alt="Logo" />
		</Grid>
		</Grid>
		</Container>
		</main>
		</React.Fragment>
		);
}
}

export default Index