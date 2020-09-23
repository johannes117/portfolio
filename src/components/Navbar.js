import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
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
    Typography, 
    Box,
    ThemeProvider
} from '@material-ui/core'
import {
    ArrowBack, 
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
     width: theme.spacing(13),
     height: theme.spacing(13)
 },  
 listItem: {
    color: "white"
 }, 
 listIcon: {
     color: "#38aecc"
 }

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
        listText: "Portfolio", 
        listPath: "/portfolio"
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
            <Avatar className={classes.avatar} src={avatar} alt="Johannes du Plessis"/>
            <Divider />
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
                        <ArrowBack style={{color: "#38aecc" }}/>
                    </IconButton>
                        <Typography variant = "h5" style = {{ color: "white"}}>
                            Portfolio
                        </Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)} >
                            {sideList("right")}
                        </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default 
NavBar
