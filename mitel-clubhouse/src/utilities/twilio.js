import { connect } from 'twilio-video'

const twilioSdk = {
    joinMediaRoom: async (token, roomName) => {
        return connect(token, {
                audio: true,
                name: roomName,
                // video: { width: 640 }
            }).then(room => {
                return room
            }).catch(err => {
                console.log(`Unable to join room. Error: ${err}`)
            })
    }
}

export default twilioSdk