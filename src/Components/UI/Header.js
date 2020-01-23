import React from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ImportarDatosDiag from "../Inspecciones/ImportarDatosDiag";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

function Header(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { classes, onDrawerToggle } = props;

  const handleAvatarClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleUserMenuClose();
    //

    window
      .swal({
        icon: "warning",
        title: "Realmente desea salir del sistema?",
        buttons: ["No", "Sí"],
        dangerMode: true
      })
      .then(willLogout => {
        if (willLogout) {
          localStorage.removeItem("Diresapp_Token");
          window.location = "/";
        }
      });
  };
  let button;
  if (props.opt === "inspe_sani_ver") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Ver"
        >
          Ver Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Nuevo"
        >
          Nueva Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          onClick={handleOpen}
        >
          Importar Datos
        </Button>
      </div>
    );
  } else if (props.opt === "inspe_sani_bus") {
    button = (
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Ver"
        >
          Ver Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Nuevo"
        >
          Nueva Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Importar"
        >
          Importar Datos
        </Button>
      </div>
    );
  } else if (props.opt === "inspe_sani_nuev") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Ver"
        >
          Ver Inspección
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Nuevo"
        >
          Nueva Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Importar"
        >
          Importar Datos
        </Button>
      </div>
    );
  } else if (props.opt === "inspe_sani_imp") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Ver"
        >
          Ver Inspección
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Nuevo"
        >
          Nueva Inspección
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Inspecciones/Importar"
        >
          Importar Datos
        </Button>
      </div>
    );
  } else if (props.opt === "locales_bus") {
    button = (
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Ver"
        >
          Ver local farmaceutico
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Nuevo"
        >
          Nuevo local farmaceutico
        </Button>
      </div>
    );
  } else if (props.opt === "locales_ver") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Ver"
        >
          Ver local farmaceutico
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Nuevo"
        >
          Nuevo local farmaceutico
        </Button>
      </div>
    );
  } else if (props.opt === "locales_nuevo") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Ver"
        >
          Ver local farmaceutico
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Locales/Nuevo"
        >
          Nuevo local farmaceutico
        </Button>
      </div>
    );
  } else if (props.opt === "usuarios_bus") {
    button = (
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Usuarios/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Usuarios/Ver"
        >
          Ver consulta
        </Button>
      </div>
    );
  } else if (props.opt === "usuarios_ver") {
    button = (
      <div>
        <Button
          variant="contained"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Usuarios/Busqueda"
        >
          Búsqueda
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<CheckBoxIcon />}
          component={Link}
          to="/Dashboard/Usuarios/Ver"
        >
          Ver consulta
        </Button>
      </div>
    );
  }
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Sistema Inspecciones Sanitarias
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Notificaciones">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item>
              <IconButton
                color="inherit"
                className={classes.iconButtonAvatar}
                onClick={handleAvatarClick}
              >
                <Avatar
                  alt="Avatar"
                  aria-controls="avatar-menu"
                  aria-haspopup="true"
                />
                <Menu
                  id="avatar-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i> Salir del Sistema
                  </MenuItem>
                </Menu>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h6" component="h1">
                {props.Titulo}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              {button}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {open === true && <ImportarDatosDiag open={open} setOpen={setOpen} />}
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  Titulo: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(Header));
