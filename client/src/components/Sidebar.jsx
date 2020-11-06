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
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ state, setState }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(() => state.links.map(() => false));
  const handleClick = (index) => {
    let arr = [...open];
    arr[index] = !arr[index];
    setOpen(arr);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {state.links.map((link, index) => (
          <ListItem button key={index} onClick={() => handleClick(index)}>
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
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
