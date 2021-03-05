import { connect } from 'twilio-video'

const twilioSdk = {
    setRemoteMedia: (room, mediaDiv) => {
        room.on('participantConnected', participant => {
            console.log(`Participant "${participant.identity}" connected`);

            participant.tracks.forEach(publication => {
                if (publication.isSubscribed) {
                const track = publication.track;
                document.getElementById(mediaDiv).appendChild(track.attach());
                }
            });

            room.participants.forEach(participant => {
                participant.tracks.forEach(publication => {
                    if (publication.track) {
                        document.getElementById(mediaDiv).appendChild(publication.track.attach());
                    }
                })
            })

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