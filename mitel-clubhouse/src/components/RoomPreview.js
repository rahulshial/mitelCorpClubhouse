import React, { useState, useEffect } from 'react';
import { makeStyles, makestyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

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
            <h1>{name}</h1>
            <p>{participants}</p>
            <p>{icon}</p>
            <p>{id}</p>
        </Paper>
    );
}