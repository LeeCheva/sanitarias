import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Nuevo from './Nuevo';
import Busqueda from './Busqueda';
import Ver from './Ver';
import Editar from './Editar';
import Importar from './Importar';


function Locales(SuperProps) {
  return(
    <Switch>
      <Route path="/Dashboard/Locales" exact component={(props) => <Home handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Locales/Busqueda" exact component={(props) => <Busqueda handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Locales/Ver" exact component={(props) => <Ver handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Locales/Nuevo" exact component={(props) => <Nuevo handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Locales/Editar" exact component={(props) => <Editar handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      <Route path="/Dashboard/Locales/Importar" exact component={(props) => <Importar handleDrawerToggle={SuperProps.handleDrawerToggle} />} />
      </Switch>
  )
}

export default Locales;