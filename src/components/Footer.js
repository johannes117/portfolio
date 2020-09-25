import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        }, 
        "& .MuiSvgIcon-root":{
            fill: "white",
            "&:hover": {
                fill:"#38AECC",
                fontSize: "1.8rem"
            }
        }
    }, 

})

const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedInIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<Instagram/>}
            />
            


            
        </BottomNavigation>
    )
}

export default Footer
