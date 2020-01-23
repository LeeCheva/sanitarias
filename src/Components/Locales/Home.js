import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Header from "../UI/Header";
import { Link } from "react-router-dom";

const columns = [
  { id: "nombre", label: "Nombre Comercial", minWidth: 170 },
  { id: "ruc", label: "RUC", minWidth: 100 },
  {
    id: "direccion",
    label: "Direccion",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "departamento",
    label: "Departamento",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "licencia",
    label: "Licencia",
    minWidth: 170,
    align: "center"
  },
  {
    id: "opciones",
    label: "Opciones",
    minWidth: 170,
    align: "left"
  }
];

function createData(nombre, ruc, direccion, departamento, licencia, opciones) {
  return { nombre, ruc, direccion, departamento, licencia, opciones };
}

const rows = [
  createData(
    "Nombre 1",
    "###########",
    "Direccion 1",
    "Departamento 1",
    "Sin licencia"
  ),
  createData(
    "Nombre 2",
    "###########",
    "Direccion 2",
    "Departamento 2",
    "Suspendida"
  ),
  createData(
    "Nombre 3",
    "###########",
    "Direccion 3",
    "Departamento 3",
    "Vencida"
  ),
  createData(
    "Nombre 4",
    "###########",
    "Direccion 4",
    "Departamento 4",
    "En trámite"
  ),
  createData(
    "Nombre 5",
    "###########",
    "Direccion 5",
    "Departamento 5",
    "Conforme"
  ),
  createData(
    "Nombre 6",
    "###########",
    "Direccion 6",
    "Departamento 6",
    "Sin licencia"
  ),
  createData(
    "Nombre 7",
    "###########",
    "Direccion 7",
    "Departamento 7",
    "Sin licencia"
  ),
  createData(
    "Nombre 8",
    "###########",
    "Direccion 8",
    "Departamento 8",
    "Sin licencia"
  ),
  createData(
    "Nombre 9",
    "###########",
    "Direccion 9",
    "Departamento 9",
    "Sin licencia"
  ),
  createData(
    "Nombre 10",
    "###########",
    "Direccion 10",
    "Departamento 10",
    "Sin licencia"
  ),
  createData(
    "Nombre 11",
    "###########",
    "Direccion 11",
    "Departamento 11",
    "Sin licencia"
  ),
  createData(
    "Nombre 12",
    "###########",
    "Direccion 12",
    "Departamento 12",
    "Sin licencia"
  ),
  createData(
    "Nombre 13",
    "###########",
    "Direccion 13",
    "Departamento 13",
    "Sin licencia"
  ),
  createData(
    "Nombre 14",
    "###########",
    "Direccion 14",
    "Departamento 14",
    "Sin licencia"
  ),
  createData(
    "Nombre 15",
    "###########",
    "Direccion 15",
    "Departamento 15",
    "Sin licencia"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "100%"
  }
});
function StickyHeadTable(props) {
  function fncBorrar(a) {
    alert(a);
  }
  const { handleDrawerToggle } = props;
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

  return (
    <Paper className={classes.root}>
      <Header
        onDrawerToggle={handleDrawerToggle}
        Titulo={"Locales Farmaceuticos"}
      />
      <Button
        variant="contained"
        component={Link}
        to="/Dashboard/LocalesFarmaceuticos/Nuevo"
      >
        Nuevo Registro
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/Dashboard/LocalesFarmaceuticos/Importar"
      >
        Importar Excel
      </Button>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow hover key={row.nombre}>
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell>{row.ruc}</TableCell>
                  <TableCell align="left">{row.direccion}</TableCell>
                  <TableCell align="center">{row.departamento}</TableCell>
                  <TableCell align="center">{row.licencia}</TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/Dashboard/LocalesFarmaceuticos/Editar"
                    >
                      Editar
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => fncBorrar("Borrar Registro")}
                    >
                      Borrar
                    </Button>
                  </TableCell>
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
    </Paper>
  );
}
export default StickyHeadTable;
