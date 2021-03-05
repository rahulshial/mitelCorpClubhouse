import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { fireAuth, auth } from '../utilities/firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchButton: {
    size: "large",
    // marginLeft: "1rem",
  },
  startRoom: {
    backgroundColor: "#3FD77E",
    color: "white",
    fontSize: "24px",
    padding: "0 8rem",
    borderRadius: "2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    position: "absolute",
    alignItems: "center",
    margin: "auto",
    borderRadius: "50px",
    border: "none",
    width: "65%",
    height: "70%",
  },
  roomNameInput: {
    backgroundColor: "#F1EEE7",
    borderRadius: "15px",
    width: "50%",
    height: "15%",
    border: "none",
    fontFamily: "Quicksand",
    fontWeight: 700,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    textSize: "30px",
    marginTop: "3rem",
    marginBottom: "1rem",
  },
  roomInputLabel: {
    textAlign: "center",
    textSize: "30px",
  },
  letsGoButton: {
    backgroundColor: "#3FD77E",
    color: "white",
    fontSize: "24px",
    padding: "0 8rem",
    borderRadius: "2rem",
  },
  roomEmojis: {
    fontSize: "4rem",
  },
}));

export default function NavBar({ createRoom }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [roomIcon, setRoomIcon] = React.useState("money");
  const [roomName, handleRoomName] = React.useState("default");
  const [isLoggedIn, setIsLoggedIn] = React.useState(auth.currentUser ?? false);

  const handleLogin = async () => {
    if (!isLoggedIn) {
      setIsLoggedIn(await fireAuth.signInWithGoogle());
    }
  }

  const handleProfile = () => {
    
  }

  const handleRoomClick = (event) => {
    createRoom(roomName);
    handleModalClose();
    console.log("click");
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleRoomIcon = (event, newRoomIcon) => {
    setRoomIcon(event.target.ariaLabel);
  };

  const handleInputChange = (event) => {
    handleRoomName(event.target.value);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#bfdef2",
        boxShadow: "none",
        paddingTop: "1rem",
        position: "sticky",
        top: "0"
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {/* search button on navbar */}
          <Grid item xs>
            <IconButton
              edge="start"
              className={classes.searchButton}
              color="inherit"
              aria-label="menu"
            >
              <SearchIcon
                style={{ color: "#424242", height: "53px", width: "56px" }}
              />
            </IconButton>
          </Grid>
          <Grid container item xs={10} justify="center">
            <Button className={classes.startRoom} onClick={handleModalOpen}>
              <Typography variant="button">+ Start a room</Typography>
            </Button>
          </Grid>
          {/* //modal */}
          <Modal
            aria-labelledby="add room"
            aria-describedby="add room modal"
            disableEnforceFocus
            disableAutoFocus
            className={classes.modal}
            open={modalOpen}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalOpen}>
              <div className={classes.paper}>
                <TextField
                  style={{ fontFamily: "Quicksand" }}
                  className={classes.roomNameInput}
                  aria-describedby="my-helper-text"
                  placeholder="Name your Room (optional)"
                  onChange={handleInputChange}
                />
                <Typography variant="body2">Select the room icon</Typography>
                {/* //emoji button group */}
                <div>
                  <Button
                    value="books"
                    aria-label="books"
                    className={classes.roomEmojis}
                    onClick={handleRoomIcon}
                  >
                    <span role="img" aria-label="books">
                      📚
                    </span>
                  </Button>
                  <Button
                    value="burger"
                    aria-label="burger"
                    className={classes.roomEmojis}
                    onClick={handleRoomIcon}
                  >
                    <span role="img" aria-label="burger">
                      🍔
                    </span>
                  </Button>
                  <Button
                    value="money"
                    aria-label="money"
                    className={classes.roomEmojis}
                    onClick={handleRoomIcon}
                  >
                    <span role="img" aria-label="money">
                      💸
                    </span>
                  </Button>
                  <Button
                    value="keyboard"
                    aria-label="keyboard"
                    className={classes.roomEmojis}
                    onClick={handleRoomIcon}
                  >
                    <span role="img" aria-label="keyboard">
                      ⌨️
                    </span>
                  </Button>
                  <Button value="add" aria-label="add" onClick={handleRoomIcon}>
                    <AddIcon className={classes.roomEmojis} />
                  </Button>
                </div>
                <Typography variant="body2">
                  Start a room open to everyone
                </Typography>
                {/* //lets go button inside modal */}
                <div>
                  <Button
                    className={classes.letsGoButton}
                    onClick={() => handleRoomClick(roomName)}
                  >
                    <span role="img" aria-label="muscle">
                      💪 Let's go
                    </span>
                  </Button>
                </div>
              </div>
            </Fade>
          </Modal>
          {/* account icon on nav bar */}
          <Grid item xs>
            <img
                src={isLoggedIn ? auth.currentUser.photoURL : "https://i.stack.imgur.com/34AD2.jpg"}
                onClick={handleLogin}
                alt="profile pic"
                fontSize="large"
                style={{
                  borderRadius: '50px',
                  color: "#424242",
                  width: '50px',
                }} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
