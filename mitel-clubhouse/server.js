const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');

const port = process.env.PORT || 3030;
// const { connect } = require('twilio-video');
const faker = require("faker");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
app.use(cors());

app.post('/createRoom/:roomName', function(req, res) {
  console.log('Creating a room...');
  client.video.rooms.create({uniqueName: req.params.roomName})
  .then((room) => {
    res.send(room);
  });
});

app.get('/token/:roomName', function(request, response) {
  console.log('Creating a token...');
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created

  const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const API_KEY_SID = process.env.TWILIO_API_KEY;
  const API_KEY_SECRET = process.env.TWILIO_API_SECRET;
  
  const token = new AccessToken(
    ACCOUNT_SID,
    API_KEY_SID,
    API_KEY_SECRET,
  );
  // Assign the generated identity to the token
  console.log(request.params.roomName)
  const identity = faker.name.findName();
  token.identity = identity;
  const grant = new VideoGrant({
    room: request.params.roomName
  });
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
