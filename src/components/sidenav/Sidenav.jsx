import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline, AppBar as MuiAppBar, Toolbar, List, Typography, IconButton } from '@mui/material';

import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { useNavigate, useLocation } from "react-router-dom";
import { Images } from '../../helpers/imagePath';
import { Grid } from '@mui/material';
import { LocationOn, ShoppingCart } from '@mui/icons-material';
import { BusinessContext } from '../../contexts/BusinessContext/BusinessContext';
import SearchComponent from '../search/SearchComponent';
import DrawerSidebar from '../drawer/DrawerSidebar';
import MenuAcountNav from './MenuAcountNav';

const menuItens = [
  {
    text: 'Inicio',
    icon: <HomeIcon></HomeIcon>,
    path: '/'
  },
  {
    text: 'Tienda',
    icon: <StorefrontIcon></StorefrontIcon>,
    path: '/store'
  },
  {
    text: 'Quiénes somos',
    icon: <LibraryBooksIcon></LibraryBooksIcon>,
    path: '/about-us'
  },
  {
    text: 'Ventas Corporativas',
    icon: <AddBusinessIcon></AddBusinessIcon>,
    path: '/b2b-sales'
  },
  {
    text: 'Contáctanos',
    icon: <ContactMailIcon></ContactMailIcon>,
    path: '/contact-us'
  }
];

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    background: `#4A3024`,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `Acme`,
  // fontSize: `100px`,
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  // border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const DrawerHeaderTwo = styled('div')(({ theme }) => ({
  marginTop: window.innerWidth <= 760 ? 20 : 0,
  // border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Sidenav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = React.useContext(BusinessContext);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: "#4A3024", color: "#F7F7F7" }}>
        <Grid container direction={"row"}>
          <Grid item xs={12} md={5} display="flex">
            <Toolbar>
              <DrawerSidebar direction="left">
                <DrawerHeader>
                  <img src={Images('./logo.png')} alt="Venecia" width='60' height='60' />
                  {/* <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton> */}
                </DrawerHeader>
                <Divider />
                <List>
                  {menuItens.map(item => (
                    <ListItem
                      button
                      key={item.text}
                      onClick={() => navigate(item.path, { replace: true })}
                      selected={location.pathname === item.path ? true : false}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                  ))}
                </List>
                <Divider />

              </DrawerSidebar>
              <TypographyTitle variant="h6" noWrap component="div">
                Venecia
              </TypographyTitle>
              {state.city_name !== "" ? (
                <TypographyTitle onClick={() => setState({ ...state, dialogCity: true })} marginLeft={5} variant="h6" noWrap component="div" className='styleButton'>
                  <LocationOn />
                  {state.city_name}
                </TypographyTitle>
              ) : (
                <TypographyTitle onClick={() => setState({ ...state, dialogCity: true })} marginLeft={5} variant="h6" noWrap component="div" className='styleButton'>
                  <LocationOn />
                  Seleccionar ubicacion
                </TypographyTitle>

              )}
            </Toolbar>
          </Grid>
          <Grid item xs={12} md={4} display={"flex"} justifyContent={"start"} alignItems={"center"}>
            <SearchComponent />
          </Grid>
          <Grid item xs={12} md={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <MenuAcountNav />

            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>

          </Grid>
        </Grid>
      </AppBar>

      <Grid container>
        <DrawerHeaderTwo />

        {props.children}

      </Grid>
    </Box>
  );
}
