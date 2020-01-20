import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../UI/Header';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
const columns = [
{ id: 'nombre', label: 'Nombre Comercial' },
{ id: 'razon', label: 'Razon Social' },
{ id: 'ruc', label: 'RUC' },
{ id: 'direccion', label: 'Direccion' },
{ id: 'departamento', label: 'Departamento' },
{ id: 'provincia', label: 'Provincia' },
{ id: 'distrito', label: 'Distrito' },
{ id: 'licencia', label: 'Licencia' }
];
const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: '100%',
	},
});
class Importar extends React.Component {


	render() {
		const { classes, handleDrawerToggle } = this.props;
		return (
			<Paper className={useStyles.root}>
			<Header onDrawerToggle={handleDrawerToggle} Titulo={"Importar Locales Farmaceuticos"} />
			<br />
			<a variant="contained" href="/locales_farmaceuticos.xlsx">Descargar Excel</a>
			<br />
			<br />
			<br />
			<form>
			Importar Datos:
			<br />
			<input
			type='file'
			/>
			<input
			type='submit'
			/>
			</form>
			<TableContainer className={useStyles.container}>
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
			</TableBody>
			</Table>
			</TableContainer>
			</Paper>
			);
	}
}



export default Importar;