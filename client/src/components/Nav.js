import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";

const drawerWidth = 300;

const Cactus = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    paddingTop: "10px",
    paddingBottom: "10px",

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    verticalAlign: "middle"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  welcome: {
    flexGrow: 1,
    textAlign: "right"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    color: theme.palette.text.secondary
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  linkName: {
    color: theme.palette.text.secondary
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

export default function Nav(props) {
  const history = useHistory();
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (state, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const filteredLinks = props.links.filter(function(link) {
    return link.name !== "Signup" && link.name !== "Login";
  });

  const linksToUse = () => {
    if (props.user.name) {
      return filteredLinks;
    } else {
      return props.links;
    }
  };
  const links = linksToUse();

  const navList = links.map((link, index) => {
    return (
      <div
        key={index}
        className={classes.drawerPaper}
        role="presentation"
        onClick={toggleDrawer(state.right, false)}
        onKeyDown={toggleDrawer(state.right, false)}
      >
        <List key={index}>
          <ListItem button key={link.path} component={Link} to={link.path}>
            <ListItemText primary={link.name} className={classes.linkName} />
          </ListItem>
        </List>
      </div>
    );
  });

  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("mode");
    props.setUser({ email: "", name: "", id: "" });
    history.push("/login");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <ButtonBase onClick={() => history.push("/menu")}>
            <Cactus src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582608002/cactus_wxnhwz.svg" />
            <Typography variant="h6" noWrap className={classes.title}>
              SETTLE
            </Typography>
          </ButtonBase>
          {props.user.name && (
            <Typography variant="h6" noWrap className={classes.welcome}>
              Hi {props.user.name}!
            </Typography>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        <div className={classes.drawerHeader}>
          {props.user.name && (
            <List>
              <ListItem
                button
                onClick={() => {
                  logout();
                }}
              >
                <ListItemText className={classes.linkName}>Logout</ListItemText>
              </ListItem>
            </List>
          )}
        </div>
        <Divider />
        {navList}
        <Divider />
      </Drawer>
    </div>
  );
}
