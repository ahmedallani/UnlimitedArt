import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem, ListItemText, Icon } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
});
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ link }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.root}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        startIcon={"icon" in link ? <Icon>{link.icon}</Icon>: ""}
        endIcon={<ArrowDropDownIcon />}
      >
        {link.display}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {link.children.map((child, key) => (
          <StyledMenuItem key={key}>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={child.path}
            >
              <ListItemText primary={child.display} />
            </NavLink>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
