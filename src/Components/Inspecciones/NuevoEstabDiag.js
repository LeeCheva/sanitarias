import React from 'react';
import {Dialog, DialogTitle, Typography, IconButton} from "@material-ui/core"

const NuevoEstabDig = (props) => {
  return (
    <Dialog 
    onClose={() => props.setOpen(false)}
    open={props.open}
    >
      <DialogTitle component='div' className='p-0'>
          <Typography variant='h6'>Nuevo establecimiento</Typography>
          <IconButton
            color='inherit'
            onClick={() => props.setOpen(false)}
          >
          </IconButton>
      </DialogTitle>
      <DialogContent dividers className=' sm:p-24'>
        // ACA VA TODO EL CONTENIDO
      </DialogContent>
    </Dialog>
  )
}

export default NuevoEstabDig;