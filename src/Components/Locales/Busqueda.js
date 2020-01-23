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

const columns = [
  { id: "ruc", label: "Ruc", minWidth: 100 },
  {
    id: "razon_social",
    label: "Razon Social",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "departamento",
    label: "Departamento",
    minWidth: 170,
    align: "left"
  },
  {
    id: "provincia",
    label: "Provincia",
    minWidth: 170,
    align: "left"
  },
  {
    id: "distrito",
    label: "Distrito",
    minWidth: 170,
    align: "left"
  }
];
function createData(ruc, razon_social, departamento, provincia, distrito) {
  return { ruc, razon_social, departamento, provincia, distrito };
}

const rows = [
  createData("Equipo 1", "###########", "dd/mm/aaaa", "Nombre 1", "Dueño"),
  createData("Equipo 2", "###########", "dd/mm/aaaa", "Nombre 2", "Dueño"),
  createData("Equipo 3", "###########", "dd/mm/aaaa", "Nombre 3", "Dueño"),
  createData("Equipo 4", "###########", "dd/mm/aaaa", "Nombre 4", "Dueño")
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

  return (
    <React.Fragment>
      <Header
        onDrawerToggle={handleDrawerToggle}
        Titulo={"Locales Farmaceuticos"}
        opt={"locales_bus"}
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

                <Grid item xs={4}>
                  <TextField
                    id="outlined-search"
                    fullWidth
                    label="Nombre del Establecimiento"
                    variant="outlined"
                  />
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
                  Departamento:
                </Grid>
                <Grid item xs={2}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-departamento-native-simple"
                    >
                      Departamento
                    </InputLabel>
                    <Select
                      native
                      value={state.departamento}
                      onChange={handleChange("departamento")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "departamento",
                        id: "outlined-departamento-native-simple"
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
                <Grid item xs={2}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-provincia-native-simple"
                    >
                      Provincia
                    </InputLabel>
                    <Select
                      native
                      value={state.provincia}
                      onChange={handleChange("provincia")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "provincia",
                        id: "outlined-provincia-native-simple"
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
                <Grid item xs={2}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel
                      ref={inputLabel}
                      htmlFor="outlined-distrito-native-simple"
                    >
                      Distrito
                    </InputLabel>
                    <Select
                      native
                      value={state.distrito}
                      onChange={handleChange("distrito")}
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "distrito",
                        id: "outlined-distrito-native-simple"
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
                        <TableRow hover key={row.ruc}>
                          <TableCell component="th" scope="row">
                            {row.ruc}
                          </TableCell>
                          <TableCell>{row.razon_social}</TableCell>
                          <TableCell align="left">{row.departamento}</TableCell>
                          <TableCell align="center">{row.provincia}</TableCell>
                          <TableCell align="center">{row.distrito}</TableCell>
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
