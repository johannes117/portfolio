import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from "./Footer";
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar, 
    Toolbar, 
    ListItem, 
    ListItemIcon,
    IconButton,
    ListItemText, 
    Avatar, 
    Divider, 
    List, 
    Box,
    Button,
   
} from '@material-ui/core'
import {
    AssignmentInd,
    Home, 
    Apps, 
    ContactMail
} from '@material-ui/icons'
import avatar from "../circle-cropped.png"

// CSS STYLES
const useStyles = makeStyles(theme=> ({
 menuSliderContainer: {
     width: 250, 
     background: "#183446", 
     height: "100%"
 }, 
 avatar: {
     display: "block",
     margin: "0.5rem auto",
     width: theme.spacing(12),
     height: theme.spacing(12)
 },  
 avatarsmall: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
},  
 listItem: {
    color: "white"
 }, 
 listIcon: {
     color: "white"
 }, 
 button: {
    
 },


}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home", 
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume", 
        listPath: "/resume"
    
    },
    {
        listIcon: <Apps/>,
        listText: "Projects", 
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts", 
        listPath: "/contacts"
    }
]


const NavBar = () => {
    const [state, setState] = useState({
        right: false
    });

const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]:open });
};

    const classes = useStyles()

    const sideList = slider => (
        
        <Box className = {classes.menuSliderContainer} component = "div" onClick={toggleSlider(slider, false)}>    
           <Avatar className={classes.avatar} src={avatar} alt="Johannes du Plessis" /> 
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to ={lsItem.listPath}>
                    <ListItemIcon className={classes.listIcon}> {lsItem.listIcon}</ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/> 
                </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component = "nav" >
            <AppBar position="static" style={{background: "#183446"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style={{color: "white", fontSize: "40" }}/>
                    </IconButton>
                    <Avatar className={classes.avatarsmall} src={avatar} alt="Johannes du Plessis" /> 
                        <Button className={classes.button} variant = "subtitle1" style = {{color: "white"}} component={Link} to ={"/"}>
                        Portfolio
                        </Button>
                        <MobilRightMenuSlider anchor="left" open={state.right} onClose={toggleSlider("right", false)} >
                            {sideList("right")}
                            <Footer/>
                        </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default 
NavBar
