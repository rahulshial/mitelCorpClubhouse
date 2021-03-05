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

const mockUserData = [
    {
       name: "Andrew Garneau",
       imageUrl: "https://ca.slack-edge.com/T01PH750RL6-U01PQ1V4GJ1-b6607685df50-512",
    },
    {
       name: "HaoHao Du",
       imageUrl: "https://files.slack.com/files-pri/T01PH750RL6-F01Q901LUQ5/received_867407077088577__1_.jpeg",
    },
    {
       name: "Jerry Fengwei Zhang",
       imageUrl: "https://ca.slack-edge.com/T01PH750RL6-U01PASG5KAT-c70e9d421a30-512",
    },
    {
       name: "Sammi Yeung",
       imageUrl: "https://ca.slack-edge.com/T01PH750RL6-U01PQ1V20JH-f9b75ba23f93-512",
    },
    {
       name: "Lucas Chan",
       imageUrl: "https://ca.slack-edge.com/T01PH750RL6-U01PZ9A4YGL-28b63259037d-512",
    },
    {
       name: "Rahul Shial",
       imageUrl: "https://ca.slack-edge.com/T01PH750RL6-U01PQ1V11N1-e1b5ad8e7c5b-512",
    },
];


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
                        {mockUserData.slice(0, 4).map( (user) =>(
                            <Typography variant="body1">{user.name}</Typography>
                         ))}
                        { mockUserData.length > 4 &&
                            <Typography variant="body1" >+ {mockUserData.length - 4} More</Typography>
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