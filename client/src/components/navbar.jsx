import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "./menu.jsx";
import Sidebar from "./Sidebar.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ links }) {
  const classes = useStyles();
  const [stateSide, setStateSide] = React.useState({
    left: false,
  });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <Hidden xsDown>
            {links.map((link, key) => {
              if ("children" in link) {
                return (
                  <Menu
                    key={key}
                    display={link.display}
                    children={link.children}
                  />
                );
              } else {
                return (
                  <Link to={link.path} key={key}>
                    <Button key={key} color="inherit">
                      {link.display}
                    </Button>
                  </Link>
                );
              }
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                console.log({ stateSide });
                setStateSide({ ...stateSide, left: true });
              }}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar state={stateSide} setState={setStateSide.bind(this)} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
