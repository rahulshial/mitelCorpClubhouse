import React, { useEffect, useState } from 'react';
import fireDb from '../utilities/firebase'
import twilioSdk from '../utilities/twilio'

const Debug = () => {
    const [debugData, setDebugData] = useState({});
    const [room, setRoom] = useState();

    useEffect(() => {
        const joinRoom = async (roomName) => {
            const tempToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2Q0MzQ4ZTI4YmFjMWM4OGIzZjFjODJjZTQ5MjQ2NDNkLTE2MTQ5MDU0NjYiLCJpc3MiOiJTS2Q0MzQ4ZTI4YmFjMWM4OGIzZjFjODJjZTQ5MjQ2NDNkIiwic3ViIjoiQUM5MzA5NDViZTM0MmJjOGZmODFhZDg2YjE2OTAyM2YzMCIsImV4cCI6MTYxNDkwOTA2NiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiZXhhbXBsZS1tZWRpYS11c2VyIiwidmlkZW8iOnsicm9vbSI6Im1lZGlhLXJvb20ifX19.rTNtFJJHx57yE5Y_UPGT8-SN7Yry0ORrHwoANIPHbg4'
            setRoom(await twilioSdk.joinMediaRoom(tempToken, roomName))
        }
        const getDebugData = async () => {
            setDebugData(await fireDb.getCollection('debugCollection'));
        }
        getDebugData();
        joinRoom('firstroom');
    }, []);

    return (
        <div className="debug">
        <h1>{JSON.stringify(debugData)}</h1>
        <h1>{JSON.stringify(room)}</h1>
        </div>
    );
}

export default Debug;
