import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import { IconButton } from '@mui/material';

export default function DrawerSidebar(props) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(props.direction, true)}
                    edge="start"
                    // sx={{ mr: 2, ...(state[props.direction] && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={props.direction}
                    open={state[props.direction]}
                    onClose={toggleDrawer(props.direction, false)}
                >
                    {props.children}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
