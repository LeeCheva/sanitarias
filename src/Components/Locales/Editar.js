import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Header from "../UI/Header";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 250
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: 500
  },
  Txt: {
    margin: 50
  }
}));

class Editar extends React.Component {
  render() {
    const { handleDrawerToggle } = this.props;

    return (
      <React.Fragment>
        <Header
          onDrawerToggle={handleDrawerToggle}
          Titulo={"Editar Local Farmaceutico"}
        />
        <form className={useStyles.root} noValidate autoComplete="off">
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Nombre Comercial" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Razon Social" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="RUC" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Direccion" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Departamento" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Provincia" />
          </div>
          <div className={useStyles.Txt}>
            <TextField id="standard-basic" label="Distrito" />
          </div>
          <FormControl className={useStyles.formControl}>
            <InputLabel id="demo-simple-select-label">
              Estado de Licencia
            </InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Sin Licencia</MenuItem>
              <MenuItem value={20}>Suspendida</MenuItem>
              <MenuItem value={30}>Vencida</MenuItem>
              <MenuItem value={30}>En Tramite</MenuItem>
              <MenuItem value={30}>Conforme</MenuItem>
            </Select>
            <div>
              <br />
              <input type="submit" />
            </div>
          </FormControl>
        </form>
      </React.Fragment>
    );
  }
}

export default Editar;
