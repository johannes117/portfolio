import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from "@material-ui/core/Link";

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
            component={Link} href={"https://www.linkedin.com/in/johannes117/"} target="_blank"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon/>}
            component={Link} href={"https://github.com/johannes117/"} target="_blank"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<Instagram/>}
            component={Link} href={"https://www.instagram.com/johannes_duplessis/"} target="_blank"
            />
        </BottomNavigation>
    )
}

export default Footer
