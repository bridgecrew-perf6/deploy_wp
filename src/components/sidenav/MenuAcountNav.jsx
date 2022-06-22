import React, { useContext } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Button, FormControl, Grid, IconButton, Link, Menu, MenuItem, TextField, Typography } from '@mui/material'
import { UserContext } from '../../contexts/UserContext/UserContext';

export default function MenuAcountNav() {
    const [user, setUser] = useContext(UserContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleClick} onMouseOver={handleClick}>
                <AccountCircle />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {user.login ? (
                    <>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </>
                ) : (
                    <Grid container spacing={2} p={3} sx={{ width: { xs: "auto", md: "70vh" } }}>
                        <Grid item xs={12}>
                            <Typography textAlign={"center"} variant='h5'>
                                Iniciar sesion
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField color="secondary"  label="Correo electronico" type="email" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth >
                                <TextField  color="secondary"  label="Contraseña" type="password" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={() => setUser({ ...user, login: true })} variant='contained' fullWidth sx={{ background: `#8ae1cb`, ":hover": { background: "#687b6c" } }}>
                                Entrar
                            </Button>
                        </Grid>
                        <Grid item xs={12} justifyContent="space-around"  sx={{display:{xs:"none",md:"flex"}}}>
                            <Link to="#" sx={{ color: `#4A3024`,cursor:"pointer" }}>¿ Has olvidado tu contraseña ?</Link>
                            <Link to="#" sx={{ color: `#4A3024`,cursor:"pointer" }}>Registrarse</Link>
                        </Grid>
                        <Grid item xs={12} textAlign="center" sx={{display:{xs:"block",md:"none"}}}>
                            <Link to="#" sx={{ color: `#4A3024`,cursor:"pointer" }}>¿ Has olvidado tu contraseña ?</Link>
                            <Link to="#" sx={{ color: `#4A3024`,cursor:"pointer" }}>Registrarse</Link>
                        </Grid>
                    </Grid>
                )}
            </Menu>
        </>
    )
}
