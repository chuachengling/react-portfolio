import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    // eslint-disable-next-line
    Divider,
    // eslint-disable-next-line
    List,
    // eslint-disable-next-line
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    ArrowBack,
    // eslint-disable-next-line
    AssignmentInd,
    // eslint-disable-next-line
    Home,
    // eslint-disable-next-line
    Apps,
    // eslint-disable-next-line
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from "react-router-dom"

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#0B0C10",
        height: "100%"
    },
    avatar: {
        display: "black",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color:"#66fcf1"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText:"Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText:"Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText:"Portfolio",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail />,
        listText:"Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const classes = useStyles()
    const [state,setState] = useState({
        right: false
    })

    const toggleSlider = (slider,open) => () => {
        setState({...state,[slider]: open});
    }

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component = "div"
        onClick={toggleSlider(slider,false)}
        >
            <Avatar className = {classes.avatar} src = {avatar} alt = "Cheng Ling"></Avatar>
            <Divider />
            <List>
                {menuItems.map((lsItem,key) => (

                    <ListItem button key={key} component = {Link} to = {lsItem.listPath}>
                    <ListItemIcon className = {classes.listItem}> {lsItem.listIcon}</ListItemIcon>
                    <ListItemText className = {classes.listItem} primary={lsItem.listText} />
                </ListItem>
                ))}
                <ListItem>
                    <ListItemIcon>

                    </ListItemIcon>
                </ListItem>
            </List>

        </Box>
    )
    return (
        <>
        
        <Box component = "nav">
            <AppBar position = "static" style = {{background: "#0B0C10"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>                 
                        <ArrowBack style = {{color: "#66fcf1"}}/>
                    </IconButton>
                    <Typography variant = "h5" style = {{color: "#66fcf1"}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider
                    anchor = "left"
                    open = {state.right}
                    onClose = {toggleSlider("right",false)}
                    >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;
