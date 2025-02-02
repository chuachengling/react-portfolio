import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from "../avatar.png"
import Typed from "react-typed"

// CSS STYLES

const useStyles = makeStyles(theme => ({
avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    
},
title: {
    color: "#C5C6C7"
},
subtitle: {
    color: "#66fcf1",
    marginBottom: "3rem"
},
typedContainer: ({
    position: "absolute",
    top:"50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex:1
}
)

}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className = {classes.typedContainer}>
            <Grid container justify = "center">
            <Avatar className = {classes.avatar} src = {avatar} alt = "Cheng Ling"/>
            </Grid>
        <Typography className = {classes.title} variant = "h4">
            <Typed strings = {["Chua Cheng Ling"]} typeSpeed = {40}/>
        </Typography>
        <br/>
        <Typography className = {classes.subtitle} variant = "h4">
            <Typed strings = {["Machine Learning", 
            "Data Science",
            "Data Visualisation", 
            "Web Development"
            ,"Natural Language Processing"]} 
            typeSpeed = {40}
            backSpeed = {60}
            loop/>
        </Typography>
        </Box>
    )
}

export default Header
