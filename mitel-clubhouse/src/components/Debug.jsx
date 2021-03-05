import React, { useEffect, useState } from 'react';
import fireDb from '../utilities/firebase'
import twilioSdk from '../utilities/twilio'

const Debug = () => {
    const [debugData, setDebugData] = useState({});
    const [room, setRoom] = useState();

    useEffect(() => {
        const joinRoom = async (roomName) => {
            const tempToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2Q0MzQ4ZTI4YmFjMWM4OGIzZjFjODJjZTQ5MjQ2NDNkLTE2MTQ5NTc1MTEiLCJpc3MiOiJTS2Q0MzQ4ZTI4YmFjMWM4OGIzZjFjODJjZTQ5MjQ2NDNkIiwic3ViIjoiQUM5MzA5NDViZTM0MmJjOGZmODFhZDg2YjE2OTAyM2YzMCIsImV4cCI6MTYxNDk2MTExMSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicGVyc29uMSIsInZpZGVvIjp7InJvb20iOiJtZWRpYS1yb29tIn19fQ.IWlh8I2ENfaKy-S1cBj6f81pe78gGP0z5hf2GDSOX2k'
            const currRoom = await twilioSdk.joinMediaRoom(tempToken, roomName)
            setRoom(currRoom)
            twilioSdk.subscribeToRoomMedia(currRoom, 'remote-audio')
            twilioSdk.subscribeToMediaChanges(currRoom, 'remote-audio')
        }
        const getDebugData = async () => {
            setDebugData(await fireDb.getCollection('debugCollection'));
        }
        getDebugData();
        joinRoom('media-room');
    }, []);

    return (
        <div className="debug">
        <audio id="remote-audio" autoPlay playsInline></audio>
        <h1>{JSON.stringify(debugData)}</h1>
        <p>{JSON.stringify(room)}</p>
        </div>
    );
}

export default Debug;
