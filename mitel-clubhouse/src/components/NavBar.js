import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

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

export default function MenuAppBar() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [roomIcon, setRoomIcon] = React.useState("money");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleRoomClick = (event) => {
    console.log("click");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const handleLetsGoButton = () => {
    console.log("lets go");
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "rgba(30, 146, 223, 0.3)",
        boxShadow: "none",
        paddingTop: "2rem",
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
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
                />
                <Typography variant="body2">Select the room icon</Typography>
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
                <div>
                  <Button
                    className={classes.letsGoButton}
                    onClick={handleModalClose}
                  >
                    <span role="img" aria-label="muscle">
                      💪 Let's go
                    </span>
                  </Button>
                </div>
              </div>
            </Fade>
          </Modal>

          <Grid item xs>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle
                fontSize="large"
                style={{
                  color: "#424242",

                  fontSize: 40,
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
