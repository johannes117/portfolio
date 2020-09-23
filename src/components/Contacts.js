import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato", 
        }, 
    }, 
})(TextField);

const Contacts = () => {
    return (
        <Box component ="div">
           <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5" >
                        Hire or Contact me...
                    </Typography>
                    <InputField fullWidth = {true} label = "Name" variant="outlined" />
                    
                    
                </Box>
           </Grid>
        </Box>
    )
}

export default Contacts
