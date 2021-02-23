import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';
import makeStyles from './styles';

const Header = () => {
    const classes = makeStyles();
    return(
        <div className="header" >
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4">The Light Soaked Days</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;