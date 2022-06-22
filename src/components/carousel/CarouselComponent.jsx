import React, { forwardRef } from 'react'
import Carousel from 'react-material-ui-carousel';
import { Grid, Paper, Slide, Typography } from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function CarouselComponent(props) {

    function Item(props) {
        return (
            <Paper>
                <Typography variant='h2'>{props.item.name}</Typography>
                <div>{props.item.description}</div>
            </Paper>
        )
    }

    return (
        // <Grid item xs={12} sx={{ display: { xs: "none", md: "block" } }}>
        <Grid item xs={12}>
            <Carousel
                TransitionComponent={Transition}
            >
                {
                    props.items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Grid>
    )
}

CarouselComponent.defaultProps = {
    items: [
        {
            name: "Promocion #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Promocion #2",
            description: "Hello World!"
        }
    ],
};
