import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Nuevo from './Nuevo';
import Editar from './Editar';
import Importar from './Importar';
import Busqueda from './Busqueda';
import Ver from './Ver';

function Inspecciones(SuperProps) {
  return(
    <Switch>
      <Route path="/Dashboard/Inspecciones" exact component={(props) => <Home handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Inspecciones/Ver" exact component={(props) => <Ver handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Inspecciones/Busqueda" exact component={(props) => <Busqueda handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Inspecciones/Nuevo" exact component={(props) => <Nuevo handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Inspecciones/Editar" exact component={(props) => <Editar handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Inspecciones/Importar" exact component={(props) => <Importar handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      </Switch>
  )
}

export default Inspecciones;