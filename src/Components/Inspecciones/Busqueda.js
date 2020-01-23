import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Header from "../UI/Header";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker } from "@material-ui/pickers";
const columns = [
  { id: "informe", label: "N° de Informe", minWidth: 100 },
  {
    id: "establecimiento",
    label: "Establecimiento",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "inspector",
    label: "Inspector",
    minWidth: 170,
    align: "left"
  },
  {
    id: "equipo",
    label: "Equipo de Trabajo",
    minWidth: 170,
    align: "left"
  },
  {
    id: "programa",
    label: "Programa",
    minWidth: 170,
    align: "left"
  },
  {
    id: "fecha",
    label: "Fecha",
    minWidth: 170,
    align: "left"
  },
  {
    id: "estado",
    label: "Estado",
    minWidth: 170,
    align: "left"
  },
  {
    id: "acciones",
    label: "Acciones",
    minWidth: 170,
    align: "left"
  }
];
function createData(
  informe,
  establecimiento,
  inspector,
  equipo,
  programa,
  fecha,
  estado,
  acciones
) {
  return {
    informe,
    establecimiento,
    inspector,
    equipo,
    programa,
    fecha,
    estado,
    acciones
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
  )
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
    width: "100%"
  },
  container: {
    maxHeight: "100%"
  }
});
function InspeccionesBusqueda(props) {
  function fncBorrar(a) {
    alert(a);
  }
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const [labelWidth] = React.useState(0);
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
  const [setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <React.Fragment>
      <Header
        onDrawerToggle={handleDrawerToggle}
        Titulo={"Inspecciones Sanitarias"}
        opt={"inspe_sani_bus"}
      />
      <main>
        <Container fixed>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1} alignItems="center">
                <Grid item />

                <Grid item xs={1}>
                  Fecha Inicio:
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
                      "aria-label": "change date"
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
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  Nro. Informe:
                </Grid>
                <Grid item xs={2}>
                  <TextField id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Buscar
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item />

                <Grid item xs={1}>
                  Establecimiento:
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    id="outlined-search"
                    label="RUC"
                    type="search"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    id="outlined-search"
                    fullWidth
                    label="Nombre del Establecimiento"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid container spacing={1} alignItems="center">
                <Grid item />
                <Grid item xs={1}>
                  Inspector:
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-inspector-native-simple"
                    >
                      Nombres y Apellidos
                    </InputLabel>
                    <Select
                      native
                      value={state.inspector}
                      onChange={handleChange("inspector")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "inspector",
                        id: "outlined-inspector-native-simple"
                      }}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>

              <Grid container spacing={1} alignItems="center">
                <Grid item />
                <Grid item xs={1}>
                  Equipo de Trabajo:
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-equipo-native-simple"
                    >
                      Nombre del equipo
                    </InputLabel>
                    <Select
                      native
                      value={state.equipo}
                      onChange={handleChange("equipo")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "equipo",
                        id: "outlined-equipo-native-simple"
                      }}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>

              <Grid container spacing={1} alignItems="center">
                <Grid item />
                <Grid item xs={1}>
                  Programa:
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-programa-native-simple"
                    >
                      Nombre del programa
                    </InputLabel>
                    <Select
                      native
                      value={state.programa}
                      onChange={handleChange("programa")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "programa",
                        id: "outlined-programa-native-simple"
                      }}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} zeroMinWidth>
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map(row => (
                        <TableRow hover key={row.equipo}>
                          <TableCell component="th" scope="row">
                            {row.informe}
                          </TableCell>
                          <TableCell>{row.establecimiento}</TableCell>
                          <TableCell align="left">{row.inspector}</TableCell>
                          <TableCell align="center">{row.equipo}</TableCell>
                          <TableCell align="center">{row.programa}</TableCell>
                          <TableCell align="center">{row.fecha}</TableCell>
                          <TableCell align="center">{row.estado}</TableCell>
                          <TableCell align="left">
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
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default InspeccionesBusqueda;
