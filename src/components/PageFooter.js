import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
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
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    bottomNavContainer: {
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      width: "auto" 
    },
    buttonnav: {
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
        <div className={classes.root}>
          <CssBaseline/>
          <footer className={classes.footer}>
            <Container component="main" className={classes.main} maxWidth="sm">
              <Typography variant="h6" align="center" gutterBottom>
                 "Check out my Github or LinkedIn below!"
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                  Useful Links:
              </Typography>
              <BottomNavigation className={classes.bottomNavContainer}>
                <BottomNavigationAction
                  className={classes.buttonnav}
                  style={{padding: 0}}
                  icon={<LinkedInIcon/>}
                  component={Link} href={"https://www.linkedin.com/in/johannes117/"} target="_blank"
                />
                <BottomNavigationAction
                  className={classes.buttonnav}
                  style={{padding: 0}}
                  icon={<GitHubIcon/>}
                  component={Link} href={"https://github.com/johannes117/"} target="_blank"
                />
                <BottomNavigationAction
                  className={classes.buttonnav}
                  style={{padding: 0}}
                  icon={<Instagram/>}
                  component={Link} href={"https://www.instagram.com/johannes_duplessis/"} target="_blank"
                />
                </BottomNavigation>
            </Container>
            
              <Container maxWidth="sm">
                <Copyright />
              </Container>
            </footer>
        </div>
    )
}
