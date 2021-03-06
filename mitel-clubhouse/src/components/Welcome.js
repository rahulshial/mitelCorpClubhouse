import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import kangaroo from '../static/kangaroo.png'
import Grid from '@material-ui/core/Grid';
import ImageFadeIn from "react-image-fade-in";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    full: {
        height: "100%",
        paddingTop: "100px"
    },
    button: {
        backgroundColor: "#000000",
        color: "#ffffff"
    },
}));


export default function Welcome () {
    const classes = useStyles();
    setTimeout(()=>{}, 1000);
    return(
        <Grid>
            <Grid container item xs={12} justify="center" alignContent="center" direction="column" className={classes.full}>
                <ImageFadeIn src={kangaroo}/>
            </Grid>
            <Grid container item xs={12} justify="center" alignContent="center" direction="column" >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className={classes.button} disableElevation>Enter</Button>
                </Link>
            </Grid>
        </Grid>
        
    );

}