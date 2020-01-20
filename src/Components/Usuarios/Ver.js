import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Header from '../UI/Header';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));


function UsuariosVer(props){

	const classes = useStyles();
	const { handleDrawerToggle } = props;			
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
	const handleDateChange = date => {
		setSelectedDate(date);
	};
	const inputLabel = React.useRef(null);
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});
	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const [labelWidth, setLabelWidth] = React.useState(0);
	return(
		<React.Fragment>
		<Header onDrawerToggle={handleDrawerToggle} Titulo={"Consulta Usuarios"}  opt={"usuarios_ver"}/>
		<Container fixed>
		<Grid container spacing={1} alignItems="center">	
		<Grid item xs={2}>
		<KeyboardDatePicker
		disableToolbar
		variant="inline"
		format="dd/MM/yyyy"
		margin="normal"
		id="date-picker-inline"          
		onChange={handleDateChange}
		KeyboardButtonProps={{
			'aria-label': 'change date',
		}}
		/>
		</Grid>		
		<Grid item xs />
		<Grid item>
		<Button
		variant="contained"
		color="primary"
		size="large"
		className={classes.button}
		startIcon={<CloudUploadIcon />}
		>
		Responder
		</Button>
		<Button
		variant="contained"
		color="primary"
		size="large"
		className={classes.button}
		startIcon={<ArrowBackIcon />}
		>
		Atras
		</Button>
		</Grid>
		</Grid>
		<Divider />
	<Grid container spacing={3} alignItems="center">	
	
	<Grid item xs={2}>

	Nombre Consultante:
	</Grid>
	<Grid item xs={8}>
	<TextField id="outlined-basic" fullWidth variant="outlined" />
	</Grid>
	<Grid item xs={2}>
	
	</Grid>
	<Grid item xs={1}>
	Celular:
	</Grid>
	<Grid item xs={2}>
	<TextField id="outlined-basic" fullWidth variant="outlined" />
	</Grid>
	<Grid item xs={1}>
	Telefono:
	</Grid>
	<Grid item xs={2}>
	<TextField id="outlined-basic" fullWidth variant="outlined" />
	</Grid>
	<Grid item xs={1}>
	E-mail:
	</Grid>
	<Grid item xs={4}>
	<TextField id="outlined-basic" fullWidth variant="outlined" />
	</Grid>
	<Grid item xs={12}>
	Descripcion de la consulta:
	</Grid>
	<Grid item xs={12}>
	<TextField id="outlined-basic" fullWidth variant="outlined" />
	</Grid>
	</Grid>



</Container>
</React.Fragment>
)

}

export default UsuariosVer;
