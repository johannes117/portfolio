import React from 'react'
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"



const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute", 
        opacity: "0.3",
        color: "#2196F3"
    }
})
const Home = () => {

    const classes = useStyles()

    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value: 45, 
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    }, 
                    shape:{
                        type: "triangle", 
                        stoke: {
                            width: 1,
                            color: "#2196F3"
                        }
                    }, 
                    size: {
                        value: 8, 
                        random: true, 
                        anim: {
                            enable: true, 
                            speed: 6, 
                            size_min: 0.1,
                            sync: true
                        }
                    }, 
                    opacity: {
                        value: 1,
                        random: true, 
                        anim: {
                            enable: true,
                            speed: 1, 
                            opacity_min: 0.1, 
                            sync: true
                        }   
                    }
                }
            }}
            />
            
        </div>
       
    )
}

export default Home
