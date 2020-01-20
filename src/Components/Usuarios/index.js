import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Busqueda from './Busqueda';
import Ver from './Ver';

function Usuarios(SuperProps) {
  return(
    <Switch>
      <Route path="/Dashboard/Usuarios" exact component={(props) => <Home handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Usuarios/Ver" exact component={(props) => <Ver handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Usuarios/Busqueda" exact component={(props) => <Busqueda handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      </Switch>
  )
}

export default Usuarios;