import React, { useEffect, useState } from 'react';
import fireDb from '../utilities/firebase'
import twilioSdk from '../utilities/twilio'

const Debug = () => {
    const [debugData, setDebugData] = useState({});
    const [room, setRoom] = useState();
    const [isMuted, setMute] = useState(false);

    useEffect(() => {
        const joinRoom = async (roomName) => {
            const userName = 'test-user1'
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
        joinRoom('media-room');
    }, []);

    return (
        <div className="debug">
        <audio id="remote-audio" autoPlay playsInline></audio>
        {/* <button >{isMuted ? `click to mute` : `click to mute`}</button> */}
        <h1>{JSON.stringify(debugData)}</h1>
        <p>{JSON.stringify(room)}</p>
        </div>
    );
}

export default Debug;
