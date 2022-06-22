import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import CardProducts from './CardProducts'
// import StarIcon from '@mui/icons-material/Star';

export default function Slide() {
    const arrayLength = Array.from({ length: 7 });


    useEffect(() => {
        console.log("slide");
    }, [])


    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} textAlign="center">
                <Typography variant='h3'>
                    𝓛𝓸 𝓶𝓪𝓼 𝓿𝓮𝓷𝓭𝓲𝓭𝓸
                </Typography>
            </Grid>
            {arrayLength.map((item, index) => {
                return (
                    <Grid item xs={12} md={3} m={2} key={`cardProductSlide${index}`}>
                        <CardProducts image={`https://picsum.photos/200/30${index + 1}`} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
