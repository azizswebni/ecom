import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import BasketItems from "./BasketItems";
import { useItems } from "../useContext/Context";
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function Panier() {
  const classes = useStyles();
  const shopItems = useItems();
  const Items = shopItems.items;
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          In Basket
        </Typography>
        {Items.map((Item) => (
          <BasketItems
            key={Item.image}
            image={Item.image}
            title={Item.title}
            price={Item.price}
          />
        ))}
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ color: "white" }}>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <ArrowBackIosIcon />
            </IconButton>
          </Link>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AccountBalanceWalletOutlinedIcon />
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
