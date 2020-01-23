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
  { id: "equipo", label: "Equipo", minWidth: 170 },
  { id: "informe", label: "N° de Informe", minWidth: 100 },
  {
    id: "fecha",
    label: "Fecha de Inicio",
    minWidth: 170,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "nombre",
    label: "Nombre del Establecimiento",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "dueño",
    label: "Dueño del Local",
    minWidth: 170,
    align: "center"
  },
  {
    id: "inspector",
    label: "Nombre del Inspector",
    minWidth: 170,
    align: "left"
  },
  {
    id: "tipo",
    label: "Tipo de Inspeccion",
    minWidth: 170,
    align: "left"
  },
  {
    id: "estado",
    label: "Estado de Inspeccion",
    minWidth: 170,
    align: "left"
  },
  {
    id: "opciones",
    label: "Opciones",
    minWidth: 170,
    align: "left"
  }
];

function createData(
  equipo,
  informe,
  fecha,
  nombre,
  dueño,
  inspector,
  tipo,
  estado,
  opciones
) {
  return {
    equipo,
    informe,
    fecha,
    nombre,
    dueño,
    inspector,
    tipo,
    estado,
    opciones
  };
}

const rows = [
  createData(
    "Equipo 1",
    "###########",
    "dd/mm/aaaa",
    "Nombre 1",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 2",
    "###########",
    "dd/mm/aaaa",
    "Nombre 2",
    "Dueño",
    "inspector",
    "tipo",
    "No Conforme"
  ),
  createData(
    "Equipo 3",
    "###########",
    "dd/mm/aaaa",
    "Nombre 3",
    "Dueño",
    "inspector",
    "tipo",
    "Conforme"
  ),
  createData(
    "Equipo 4",
    "###########",
    "dd/mm/aaaa",
    "Nombre 4",
    "Dueño",
    "inspector",
    "tipo",
    "En trámite"
  ),
  createData(
    "Equipo 5",
    "###########",
    "dd/mm/aaaa",
    "Nombre 5",
    "Dueño",
    "inspector",
    "tipo",
    "Conforme"
  ),
  createData(
    "Equipo 6",
    "###########",
    "dd/mm/aaaa",
    "Nombre 6",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 7",
    "###########",
    "dd/mm/aaaa",
    "Nombre 7",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 8",
    "###########",
    "dd/mm/aaaa",
    "Nombre 8",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 9",
    "###########",
    "dd/mm/aaaa",
    "Nombre 9",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 10",
    "###########",
    "dd/mm/aaaa",
    "Nombre 10",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 11",
    "###########",
    "dd/mm/aaaa",
    "Nombre 11",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 12",
    "###########",
    "dd/mm/aaaa",
    "Nombre 12",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 13",
    "###########",
    "dd/mm/aaaa",
    "Nombre 13",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 14",
    "###########",
    "dd/mm/aaaa",
    "Nombre 14",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
  ),
  createData(
    "Equipo 15",
    "###########",
    "dd/mm/aaaa",
    "Nombre 15",
    "Dueño",
    "inspector",
    "tipo",
    "En Proceso"
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
        Titulo={"Inspecciones Sanitarias"}
      />
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
                <TableRow hover key={row.equipo}>
                  <TableCell component="th" scope="row">
                    {row.equipo}
                  </TableCell>
                  <TableCell>{row.informe}</TableCell>
                  <TableCell align="left">{row.fecha}</TableCell>
                  <TableCell align="center">{row.nombre}</TableCell>
                  <TableCell align="center">{row.dueño}</TableCell>
                  <TableCell align="center">{row.inspector}</TableCell>
                  <TableCell align="center">{row.tipo}</TableCell>
                  <TableCell align="center">{row.estado}</TableCell>
                  <TableCell align="left">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/Dashboard/InspeccionesSanitarias/Editar"
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
