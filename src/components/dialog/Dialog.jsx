import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BusinessContext } from '../../contexts/BusinessContext/BusinessContext';
// import apiCli from "../../services/apiService";
import { Autocomplete, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Toast } from '../toast/Toast';
import { LocationCity } from '@mui/icons-material';

export const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  //   const [maxWidth, setMaxWidth] = React.useState('lg');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.buttons}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const AlertDialogCity = (props) => {
  const [state, setState] = useContext(BusinessContext);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);


  const getCities = async () => {

    setCities(state.cities);
    // await apiCli.get(`cities/`).then(response => {
    //   const { results, count } = response.data;
    //   if (count > 0) {
    //     setState({ ...state, cities: results });
    //     setCities(results);
    //   }

    // }).catch(error => {
    //   console.log(error.response)
    // })

    // await setState({ ...state, dialogCity: true });
  }


  const handleClick = async () => {
    if (selectedCity) {
      await setState({ ...state, cities: cities, dialogCity: false, city_id: selectedCity.id, city_name: selectedCity.name });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Debe selecionar una ciudad para continuar.'
      });
    }
  }

  const handleClose = async () => {
    if(state.city_id === ""){
      await setState({ ...state, cities: cities, dialogCity: false, city_id: 1, city_name: "Manizales" });
    }else{
      await setState({ ...state, dialogCity: false });
    }
  };

  useEffect(() => {
    if (state.dialogCity) {
      getCities();
    }
    // eslint-disable-next-line
  }, [state.dialogCity])


  return (
    <Dialog
      fullWidth={true}
      maxWidth={'xs'}
      open={state.dialogCity}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >

      {/* <DialogTitle id="alert-dialog-title" align='center'> */}
      <Grid container>

        <Grid item xs={12} textAlign="center">
          <IconButton color="inherit">
            <LocationCity />
          </IconButton>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Typography variant="h6">
            ¿ En que ciudad te encuentras ?
          </Typography>
        </Grid>

      </Grid>

      {/* </DialogTitle> */}
      <DialogContent>
        <Typography variant="subtitle2">
          Para facitarte las cosas podrias indicarnos la ciudad donde te encuentras a si acceder a los puntos sercanos a tu ubicacion.
        </Typography>

        <Autocomplete
          options={cities}
          getOptionLabel={(option) => option.name}
          name="product"
          id="product"
          limitTags={4}
          // disableCloseOnSelect
          filterSelectedOptions
          onChange={(event, city) => {
            setSelectedCity(city)
          }}
          renderInput={(params) => (
            <TextField {...params} label={"CIudad"} variant="standard" name="products" />
          )}
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant='contained' color="inherit" onClick={handleClose}>Rechazar</Button>
        <Button variant='contained' onClick={handleClick} sx={{background:`#8ae1cb`,":hover":{background:"#687b6c"}}}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
