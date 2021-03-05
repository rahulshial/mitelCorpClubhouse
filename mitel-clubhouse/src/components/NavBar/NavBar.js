import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
    justify: "space-between",
  },
  searchButton: {
    size: "large",
    marginLeft: "1rem",
  },
  startRoom: {
    flexGrow: 1,
    backgroundColor: "#3FD77E",
    color: "white",
    fontSize: "24px",
    padding: "0 8rem",
    borderRadius: "2rem",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
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

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={1}
    >
      <AppBar
        position="static"
        style={{
          background: "rgba(30, 146, 223, 0.3)",
          boxShadow: "none",
          paddingTop: "2rem",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.searchButton}
            color="inherit"
            aria-label="menu"
          >
            <SearchIcon style={{ color: "#424242", fontSize: 40 }} />
          </IconButton>
          <Grid item xs={12}>
            <Button className={classes.startRoom} onClick={handleRoomClick}>
              + Start a room
            </Button>
          </Grid>
          {auth && (
            <div>
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
                    marginRight: "1rem",
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
