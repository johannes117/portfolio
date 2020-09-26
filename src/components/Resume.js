import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Johannes du Plessis
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#183446"
    }, 
    timeLine: {
        position: "relative", 
        padding: "1rem", 
        margin: "0 auto", 
        "&:before": {
            content: "''",
            position: "absolute", 
            height: "100%", 
            border: "1px solid white", 
            right: "40px", 
            top: 0
        }, 
        "&:after": {
            content: "''",
            display: "table", 
            clear: "both"
        }, 
        [theme.breakpoints.up("sm")]:{
            padding: "2rem", 
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    }, 
    timeLineItem:{
        padding: "1rem", 
        borderBottom: "2px solid white",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:before": {
            content: "' '", 
            position: "absolute", 
            right: "-0.625rem", 
            top: "calc(50% - 5px)", 
            borderStyle: "solid", 
            borderColor: "#38aecc #38aecc transparent transparent", 
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        }, 
        "&:after": {
            content: "''", 
            position: "absolute"     
         },
        [theme.breakpoints.up("sm")]: {
            width: "44%",
            margin: "1rem",
            "&:ntn-of-type(2n):": {
                float: "right",
                margin: "1rem", 
                borderColor: "tan"
            }, 
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem", 
                borderColor: "transparent transparent #38aecc #38aecc"
            }
        }
    }, 
    timeLineYear:{
        textAlign: "center", 
        maxWidth: "9.375rem", 
        margin: "0 3rem 0 auto", 
        fontSize: "1.8rem",
        background: "#38aecc", 
        color: "white", 
        lineHeight: 1,
        padding: "0.5rem 0 1rem", 
        "&:before": {
            display: "none"
        }, 
        [theme.breakpoints.up("sm")]: {
            textAlign: "center", 
            margin: "0 auto", 
            "&:nth-of-type(2n)":{
                float: "none", 
                margin: "0 auto"
            }, 
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    }, 
    heading: {
      color: "white", 
      padding: "3rem 0",
      textTransform: "uppercase"  
    }, 
    subHeading:{
        color: "white",
        padding: "0",
        textTransform: "uppercase", 

    }, 
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        background: "#222",
        maxWidth: '100%'
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
}))

const ColorButton = withStyles((theme) => ({
    root: {
      color: "white",
      backgroundColor: "#183446",
      '&:hover': {
        color: "#183446",
        backgroundColor: "#38aecc",
      },
    },
  }))(Button);

  const ColorButton2 = withStyles((theme) => ({
    root: {
      color: "#183446",
      
      '&:hover': {
        color: "#38aecc",
        backgroundColor: "#222",
        
      },
    },
  }))(Button);

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Resume
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <ColorButton variant="contained" color="primary">
                    Main call to action
                  </ColorButton>
                </Grid>
                <Grid item>
                  <ColorButton2 variant="outlined" color="primary">
                    Secondary action
                  </ColorButton2>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
        <Box component= "header" className={classes.mainContainer}>

            <Typography variant="h4" align="center" className={classes.heading}>
                Work Experience
            </Typography>

            <Box  className={classes.timeLine}>

            <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2019-2020
                </Typography>
                
                <Box className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        DJ
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        Mooseheads
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>
               
                <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2017-2020
                </Typography>
                
                <Box  className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Lifeguard 
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        Club Lime 
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>


                <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2017
                </Typography>
                
                <Box  className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Delivery Driver
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        Dominos
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>

                <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2014-2016
                </Typography>
                
                <Box  className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Lifeguard
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        YMCA
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>

                <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2012-2016
                </Typography>
                
                <Box  className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Mobile Phone Repairer
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        Self Employed
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>

                <Typography variant="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                        2012-2016
                </Typography>
                
                <Box  className={classes.timeLineItem}>
                   
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Crew Member
                    </Typography>
                   
                    <Typography variant="body1" align="center" style={{color: "#38aecc"}}>
                        McDonald's
                    </Typography>
                   
                    <Typography variant="subtitle1" align="center" style={{color: "#183446"}}>
                        lorem20
                    </Typography>
               
                </Box>

               

                

            </Box>

            

        </Box>
        {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
        </>
    )
}

export default Resume
