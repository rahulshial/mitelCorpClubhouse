import React, { useEffect, useState } from 'react';
import fireDb from '../utilities/firebase'
import twilioSdk from '../utilities/twilio'

const Debug = () => {
    const [debugData, setDebugData] = useState({});
    const [room, setRoom] = useState();

    useEffect(() => {
        const joinRoom = async (userName, roomName) => {
            const tempToken = twilioSdk.fetchVideoToken(userName, roomName)
            const currRoom = await twilioSdk.joinMediaRoom(tempToken, roomName)
            setRoom(currRoom)
            twilioSdk.subscribeToRoomMedia(currRoom, 'remote-audio')
            twilioSdk.subscribeToMediaChanges(currRoom, 'remote-audio')
        }
        const getDebugData = async () => {
            setDebugData(await fireDb.getCollection('debugCollection'));
        }
        getDebugData();
        joinRoom('test-user1', 'media-room');
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
