import React, { useState, useEffect } from 'react';
import { makeStyles, makestyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles( (theme) => ({
   card: {
       borderRadius: '20px',
       padding: '5px 20px 5px 20px',
   }
}));

export default function RoomPreview(props) {
    const classes = useStyles();
    const [ name, setRoomData ] = useState(props.name);
    const [ participants, setParticipants ] = useState(props.particpants);
    const [ icon, setIcon] = useState(props.icon);
    const [ id, setId] = useState(props.id);
    return (
        <Paper elevation={3} borderRadius={16} className={classes.card}>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="body1">{participants}</Typography>
            <Typography variant="body1">{icon}</Typography>
            <Typography variant="body1">{id}</Typography>
        </Paper>
    );
}