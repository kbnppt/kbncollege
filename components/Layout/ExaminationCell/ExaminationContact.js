import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
// import Header from '../components/Header/MainNavigation';
// import HeadingComponent from '../components/Headings/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
// import Footer from '../components/Footer/animatedfooter';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    allBlocks: {
        height: '210px',
        padding: '4rem 0',
        background: '#050e3e',
        [theme.breakpoints.down("sm")]: {
            height: '300px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '370px',
        },
    },
    headerStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 0 1rem 0',
        textAlign: 'center',
        background: '#050e3e',
        color: '#fff',
        textTransform: 'uppercase'
    },
    verticalTabsRoot: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '2rem 0',
        // [theme.breakpoints.down("sm")]: {
        //     display: 'none'
        // },
    },
    horizontalTabsRoot: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    },
    cardRoot: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const ExaminationContact = () => {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Grid container spacing={3} style={{ margin: '1rem 0' }}>
                    <Grid item xs={12} sm={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <h3>WE'D LOVE TO HEAR FROM YOU!</h3>
                            <ul>
                                <li>Get ready for a bright future</li>
                                <li>Explore new programs</li>
                                <li>What are you looking to study?</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} >

                        <Card style={{ padding: '0 2rem', margin: '1rem 0' }}>
                            <div className={classes.verticalTabsRoot}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div style={{ margin: '0.7rem 0' }}>
                                        <TextField id="outlined-basic" label="Full Name" fullWidth variant="outlined" />
                                    </div>
                                    <div style={{ margin: '0.7rem 0' }}>
                                        <TextField id="outlined-basic" label="Email" variant="outlined"
                                            fullWidth
                                        />
                                    </div>
                                    <div style={{ margin: '0.7rem 0' }}>
                                        <TextField id="outlined-basic" label="Phone" variant="outlined"
                                            fullWidth
                                        />
                                    </div>
                                    <div style={{ margin: '0.7rem 0' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="Message"
                                            label="Message"
                                            multiline
                                            rows={2}
                                            maxRows={4}
                                            fullWidth
                                        />
                                    </div>
                                    <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center' }}>
                                        <Button variant='contained' color='primary'> submit</Button>

                                    </div>
                                </form>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ExaminationContact