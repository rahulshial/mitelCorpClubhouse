import React, { useState, useEffect } from 'react';
import { makeStyles, makestyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RoomPreview from './RoomPreview.js';



const useStyles = makeStyles( (theme) => ({
   container: {
       padding: '30px 20px 30px 20px'
   }
}));

const mockData = [
    {
        roomName: "Coffee Break",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r1",
    },
    {
        roomName: "Co-working Space",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r2",
    },
    {
        roomName: "UX/UI Design",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r3",
    },
    {
        roomName: "Wealth Management",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r4",
    },
    {
        roomName: "studying for CFM",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r5",
    },
    {
        roomName: "Software Dev Help",
        participantsList: [
            "Andrew May",
            "Jane Doe",
            "Jazz Smith",
            "Drew Bieber",
            "Sandy Sen"
        ],
        icon: "default",
        id: "r6",
    },
];

export default function Hallway ({ joinRoom }) {
    const classes = useStyles();
    const [ roomData, setRoomData ] = useState(mockData);

    return (
        <Box maxWidth={1500} justify="center" className={classes.container}>
            <Grid container justify="center" spacing={3}>
                {roomData.map( (room) => (
                    <Grid key={room.roomName} item xs={12} md={5} xl={4} >
                        <RoomPreview
                            name={room.roomName}
                            particpants={room.participantsList}
                            icon={room.icon}
                            id={room.id}
                            joinRoom={joinRoom}/>
                    </Grid>
                    
                ))}
            </Grid>
        </Box>
        
    );
};