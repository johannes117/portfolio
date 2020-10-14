import React from 'react';
import Navbar from './Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, Box} from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PageFooter from './PageFooter';





const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  maincontainer:{
    background: "#222"
  }, 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  timeLine:{
    position: "relative", 
    padding: "1rem", 
    margin: "0 auto", 
    "&:before": {
      content: "''", 
      position: "absolute", 
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0, 
    }, 
    "&:after":{
      content: "''", 
      display: "table", 
      clear: "both"     
    }, 
    [theme.breakpoints.up("md")]:{
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
    "&:after": {
      content: "''",
      position: "absolute"
    }, 
    "&:before": {
      content: "''",
      position: "absolute", 
      right: "-0.625rem", 
      top: "calc(50% - 5px)", 
      borderStyle: "solid",
      borderColor: "#38AECC #38AECC transparent transparent", 
      borderWidth: "0.625rem", 
      transform: "rotate(45deg)"
    }, 
    [theme.breakpoints.up("md")]:{
      width: "44%", 
      margin: "1rem", 
      "&:nth-of-type(2n)":{
        float: "right", 
        margin: "1rem",
        borderColor: "white"
      }, 
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #38AECC #38AECC"
      }
    }
  },
  timeLineYear:{
    textAlign: "center", 
    maxWidth: "9.375rem", 
    margin: "0 3rem 0 auto", 
    fontSize: "1.8rem", 
    background: "#183446", 
    color: "white", 
    lineHeight: 1, 
    padding: "0.5rem 0 1rem", 
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
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
    color: "#38AECC",
    padding: "3rem 0", 
    // textTransform: "uppercase"
  }, 
  subHeading:{
    color: "white", 
    padding: "0", 
    textTransform: "uppercase"
  }
}));



const Resume = () => {
  const classes = useStyles();
return (
  <React.Fragment>
    <CssBaseline/>
      <Navbar/>
         {/* Hero unit */}
          <main>
            <div className={classes.heroContent}>
               <Container maxWidth="sm">
                <Typography component="h1" variant="h1" align="center" style={{color: "#38AECC"}} gutterBottom>
                  My Resume
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Here is a timeline of all the jobs I've had so far. Each one has been an integral part of my growth. 
                </Typography>
              </Container>
            </div>
            
             <Box component="header" className={classes.maincontainer}>
               <Typography variant="h4" align="center" className={classes.heading}>
                  Work Experience
               </Typography>
               <Box component="div" className={classes.timeLine}>
                    {/*Start of Item */}
                    <Typography 
                    variant="h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                      2019+
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                      <Typography variant="h5" align="center" className={classes.subHeading}>
                        DJ
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: "#38AECC"}}>
                        Mooseheads Pub and Nightclub
                      </Typography>
                      <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                        Canberra, ACT
                      </Typography>
                    </Box>
                    {/*End of Item */}
                    {/*Start of Item */}
                    <Typography 
                    variant="h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                      2017+
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                      <Typography variant="h5" align="center" className={classes.subHeading}>
                        Lifeguard
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: "#38AECC"}}>
                        Club Lime
                      </Typography>
                      <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                        Canberra, ACT
                      </Typography>
                    </Box>
                    {/*End of Item */}
                    {/*Start of Item */}
                    <Typography 
                    variant="h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                      2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                      <Typography variant="h5" align="center" className={classes.subHeading}>
                        Delivery Driver
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: "#38AECC"}}>
                        Dominos
                      </Typography>
                      <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                        Canberra, ACT
                      </Typography>
                    </Box>
                    {/*End of Item */}
                    {/*Start of Item */}
                    <Typography 
                    variant="h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                      2014-16
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                      <Typography variant="h5" align="center" className={classes.subHeading}>
                        Lifeguard
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: "#38AECC"}}>
                        YMCA
                      </Typography>
                      <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                        Darwin, NT
                      </Typography>
                    </Box>
                    {/*End of Item */}
                    {/*Start of Item */}
                    <Typography 
                    variant="h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                      2012-14
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                      <Typography variant="h5" align="center" className={classes.subHeading}>
                        Crew Member
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: "#38AECC"}}>
                        McDonald's
                      </Typography>
                      <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                        Darwin, NT
                      </Typography>
                    </Box>
                    {/*End of Item */}
               </Box>

               
             </Box>
      
   
            
          </main> 
     
      <PageFooter/>
</React.Fragment>
)
}


export default Resume
