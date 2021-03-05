import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import avatar1 from '../static/avatar1.png';
import avatar2 from '../static/avatar2.jpeg';
import {Link} from 'react-router-dom'

const useStyles = makeStyles( (theme) => ({
   card: {
       borderRadius: '20px',
       padding: '5px 20px 5px 20px',
   },
   avatar: {
       color: "#ffffff",
       backGroundColor: "#000000",
       border: "0px"
   },
   avatarContainer: {
       paddingTop: "15px"
   },
   nameContainer: {
       paddingTop: "10px"
   },
   cardContentContainer: {
       paddingBottom: "10px"
   },
   icons: {
       width: "80px"
   },
   joinRoom: {
    borderRadius: "20px",
  },
}));

export default function RoomPreview({joinRoom, ...props}) {
    const classes = useStyles();
    const [ name, setRoomData ] = useState(props.name);
    const [ participants, setParticipants ] = useState(props.particpants);

    return (
        <Paper elevation={3} borderRadius={16} className={classes.card}>
            <Grid container>

                <Grid item xs={12}>
                    <Typography variant="h2">{name}</Typography>
                </Grid>
                <Grid container item xs={12} direction="row" className={classes.cardContentContainer}>
                    <Grid container item xs={2} md={3} lg={2} 
                        direction="column-reverse" justify="flex-end"
                        className={classes.avatarContainer}>
                        <Avatar alt="Haohao" src={avatar2} className={classes.avatar} style={{marginTop: "-15px", marginLeft: "20px"}}/>
                        <Avatar alt="Andrew Garneau" src={avatar1} className={classes.avatar} />
                    </Grid>
                    <Grid container item xs={3} direction="column" className={classes.nameContainer}>
                        {participants.slice(0, 4).map( (name) =>(
                            <Typography variant="body1">{name}</Typography>
                         ))}
                        { participants.length > 4 &&
                            <Typography variant="body1" >+ {participants.length - 4} More</Typography>
                        }
                    </Grid>
                    <Grid container item xs={6} justify="center">
                        <Grid container item xs={12} justify="center" alignItems="flex-start">
                            <img className={classes.icons} src="https://img.icons8.com/plasticine/64/000000/coffee.png"/>
                        </Grid>
                        <Grid container item xs={12} justify="center" alignItems="center">
                            <Link to={"room/"+name} style={{ textDecoration: 'none' }}>
                                <Button onClick={() => joinRoom(name)} color="secondary" variant="contained" className={classes.joinRoom} disableElevation>
                                    <Typography variant="body1" >Join room</ Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}