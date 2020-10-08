import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://johannes117.github.io/portfolio/">
          Johannes du Plessis
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
      
    },
    root: {
      "& .MuiBottomNavigationAction-root": {
          minWidth: 0,
          maxWidth: 250,
      }, 
      "& .MuiSvgIcon-root":{
          fill: "black",
          "&:hover": {
              fill:"#38AECC",
              fontSize: "1.8rem"
          }
      }
    }
  
  }));

export default function PageFooter() {
    const classes = useStyles();
    return (
        <div>
            {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
              "Check out my Github or LinkedIn below!"
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         Useful Links:
        </Typography>
        <BottomNavigation width="auto" >
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
        <Copyright />
      </footer>
      {/* End footer */}
        </div>
    )
}

