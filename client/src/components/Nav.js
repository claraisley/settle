import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    paddingTop: "15px",
    paddingBottom: "15px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
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
  const theme = useTheme();

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

  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

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
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            SETTLE
          </Typography>
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
            <Button
              variant="contained"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </div>
        <Divider />
        {navList}
        <Divider />
      </Drawer>
    </div>
  );
}
