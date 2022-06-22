import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import { BusinessContext } from '../../contexts/BusinessContext/BusinessContext';
import { Card, CardContent, Grid, Typography } from '@mui/material';

export default function CartShop() {
    const [state, setState] = useContext(BusinessContext);

    const toggleDrawer = (open) => async (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        await setState({ ...state, cartOpen: open });
    };

    return (
        <Drawer
            anchor={"right"}
            open={state.cartOpen}
            onClose={toggleDrawer(false)}
        >
            {state.cartProducts.map((item, index) => {
                return (
                    <Card key={`cardShopItem${index}`} sx={{width:300}}>
                        <CardContent p={5}>
                            <Typography component="div" variant="h5" textAlign={"center"}>
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" textAlign={"center"}>
                                $ {item.price}
                            </Typography>
                            <Grid textAlign={"center"} justifyContent="space-around" alignItems={"center"} display="flex">
                                <Typography variant="subtitle1" color="text.secondary" component="div" textAlign={"center"}>
                                    Cant: {item.cant}
                                </Typography>                           
                            </Grid>
                        </CardContent>
                    </Card>
                )
            })}
        </Drawer>
    )
}
