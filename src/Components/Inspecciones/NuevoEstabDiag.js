import React from "react";
import {
  Dialog,
  Typography,
  Container,
  Grid,
  makeStyles,
  TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const columns = [
  { id: "ruc", label: "RUC", minWidth: 100 },
  {
    id: "nombre",
    label: "Nombre",
    minWidth: 170,
    align: "center"
  },
  {
    id: "propietario",
    label: "Propietario",
    minWidth: 170,
    align: "left"
  },
  {
    id: "direccion",
    label: "Direccion",
    minWidth: 170,
    align: "left"
  }
];
function createData(ruc, nombre, propietario, direccion) {
  return { ruc, nombre, propietario, direccion };
}
const rows = [
  createData("Equipo 1", "###########", "dd/mm/aaaa", "Nombre 1"),
  createData("Equipo 2", "###########", "dd/mm/aaaa", "Nombre 2"),
  createData("Equipo 3", "###########", "dd/mm/aaaa", "Nombre 3"),
  createData("Equipo 3", "###########", "dd/mm/aaaa", "Nombre 3"),
  createData("Equipo 3", "###########", "dd/mm/aaaa", "Nombre 3")
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
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));
const NuevoEstabDig = props => {
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const inputLabel = React.useRef(null);
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const [labelWidth] = React.useState(0);
  return (
    <div>
      <Dialog
        maxWidth={"lg"}
        onClose={handleClose}
        open={props.open}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle
          component="div"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Administración de Establecimientos
        </DialogTitle>
        <DialogContent dividers>
          <Container fixed>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Paper component="form" className={classes.root}>
                  <IconButton className={classes.iconButton} aria-label="menu">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    fullWidth
                    className={classes.input}
                    placeholder=""
                    inputProps={{ "aria-label": "" }}
                  />
                </Paper>
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
                              {row.nombre}
                            </TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell align="left">
                              {row.propietario}
                            </TableCell>
                            <TableCell align="center">
                              {row.direccion}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[3, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Grid>
              <Grid item xs={12}>
                Agregar Establecimiento
                <Divider />
              </Grid>
              <Grid item xs={1}>
                RUC:
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="outlined-search"
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                Razon Social:
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-search"
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                Estado Licencia:
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
                    Estado
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
              <Grid item xs={2}>
                Nombre Comercial:
              </Grid>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  id="outlined-search"
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={1}>
                Direccion:
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  id="outlined-search"
                  type="search"
                  variant="outlined"
                />
              </Grid>
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
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Guardar
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NuevoEstabDig;
