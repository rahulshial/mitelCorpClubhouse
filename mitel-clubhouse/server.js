const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3030;
// const { connect } = require('twilio-video');
const faker = require("faker");
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

app.post('/createRoom/:roomName', function(req, res) {
  console.log('Creating a room...');
  client.video.rooms.create({uniqueName: req.params.roomName})
  .then((room) => {
    console.log(room, room.sid)
    res.send(room);
  });
});

app.get('/token', function(request, response) {
  console.log('Creating a token...');
    const identity = faker.name.findName();
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET
  );
  // Assign the generated identity to the token
  token.identity = identity;
  const grant = new VideoGrant();
  // Grant token access to the Video API features
  token.addGrant(grant);
  // Serialize the token to a JWT string and include it in a JSON response
  response.send({
      identity: identity,
      token: token.toJwt()
  });
});


app.listen(port, () => {
  console.log(`Twilio server now listening to port ${port}`);
});
