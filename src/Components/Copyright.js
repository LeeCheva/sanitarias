import React from 'react';

import Typography from '@material-ui/core/Typography';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy;  {new Date().getFullYear()} Dirección Regional de Salud.
    </Typography>
  );
}

export default Copyright;


