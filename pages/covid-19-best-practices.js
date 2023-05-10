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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
        display: 'block',
        padding: '2rem 0',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
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
    covidMain: {
        // fontSize:'35px',
        margin: '0px',
        color: '#CC00CC'
    },
    covidContentMain: {
        display: 'flex',
        paddingTop: '12px'
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    covidContent: {
        fontSize: '16px',
        margin: '0px',
        color: '#4c81b7'
    },
    videoContent: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const Index = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Head>
                <title>covid-19-best-practices - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                               {/* <div className={classes.allBlocks} /> */}
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="covid-19" data2="best practices" Color={true} />
                        </Container>
                    </div>
                    <div className={classes.horizontalTabsRoot}>
                        {/* <HorizontalCutomTabs data={data} shadowProp={true} /> */}
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    covid-19-best-practices
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">mobile</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <Container>
                        <div className={classes.verticalTabsRoot}>
                            <h2 className={classes.covidMain}>COVID-19 BESTPRACTICES</h2>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>COVID-19 BOOKLET-Precautions to be taken</a>
                            </div>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>e-Content</a>
                            </div>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>e-Resources</a>
                            </div>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>KBN Pathashala</a>
                            </div>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>NSS Volunteer Service in Vegetable Distribution and Distributed Vegetables to Non Teaching Staff</a>
                            </div>
                            <div className={classes.covidContentMain}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="#" className={classes.covidContent}>Clothes Distribution to Non Teching Staff</a>
                            </div>
                            <div className={classes.videoContent}>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/hxfZ5g57Oxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/apjmXBovD5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className={classes.videoContent}>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/CrfG2gJ3P3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/rxTiBAAQUwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className={classes.videoContent}>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/fjCVt-8enAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="600" height="315" src="https://www.youtube.com/embed/NOYnB18rIq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
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