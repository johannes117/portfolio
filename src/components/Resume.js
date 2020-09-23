import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#046e8f"
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
            content: "' '", 
            position: "absolute"     
         },
        [theme.breakpoints.up("md")]: {
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
      color: "white", 
      padding: "3rem 0",
      textTransform: "uppercase"  
    }, 
    subHeading:{
        color: "white",
        padding: "0",
        textTransform: "uppercase", 

    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component= "header" className={classes.mainContainer}>

            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>

            <Box component = "div" className={classes.timeLine}>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019-2020
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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
               
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017-2020
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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


                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2014-2016
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2012-2016
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2012-2016
                </Typography>
                
                <Box component="div" className={classes.timeLineItem}>
                   
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
        </>
    )
}

export default Resume
