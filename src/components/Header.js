import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from "../circle-cropped.png";
import Typed from "react-typed"
import PageFooter from "./PageFooter"

// CSS STYLESs
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1),
    }, 
    title: {
        color: "white",
       
    }, 
    subtitle:{
        color: "white",
        marginBottom: "3rem"
    }, 
    typedContainer:{
        position: "absolute", 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div>
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt= "Johannes du Plessis" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Johannes du Plessis"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                strings={["Web Design", "Web Development", "React", "AWS", "Software Engineering", "Network Engineering"]} 
                typeSpeed={40} 
                backSpeed={60}
                loop
                />
            </Typography>
            
        </Box>
        
        </div>
        
    );
};

export default Header;
