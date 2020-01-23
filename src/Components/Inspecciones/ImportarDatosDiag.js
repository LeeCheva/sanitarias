import React from "react";
import {
  Dialog,
  Typography,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "nro_informe", label: "Nro. Informe", minWidth: 100 },
  {
    id: "establecimiento",
    label: "Establecimiento",
    minWidth: 170,
    align: "center"
  },
  {
    id: "inspector",
    label: "Inspector",
    minWidth: 170,
    align: "left"
  },
  {
    id: "equipo_trabajo",
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
  }
];
function createData(
  nro_informe,
  establecimiento,
  inspector,
  equipo_trabajo,
  programa,
  fecha,
  estado
) {
  return {
    nro_informe,
    establecimiento,
    inspector,
    equipo_trabajo,
    programa,
    fecha,
    estado
  };
}
const rows = [
  createData(
    "Equipo 1",
    "###########",
    "dd/mm/aaaa",
    "Nombre 1",
    "Nombre 1",
    "Nombre 1",
    "Nombre 1"
  ),
  createData(
    "Equipo 2",
    "###########",
    "dd/mm/aaaa",
    "Nombre 2",
    "Nombre 2",
    "Nombre 2",
    "Nombre 2"
  ),
  createData(
    "Equipo 3",
    "###########",
    "dd/mm/aaaa",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3"
  ),
  createData(
    "Equipo 3",
    "###########",
    "dd/mm/aaaa",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3"
  ),
  createData(
    "Equipo 3",
    "###########",
    "dd/mm/aaaa",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3",
    "Nombre 3"
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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
          Importar Datos
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
                <Button variant="contained" component="label">
                  Subir Archivo
                  <input type="file" style={{ display: "none" }} />
                </Button>
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
                          <TableRow hover key={row.nro_informe}>
                            <TableCell component="th" scope="row">
                              {row.nro_informe}
                            </TableCell>
                            <TableCell>{row.establecimiento}</TableCell>
                            <TableCell align="left">{row.inspector}</TableCell>
                            <TableCell align="center">
                              {row.equipo_trabajo}
                            </TableCell>
                            <TableCell align="center">{row.programa}</TableCell>
                            <TableCell align="center">{row.fecha}</TableCell>
                            <TableCell align="center">{row.estado}</TableCell>
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
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cargar Datos
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
