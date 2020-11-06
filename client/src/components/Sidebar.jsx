import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  Collapse,
} from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListLinks = ({ state }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(() => state.links.map(() => false));
  const handleClick = (index) => {
    let arr = [...open];
    arr[index] = !arr[index];
    setOpen(arr);
  };
  return (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {state.links.map((link, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => handleClick(index)}>
              <ListItemIcon>
                {"icon" in link ? <Icon>{link.icon}</Icon> : ""}
              </ListItemIcon>
              <ListItemText primary={link.display} />
              {"children" in link ? (
                open[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                ""
              )}
            </ListItem>
            {"children" in link ? (
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {link.children.map((child, key) => (
                    <ListItem key={key} button className={classes.nested}>
                      <ListItemText
                        primary={
                          <NavLink
                            style={{
                              color: "black",
                              textDecoration: "none",
                              paddingLeft: "50px",
                            }}
                            to={child.path}
                          >
                            {child.display}
                          </NavLink>
                        }
                      />
                    </ListItem>
                  ))}
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};
export default function TemporaryDrawer({ state, setState }) {
  console.log({ state });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <ListLinks classes={classes} state={state} />
      </Drawer>
    </div>
  );
}
