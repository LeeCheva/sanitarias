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


function LocalesVer(props){

	const classes = useStyles();
	const { handleDrawerToggle } = props;
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});			
	const inputLabel = React.useRef(null);
	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const [labelWidth, setLabelWidth] = React.useState(0);
	return(
		<React.Fragment>
		<Header onDrawerToggle={handleDrawerToggle} Titulo={"Locales Farmaceuticos"}  opt={"locales_ver"}/>
		<Container fixed>
		<Grid container spacing={1} alignItems="center">			
		<Grid item xs />
		<Grid item>
		<Button
		variant="contained"
		color="primary"
		size="large"
		className={classes.button}
		startIcon={<SaveIcon />}
		>
		Guardar
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
	<Grid container spacing={1} alignItems="center">{/*grilla total*/}

	<Grid item xs={1}>
	RUC:
	</Grid>		
	<Grid item xs={11}>
	<TextField id="outlined-search" label="RUC" type="search" variant="outlined" />
	</Grid>

<Grid item xs={1}>{/*grilla 1mera fila primera mitad*/}
Razon Social:
</Grid>		
<Grid item xs={4}>
<TextField id="outlined-search" fullWidth variant="outlined" />
</Grid>
<Grid item xs={2}>{/*grilla 1mera fila primera mitad*/}
Nombre Comercial:
</Grid>		
<Grid item xs={5}>
<TextField id="outlined-search" fullWidth variant="outlined" />
</Grid>
<Grid item xs={1}>{/*grilla 1mera fila primera mitad*/}
Direccion:
</Grid>		
<Grid item xs={11}>
<TextField id="outlined-search" fullWidth variant="outlined" />
</Grid>
<Grid item xs={1}>
Departamento:
</Grid>
<Grid item xs={3}>
<FormControl variant="outlined" fullWidth  className={classes.formControl}>
<InputLabel ref={inputLabel} htmlFor="outlined-departamento-native-simple">
Departamento
</InputLabel>
<Select
native
value={state.departamento}
onChange={handleChange('departamento')}
labelWidth={labelWidth}
inputProps={{
	name: 'departamento',
	id: 'outlined-departamento-native-simple',
}}
>
<option value="" />
<option value={10}>Ten</option>
<option value={20}>Twenty</option>
<option value={30}>Thirty</option>
</Select>
</FormControl>
</Grid>

<Grid item xs={1}>
Provincia:
</Grid>
<Grid item xs={3}>
<FormControl variant="outlined" fullWidth  className={classes.formControl}>
<InputLabel ref={inputLabel} htmlFor="outlined-provincia-native-simple">
Provincia
</InputLabel>
<Select
native
value={state.provincia}
onChange={handleChange('provincia')}
labelWidth={labelWidth}
inputProps={{
	name: 'provincia',
	id: 'outlined-provincia-native-simple',
}}
>
<option value="" />
<option value={10}>Ten</option>
<option value={20}>Twenty</option>
<option value={30}>Thirty</option>
</Select>
</FormControl>
</Grid>

<Grid item xs={1}>
Distrito:
</Grid>
<Grid item xs={3}>
<FormControl variant="outlined" fullWidth  className={classes.formControl}>
<InputLabel ref={inputLabel} htmlFor="outlined-distrito-native-simple">
Distrito
</InputLabel>
<Select
native
value={state.distrito}
onChange={handleChange('distrito')}
labelWidth={labelWidth}
inputProps={{
	name: 'distrito',
	id: 'outlined-distrito-native-simple',
}}
>
<option value="" />
<option value={10}>Ten</option>
<option value={20}>Twenty</option>
<option value={30}>Thirty</option>
</Select>
</FormControl>
</Grid>
<Grid item xs={1}>
Propietario:
</Grid>
<Grid item xs={6}>
<TextField id="outlined-search" fullWidth variant="outlined" />
</Grid>
<Grid item xs={2}>
Estado Licencia:
</Grid>
<Grid item xs={3}>
<FormControl variant="outlined" fullWidth  className={classes.formControl}>
<InputLabel ref={inputLabel} htmlFor="outlined-estado-native-simple">
Estado
</InputLabel>
<Select
native
value={state.estado}
onChange={handleChange('estado')}
labelWidth={labelWidth}
inputProps={{
	name: 'estado',
	id: 'outlined-estado-native-simple',
}}
>
<option value="" />
<option value={10}>Ten</option>
<option value={20}>Twenty</option>
<option value={30}>Thirty</option>
</Select>
</FormControl>
</Grid>
</Grid>{/*fin grilla total*/}







</Container>
</React.Fragment>
)

}

export default LocalesVer;