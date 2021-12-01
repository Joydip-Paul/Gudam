import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './Styles';
import logo from '../../Assets/logo.png';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
    const classes = useStyle();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6">
                        <img src={logo} height="50px" alt="commerce.js" className={classes.image} />
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}></div>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;