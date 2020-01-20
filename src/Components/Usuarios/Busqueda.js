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
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
const columns = [
{ id: 'nombre', label: 'Nombre', minWidth: 100 },
{
	id: 'celular',
	label: 'Celular',
	minWidth: 170,
	align: 'center',
	format: value => value.toLocaleString(),
},
{
	id: 'telefono',
	label: 'Telefono',
	minWidth: 170,
	align: 'left'
},
{
	id: 'correo_e',
	label: 'Correo electronico',
	minWidth: 170,
	align: 'left'
},
{
	id: 'fecha',
	label: 'Fecha',
	minWidth: 170,
	align: 'left'
}
];
function createData(nombre, celular,telefono,correo_e,fecha) {
	return {nombre, celular,telefono,correo_e,fecha};
}

const rows = [
createData('Equipo 1', '###########', 'dd/mm/aaaa','Nombre 1','Dueño'),
createData('Equipo 2', '###########', 'dd/mm/aaaa','Nombre 2','Dueño'),
createData('Equipo 3', '###########', 'dd/mm/aaaa','Nombre 3','Dueño'),
createData('Equipo 4', '###########', 'dd/mm/aaaa','Nombre 4','Dueño'),
//createData('Equipo 5', '###########', 'dd/mm/aaaa','Nombre 5','Dueño','inspector', 'tipo','Conforme'),
//createData('Equipo 6', '###########', 'dd/mm/aaaa','Nombre 6','Dueño','inspector', 'tipo','En Proceso'),
//createData('Equipo 7', '###########', 'dd/mm/aaaa','Nombre 7','Dueño','inspector', 'tipo','En Proceso'),
//createData('Equipo 8', '###########', 'dd/mm/aaaa','Nombre 8','Dueño','inspector', 'tipo','En Proceso'),
//createData('Equipo 9', '###########', 'dd/mm/aaaa','Nombre 9','Dueño','inspector', 'tipo','En Proceso'),
//createData('Equipo 10','###########', 'dd/mm/aaaa','Nombre 10','Dueño','inspector','tipo', 'En Proceso'),
//createData('Equipo 11','###########', 'dd/mm/aaaa','Nombre 11','Dueño','inspector','tipo', 'En Proceso'),
//createData('Equipo 12','###########', 'dd/mm/aaaa','Nombre 12','Dueño','inspector','tipo', 'En Proceso'),
//createData('Equipo 13','###########', 'dd/mm/aaaa','Nombre 13','Dueño','inspector','tipo', 'En Proceso'),
//createData('Equipo 14','###########', 'dd/mm/aaaa','Nombre 14','Dueño','inspector','tipo', 'En Proceso'),
//createData('Equipo 15','###########', 'dd/mm/aaaa','Nombre 15','Dueño','inspector','tipo', 'En Proceso'),
];
const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: '100%',
	},
});
function UsuariosBusqueda(props) {
	function fncBorrar(a){
		alert(a);
	}
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
	const {handleDrawerToggle} = props;
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};  
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = date => {
		setSelectedDate(date);
	};
	return(
		<React.Fragment>
		<Header onDrawerToggle={handleDrawerToggle} Titulo={"Consultas Usuarios"}  opt={"usuarios_bus"}/>
		<main>
		<Container fixed>
		<Grid container 
		spacing={3} 
		direction="row"
		justify="center"
		alignItems="center">
		<Grid item xs={12}  sm={12} md={12} lg={12}>

		<Grid container spacing={1} alignItems="center">
		<Grid item />

		<Grid item xs={1}>
		Fecha:
		</Grid>

		<Grid item xs={1}>
		desde
		</Grid>

		<Grid item xs>
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
		<Grid item xs={1}>
		hasta
		</Grid>

		<Grid item xs>
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
		
		<Grid item xs={3}>
		<Button variant="contained" fullWidth >Buscar</Button>
		</Grid>

		</Grid>
		<Grid container spacing={1} alignItems="center">
		<Grid item />

		<Grid item xs={2}>
		Nombre Consultante:
		</Grid>
		
		<Grid item xs={9}>
		<TextField id="outlined-search" fullWidth  variant="outlined" />
		</Grid>
		
		
		</Grid>
		



		</Grid>
		<Grid item xs={12}  sm={12} md={12} lg={12} zeroMinWidth>
		<TableContainer className={classes.container}>
		<Table stickyHeader aria-label="sticky table">
		<TableHead>
		<TableRow>
		{columns.map(column => (
			<TableCell
			key={column.id}
			align={column.align}
			style={{ minWidth: column.minWidth }}
			>
			{column.label}
			</TableCell>
			))}
		</TableRow>
		</TableHead>
		<TableBody>
		{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
			<TableRow hover key={row.nombre}>
			<TableCell component="th" scope="row">{row.nombre}</TableCell>
			<TableCell>{row.celular}</TableCell>
			<TableCell align="left">{row.telefono}</TableCell>
			<TableCell align="center">{row.correo_e}</TableCell>
			<TableCell align="center">{row.fecha}</TableCell>
			</TableRow>
			))}
		</TableBody>
		</Table>
		</TableContainer>
		<TablePagination
		rowsPerPageOptions={[10, 25, 100]}
		component="div"
		count={rows.length}
		rowsPerPage={rowsPerPage}
		page={page}
		onChangePage={handleChangePage}
		onChangeRowsPerPage={handleChangeRowsPerPage}
		/>
		</Grid>
		</Grid>
		</Container>
		</main>
		</React.Fragment>
		)
};

export default UsuariosBusqueda;