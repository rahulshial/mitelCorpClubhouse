import { connect } from 'twilio-video'
import twilio from 'twilio'

const twilioSdk = {
    fetchVideoToken: (userName, roomName) => {
        const twilioAccountSid = process.env.REACT_APP_TWILIO_SID;
        const twilioApiKey = process.env.REACT_APP_TWILIO_API_KEY;
        const twilioApiSecret = process.env.REACT_APP_TWILIO_API_SECRET;
        
        const identity = userName
        
        const AccessToken = twilio.jwt.AccessToken
        
        const videoGrant = new AccessToken.VideoGrant({
            room: roomName
        })
        ;
        
        const token = new AccessToken(
            twilioAccountSid,
            twilioApiKey,
            twilioApiSecret,
            {identity: identity}
        );
        
        token.addGrant(videoGrant);
        
        // Serialize the token to a JWT string
        console.log(token.toJwt())
        return token.toJwt()
    },
    muteLocalMedia: (room, shouldMute) => {
        room.localParticipant.audioTracks.forEach(publication => {
            if (shouldMute) publication.track.disable();
            else publication.track.enable();
          });
    },
    subscribeToRoomMedia: (room, mediaDiv) => {
        room.participants.forEach(participant => {
            participant.tracks.forEach(publication => {
                if (publication.track) {
                    document.getElementById(mediaDiv).appendChild(publication.track.attach());
                }

                // if (publication.isSubscribed) {
                //     handleTrackDisabled(publication.track);
                // }
                // publication.on('subscribed', handleTrackDisabled);
            })

            participant.on('trackSubscribed', track => {
                document.getElementById(mediaDiv).appendChild(track.attach());
            });
        })

    },
    subscribeToMediaChanges: (room, mediaDiv) => {
        room.on('participantConnected', participant => {
            console.log(`Participant "${participant.identity}" connected`);

            participant.tracks.forEach(publication => {
                if (publication.isSubscribed) {
                const track = publication.track;
                document.getElementById(mediaDiv).appendChild(track.attach());
                }
            });

            participant.on('trackSubscribed', track => {
                document.getElementById(mediaDiv).appendChild(track.attach());
            });
        });
    },
    joinMediaRoom: async (token, roomName) => {
        return connect(token, {
                audio: true,
                name: roomName,
            }).then(room => {
                // Log any Participants already connected to the Room
                room.participants.forEach(participant => {
                    console.log(`Participant "${participant.identity}" is connected to the Room`);
                });
                return room;
            })
    }
}

export default twilioSdk