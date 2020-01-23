import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    fontSize: "inherit"
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2)
  }
});

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Permisos: props.Permisos | []
    };
  }

  render() {
    const { classes, ...other } = this.props;
    return (
      <Drawer variant="permanent" PaperProps={other.PaperProps} {...other}>
        <List disablePadding>
          <ListItem
            className={clsx(
              classes.firebase,
              classes.item,
              classes.itemCategory
            )}
          >
            Diresapp
          </ListItem>

          <React.Fragment>
            <ListItem button className={classes.item} component={Link} to="/">
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                Inicio
              </ListItemText>
            </ListItem>

            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/Inspecciones/Busqueda"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                Inspecciones
              </ListItemText>
            </ListItem>

            <ListItem button className={classes.item}>
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                Consultas
              </ListItemText>
            </ListItem>

            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/Inspecciones/Busqueda"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Inspecciones Sanitarias
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/Locales/Busqueda"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Locales Farmaceuticos
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/Usuarios/Busqueda"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                Contacto Usuarios
              </ListItemText>
            </ListItem>
            <ListItem button className={classes.item}>
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                Configuracion
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/RegistroLocales"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Registro de locales Farmaceuticos
              </ListItemText>
            </ListItem>

            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/RegistroInspectores"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Registro de Inspectores
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/RegistroEquipos"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Registro de Equipos de Trabajo
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/RegistroProgramas"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Registro de Programas
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.item}
              component={Link}
              to="/Dashboard/RegistroTiposInspeccion"
            >
              {/*<ListItemIcon className={classes.itemIcon}>
      *<i className="fas fa-clinic-medical"></i> 
      </ListItemIcon>*/}
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                - Registro de Tipos de Inspeccion
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
          </React.Fragment>
        </List>
      </Drawer>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
