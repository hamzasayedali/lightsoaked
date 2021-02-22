import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';

const Header = () => {
    return(
        <div className="header" >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4">The Light Soaked Days</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;