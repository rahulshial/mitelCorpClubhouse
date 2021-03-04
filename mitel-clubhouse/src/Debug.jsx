import React, { useEffect, useState } from 'react';
import fireDb from './utilities/firebase'

const Debug = () => {
    const [debugData, setDebugData] = useState({});
    useEffect(() => {
        const getDebugData = async () => {
            setDebugData(await fireDb.getCollection('debugCollection'));
        }
        getDebugData();
    }, []);

    return (
        <div className="debug">
        <h1>{JSON.stringify(debugData)}</h1>
        </div>
    );
}

export default Debug;
