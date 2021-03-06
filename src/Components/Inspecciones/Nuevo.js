import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Header from "../UI/Header";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Divider from "@material-ui/core/Divider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { KeyboardDatePicker } from "@material-ui/pickers";

import NuevoEstabDiag from "./NuevoEstabDiag";
import NuevoInspeDiag from "./NuevoInspeDiag";
import ImportarRegDiag from "./ImportarRegDiag";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function InspeccionesNuevo(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const classes = useStyles();
  const { handleDrawerToggle } = props;
  const [setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
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
    <React.Fragment>
      <Header
        onDrawerToggle={handleDrawerToggle}
        Titulo={"Inspecciones Sanitarias"}
        opt={"inspe_sani_nuev"}
      />
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
              onClick={handleOpen3}
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Importar Datos
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
          {/*grilla total*/}
          <Grid item xs={6}>
            {/*grilla primera mitad*/}
            <br />
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal primera mitad*/}
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Nro. Informe:
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                Fecha de Inicio:
              </Grid>
              <Grid item xs={3}>
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

              <Grid item xs={2}>
                {/*grilla 2da fila primera mitad*/}
                Equipo:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-equipo-native-simple"
                  >
                    Equipo de Trabajo
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
            </Grid>
            {/*fin grilla principal primera mitad*/}
          </Grid>
          {/*fin grilla primera mitad*/}

          <Grid item xs={6}>
            {/*grilla principal segunda mitad*/}
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal segunda mitad*/}
              <Grid item xs={12}>
                {/*grilla 1mera fila primera mitad*/}
                <br />
                <br />
                <br />
                <br />
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Programa:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-programa-native-simple"
                  >
                    Nombre del Programa
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
            </Grid>
            {/*fin grilla principal segunda mitad*/}
          </Grid>
          {/*fin grilla segunda mitad*/}
        </Grid>
        {/*fin grilla total*/}

        <Grid container spacing={5} alignItems="center">
          {/*grilla total*/}
          <Grid item xs={6}>
            {/*grilla primera mitad*/}
            <br />
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal primera mitad*/}
              <Grid item xs={12}>
                {/*grilla 1mera fila primera mitad*/}
                DEL ESTABLECIMIENTO
                <Divider />
              </Grid>
            </Grid>
            {/*fin grilla principal primera mitad*/}
          </Grid>
          {/*fin grilla primera mitad*/}

          <Grid item xs={6}>
            {/*grilla primera mitad*/}
            <br />
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal primera mitad*/}
              <Grid item xs={12}>
                {/*grilla 1mera fila primera mitad*/}
                DEL INSPECTOR
                <Divider />
              </Grid>
            </Grid>
            {/*fin grilla principal primera mitad*/}
          </Grid>
          {/*fin grilla primera mitad*/}
        </Grid>
        {/*fin grilla total*/}

        <Grid container spacing={5} alignItems="center">
          {/*grilla total*/}
          <Grid item xs={6}>
            {/*grilla primera mitad*/}
            <br />
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal primera mitad*/}
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                RUC:
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="outlined-search"
                  label="RUC"
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                {/*grilla 1mera fila primera mitad*/}
                <Button variant="contained" fullWidth onClick={handleOpen}>
                  Nuevo Establecimiento
                </Button>
                {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal> */}
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Razon Social:
              </Grid>
              <Grid item xs={10}>
                <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Direccion:
              </Grid>
              <Grid item xs={10}>
                <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Departamento:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-departamento-native-simple"
                  >
                    Nombre del departamento
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
                {/*grilla 1mera fila primera mitad*/}
                Provincia:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-provincia-native-simple"
                  >
                    Nombre de la provincia
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

              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Distrito:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-distrito-native-simple"
                  >
                    Nombre del distrito
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
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Dueño:
              </Grid>
              <Grid item xs={10}>
                <TextField id="outlined-basic" fullWidth variant="outlined" />
              </Grid>
            </Grid>
            {/*fin grilla principal primera mitad*/}
          </Grid>
          {/*fin grilla primera mitad*/}

          <Grid item xs={6}>
            {/*grilla primera mitad*/}
            <br />
            <Grid container spacing={1} alignItems="center">
              {/*grilla principal primera mitad*/}
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                DNI:
              </Grid>
              <Grid item xs={5}>
                {/*grilla 1mera fila primera mitad*/}
                <TextField
                  id="outlined-search"
                  label="DNI"
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                {/*grilla 1mera fila primera mitad*/}
                <Button variant="contained" fullWidth onClick={handleOpen2}>
                  Nuevo Inspector
                </Button>
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Nombre:
              </Grid>
              <Grid item xs={10}>
                {/*grilla 1mera fila primera mitad*/}
                <TextField
                  id="outlined-search"
                  fullWidth
                  type="search"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                {/*grilla 1mera fila primera mitad*/}
                DE LA INSPECCION
                <Divider />
              </Grid>
              <Grid item xs={2}>
                {/*grilla 1mera fila primera mitad*/}
                Tipo:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-inspeccion-native-simple"
                  >
                    Tipo de inspección
                  </InputLabel>
                  <Select
                    native
                    value={state.inspeccion}
                    onChange={handleChange("inspeccion")}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "inspeccion",
                      id: "outlined-inspeccion-native-simple"
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
                {/*grilla 1mera fila primera mitad*/}
                Estado:
              </Grid>
              <Grid item xs={10}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel
                    ref={inputLabel}
                    htmlFor="outlined-estado-native-simple"
                  >
                    Estado
                  </InputLabel>
                  <Select
                    native
                    value={state.estado}
                    onChange={handleChange("estado")}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "estado",
                      id: "outlined-estado-native-simple"
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
                {/*grilla 1mera fila primera mitad*/}
                Observaciones:
              </Grid>
              <Grid item xs={10}>
                {/*grilla 1mera fila primera mitad*/}
                <TextareaAutosize rowsMax={4} aria-label="maximum height" />
              </Grid>
            </Grid>
            {/*fin grilla principal primera mitad*/}
          </Grid>
          {/*fin grilla primera mitad*/}
        </Grid>
        {/*fin grilla total*/}
      </Container>

      {open === true && <NuevoEstabDiag open={open} setOpen={setOpen} />}
      {open2 === true && <NuevoInspeDiag open={open2} setOpen={setOpen2} />}
      {open3 === true && <ImportarRegDiag open={open3} setOpen={setOpen3} />}
    </React.Fragment>
  );
}

export default InspeccionesNuevo;
