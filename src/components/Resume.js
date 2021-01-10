import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography,Box} from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#141424"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #c5c6c7",
            right: "40px",
            top:0
        },
        "&:after":{
            content: "''",
            display:"table",
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
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #c5c6c7",
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
          borderColor: "#45A29E #45A29E transparent transparent",
          borderWidth: "0.625rem",
          transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
          width: "44%",
          margin: "1rem",
          "&:nth-of-type(2n)": {
            float: "right",
            margin: "1rem",
            borderColor: "#c5c6c7"
          },
          "&:nth-of-type(2n):before": {
            right: "auto",
            left: "-0.625rem",
            borderColor: "transparent transparent #45A29E #45A29E"
          }
        }
      },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#1F2833",
        color: "#66FCF1",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
          display: "none"
        },
        [theme.breakpoints.up("md")]: {
          textAlign: "center",
          margin: "0 auto",
          "&:nth-of-type(2n)": {
            float: "none",
            margin: "0 auto"
          },
          "&:nth-of-type(2n):before": {
            display: "none"
          }
        }
      },
    heading: {
        color: "#45A29E",
        padding:"3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "#66FCF1",
        padding: "0",
        textTransform:"uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles()

    return (
        <>
        <Navbar />
        <Box component = "header" className={classes.mainContainer}> 
        <Typography variant = "h4" align = "center" className={classes.heading}>
            Working Experience
        </Typography>
        <Box component = "div" className={classes.timeLine}>
            <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2021
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}
            >
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    Junior Data Scientist Intern
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    BondIT Global
                </Typography>
                <Typography variant = "subtitle1" align="left" style = {{color:"#c5c6c7"}}>
                    <li>BondIT Global is a Fixed Income Asset Portfolio Management Company, utilising data for portfolio construction</li>
                    <br/>
                    <li>I was in charge of leading a project to analyse Chinese News data and create a Natural Language Processing model to analyse market sentiment.</li>
                    <br/>
                    <li>I was also involved in their Quantitative Research Branch dealing with credit analysis of bonds.</li>
                </Typography>
        </Box>
        </Box>


        <Typography variant = "h4" align = "center" className={classes.heading}>
            Project and Competition Experience
        </Typography>
        <Box component = "div" className={classes.timeLine}>
            <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    Fake News Detection Classifier
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore CS3244
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                <li>My first machine learning project was a fake news classifier for a module.</li>
                <br/>
                <li>We were able to obtain relatively good results using CNN, RNN and Transformers for classification.</li>
                </Typography>
        </Box>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    Data Science in Practice
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore DSA3101
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                <li>Worked on a dataset provided by Kantar (A data insights company) to create useful models and insights for FMCG data</li>    
                <br/>
                <li>Methods employed included RFM modelling, Customer Churn Prediction, Logistics Forecasting and Market Basket Analysis</li>   
                </Typography>
        </Box>
        <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2019
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    ReadBook
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore Summer Web Programming Project
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                <li>My partner and I were able to attain the Apollo (Adavanced) Category for this web development project.</li>
                <br/>
                <li>We created a web application for students to use to find study locations on campus, as well as information about these locations.</li>
                </Typography>
        </Box>
        </Box>

        <Typography variant = "h4" align = "center" className={classes.heading}>
            School Contributions and Leadership Experience
        </Typography>
        <Box component = "div" className={classes.timeLine}>
            <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    Director of Research
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore Students' Union
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                <li>The Director of Research is a new position in the NUS Students' Union that was speaheaded by me.</li>
                <br/>
                <li>The primary tasks of the position was to conduct quantitative research and data analysis on data collected by the Union</li>
                <br/>
                <li>One of the projects of Academic Year 20/21 was to analyse student sentiments from NUSWhispers, an anonymous forum platform for students' posts.</li>
                <br/>
                <li>I also conducted a longditudinal study on essential student metrics during the semester.</li>
                </Typography>
            </Box>

            <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2019
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    Vice President (Strategic Planning and Relations)
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore Students' Union
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                <li>The NUS Students' Union is the largest student run group in NUS</li>
                <br/>
                <li>As the Vice President (Strategic Planning and Relations), I oversaw the external relations cell and was in charge of our Union's Strategic Partners</li>
                <br/>
                <li>I was also involved in the COVID-19 task force, responsible for managing the pandemic when the first cases occured in Singapore.</li>
                </Typography>
            </Box>

        <Typography variant = "h2" className = {`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2018
            </Typography>
            <Box 
            component = "div" 
            className={classes.timeLineItem}>
                <Typography variant = "h5" align="center" className={classes.subHeading}>
                    President
                </Typography>
                <Typography variant = "body1" align="center" style = {{color:"#45A29E"}}>
                    National University of Singapore Students' Science Club
                </Typography>
                <Typography variant = "subtitle1" align = "left" style = {{color:"#c5c6c7"}}>
                    <li>The NUS Students' Science Club is the largest student run group in the Faculty of Science with over 5,000 members</li>
                    <br/>
                    <li>As the 39th Management Committee President, my goals was to connect the club with more external organisations and expose Science Faculty Students to a wider array of industries.</li>
                    <br/>
                    <li>For my contributions to Student Life in the Faculty of Science, I was awarded distinction in the 2nd Student Life Awards.</li>
                </Typography>
            </Box>
        </Box>

        </Box>

        </>
    )
}

export default Resume
