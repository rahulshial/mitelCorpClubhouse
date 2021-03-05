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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchButton: {
    size: "large",
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
    backgroundColor: "white",
    position: "absolute",
    borderRadius: "50px",
    border: "none",
    width: "65%",
    height: "70%",
  },
  roomNameInput: {
    display: "flex",
    position: "absolute",
    backgroundColor: "#F1EEE7",
    borderRadius: "15px",
    left: "25%",
    top: "10%",
    width: "50%",
    height: "12%",
    border: "none",
    justifyContent: "center",
    textAlign: "center",
    textSize: "30px",
  },
  roomInputLabel: {
    textAlign: "center",
    textSize: "30px",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
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
              + Start a room
              {/* <span role="img" aria-label="muscle">
                💪
              </span> */}
            </Button>
          </Grid>
          <Modal
            aria-labelledby="add room"
            aria-describedby="add room modal"
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
                <FormControl className={classes.roomNameInput}>
                  <InputLabel
                    htmlFor="my-input"
                    className={classes.roomInputLabel}
                  >
                    Name your Room (optional)
                  </InputLabel>
                  <Input aria-describedby="my-helper-text" />
                </FormControl>
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
