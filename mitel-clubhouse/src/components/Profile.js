import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SettingsIcon from "@material-ui/icons/Settings";
import picture from "../assets/examplePicture.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "55%",
    borderRadius: "10px",
    marginTop: "2rem",
  },
  media: {
    width: "15rem",
    paddingTop: "56.25%", // 16:9
    marginTop: "2rem",
    marginLeft: "16px",
    borderRadius: "30px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  icons: {
    height: "53px",
    width: "56px",
    marginTop: "3rem",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/">
        <Button style={{ marginTop: "3rem", height: "1px" }}>
          <ArrowBackIosIcon className={classes.icons} />
        </Button>
      </Link>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Paella dish"
        />

        <CardHeader title="Levi Halvorson" />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            Business Analyst for the myMobilty Division at Mitel
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Toronto, Canada
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Striving to work in tech in Asia
          </Typography>
          ---------------------
          <Typography variant="body1" color="textSecondary" component="p">
            Likes:
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Dancing
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Photography
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Basketball
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
      <SettingsIcon className={classes.icons} />
    </div>
  );
}
