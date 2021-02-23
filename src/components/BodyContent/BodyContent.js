import React from 'react';

import text from '../../posts/posts.js';

import makeStyles from './styles';
import { CardActionArea, Paper, Card, Typography, CardMedia, CardContent, Grid, GridList, GridListTile } from '@material-ui/core';

import sun1 from '../../img/sun1.jpg';
import sun2 from '../../img/sun2.jpg';
import sun3 from '../../img/sun3.jpg';
import sun4 from '../../img/sun4.jpg';
import sun5 from '../../img/sun5.jpg';
import sun6 from '../../img/sun6.jpg';
import sun7 from '../../img/sun7.jpg';
import sun8 from '../../img/sun8.jpg';
import sun9 from '../../img/sun9.jpg';
import sun10 from '../../img/sun10.jpg';
import sun11 from '../../img/sun11.jpg';
import sun12 from '../../img/sun12.jpg';

const BodyContent = () => {
    const classes = makeStyles();

    return(
        <React.Fragment>

        <Paper className={classes.paper}>
            
                
                    <Card className={"classes.root"}>
                        <CardActionArea>
                            <CardMedia
                            className={""}
                            image={sun1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                
            
       
        </Paper>
        
        <img className={classes.image} src={sun1} alt={"sun"} />
        <img className={classes.image} src={sun2} alt={"sun"} />
        <img className={classes.image} src={sun3} alt={"sun"} />
        <img className={classes.image} src={sun4} alt={"sun"} />
        <img className={classes.image} src={sun5} alt={"sun"} />
        <img className={classes.image} src={sun6} alt={"sun"} />
        <img className={classes.image} src={sun7} alt={"sun"} />
        <img className={classes.image} src={sun8} alt={"sun"} />
        <img className={classes.image} src={sun9} alt={"sun"} />
        <img className={classes.image} src={sun10} alt={"sun"} />
        <img className={classes.image} src={sun11} alt={"sun"} />
        <img className={classes.image} src={sun12} alt={"sun"} />
            
        </React.Fragment>
    );
}

export default BodyContent;