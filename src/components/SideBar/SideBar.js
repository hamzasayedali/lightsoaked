import React from 'react';

import {Drawer,  Divider, List, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

const SideBar = () => {
    const classes = useStyles();

    return(
        <div className="side_bar">
            <Drawer
        
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
          }}
        anchor="right"
      >
        <div />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
        </div>
    );
}

export default SideBar;