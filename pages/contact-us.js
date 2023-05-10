import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../components/Header/MainNavigation';
import HeadingComponent from '../components/Headings/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import Footer from '../components/Footer/animatedfooter';
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

const Index = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Head>
                <title>Contact us - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                               {/* <div className={classes.allBlocks} /> */}
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="Contact" data2=" Us" Color={true} />
                        </Container>
                    </div>
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

                        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                            <h3>KAKARAPARTI BHAVANARAYANA COLLEGE(Autonomous)</h3>
                            <p>(Sponsored by S.K.P.V.V.Hindu High Schools Committee)</p>
                            <p>(Affiliated to Krishna University, Machilipatnam)</p>
                            <p>Kothapeta, Vijayawada-520 001.</p>
                            <p>Krishna District, Andhra Pradesh, India.</p>
                            <p>Mail us at: info@kbncollege.ac.in, info@kbncollege.info</p>
                            <p>Phone Numbers:0866-2565679,6699233,6699236</p>
                            <p>Website:<a href="https://www.kbncollege.in/">www.kbncollege.ac.in</a></p>
                        </div>
                        
                        <div style={{ margin: '2rem 0' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30601.38139681217!2d80.60864547428345!3d16.517377970735147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efe80f485e89%3A0xc4a9af67137f1727!2sKAKARAPARTI%20BHAVANARAYANA%20(KBN)%20COLLEGE!5e0!3m2!1sen!2sin!4v1649301141954!5m2!1sen!2sin"
                                width="100%" height="450"
                                frameborder="0" style={{ border: 0 }} allowfullscreen=""
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </Container>

                </div>

            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Index;