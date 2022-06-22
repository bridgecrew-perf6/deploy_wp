import * as React from 'react';
import { IconButton, Typography, CardMedia, CardContent, Card, Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { BusinessContext } from '../../contexts/BusinessContext/BusinessContext';

export default function CardProducts(props) {
  const [state,setState] = React.useContext(BusinessContext);

  const addProductCart = async (item) => {
    try {
      console.log(item);

      let cartNew = [];
      let cartConcat = cartNew.concat(state.cartProducts);

      cartConcat.forEach((elementCart)=>{
        if(elementCart.id === item.id){
          console.log("Empty");
        }else{
          console.log("No empty");
        }

      })

      setState({...state,cartOpen:true});

      
    } catch (error) {
      console.log(error.message);
    }
  } 


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="producto"
      />
      <CardContent>
        <Typography component="div" variant="h5" textAlign={"center"}>
          {props.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" textAlign={"center"}>
          $ {props.price}
        </Typography>
        <Grid textAlign={"center"} justifyContent="space-around" alignItems={"center"} display="flex">
          <Typography variant="subtitle1" color="text.secondary" component="div" textAlign={"center"}>
            Cant: {props.cant}
          </Typography>
          <IconButton color="inherit" onClick={()=> addProductCart(props.item) }>
            <AddShoppingCart />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
}
