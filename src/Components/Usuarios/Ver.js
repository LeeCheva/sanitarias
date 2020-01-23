import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../UI/Header";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Divider from "@material-ui/core/Divider";

import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

function UsuariosVer(props) {
  const classes = useStyles();
  const { handleDrawerToggle } = props;
  const [setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Header
        onDrawerToggle={handleDrawerToggle}
        Titulo={"Consulta Usuarios"}
        opt={"usuarios_ver"}
      />
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
                "aria-label": "change date"
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
          <Grid item xs={2}></Grid>
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
  );
}

export default UsuariosVer;
