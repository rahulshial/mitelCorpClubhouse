import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CallEndIcon from '@material-ui/icons/CallEnd';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom'

const useStyles = makeStyles( (theme) => ({
    container: {
        padding: '30px 20px 30px 20px',
        width: "1500px",
    },
    card: {
        borderRadius: '30px',
        padding: '5px 20px 5px 20px',
    },
    backButton: {
        padding: "10px 10px 20px 10px"
    },
    titleBar: {
        margin: "-60px 0px 0px 0px"
    },
    cardMedia: {
        width: 250,
        height: 250,
        borderRadius: 20
    },
    userCard: {
        borderRadius: 20
    },
    participants: {
        padding: "20px 0px 0px 0px"
    },
    redButton: {
        backgroundColor: "#EF4142",
        color: "#ffffff"
    }
 }));

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

 export default function SingleRoom(props) {
    const classes=useStyles(mockUserData);

    const [participants, setParticipants] = useState(mockUserData)
    const [roomName] = useState(props.roomName || "Voice Room")


    return (
        <Grid container justify="center">
            <Box maxWidth={1500} justify="center" className={classes.container}>
                <Paper className={classes.card}>
                    <Grid container direction="column">
                        <Grid container item xs={12} direction="row" className={classes.backButton}>
                            <Grid item xs={3}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button color="black" startIcon={<ArrowBackIosIcon/>}>
                                        <Typography variant="body1">All Rooms</Typography>
                                    </Button>
                                </Link>
                                
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} direction="column" alignItems="center" className={classes.titleBar}>
                            <Typography variant="h1">{roomName}</Typography>
                        </Grid>
                        
                        <Grid container item xs={12} 
                        direction="row" alignItems="flex-start" justify="flex-start" 
                        spacing={2} className={classes.participants}>
                            { participants.map((person) => (
                                
                                <Grid container item xs direction="column" alignItems="center">
                                    <CardMedia
                                        className={classes.cardMedia}
                                        title={person.name} 
                                        image={person.imageUrl}/>
                                    <Typography variant="body1">{person.name}</Typography>
                                </Grid>

                            ))}
                        </Grid>

                        <Grid container item xs={12} direction="row" className={classes.backButton}>
                            <Grid item xs={3}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="error" startIcon={<CallEndIcon style={{color: "#000000"}}/>} className={classes.redButton}>
                                        <Typography variant="body1">Leave Quietly</Typography>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>      
        </Grid>
    );
 };