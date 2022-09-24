import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import { NavLink } from "react-router-dom";
import LocationCityIcon from '@material-ui/icons/LocationCity';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  main: {
    padding: theme.spacing(3),
  },
}));

export default function MenuPageTemplate(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Iteris Imóveis</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <div className={classes.list}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem component={NavLink} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={NavLink} to="/sobre">
              <ListItemIcon>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
            <ListItem component={NavLink} to="/imoveis">
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="Imoveis" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.main}>
      {/* props.children é a forma de acessar o "conteúdo" usado no componente, assim podemos usar elementos externos aqui. */}
        <div className="ConteudoPrincipalAQUI">{props.children}</div>
      </main>
    </div>
  );
}