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
import Slider from "react-slick";
import AnimatedNumber from "animated-number-react";


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
        // border:'1px solid red',
        width: '40%',
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: '#ffc0cb'

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
    aboutHeading: {
        // border:'1px solid green',
        // fontSize:'35px'
    },
    aboutContent: {
        fontSize: '16px'
    },
    galleryHeading: {
        fontSize: '45px',
        textAlign: 'center',
        color: '#808080'
    },
    events: {
        padding: '25px',
        display: 'flex',
    },
    eventsCalender: {
        width: '30%',
        marginRight: '30px'
    },
    sociallinks: {
        paddingTop: '15px',
        width: '65%',
        display: 'flex',
        justifyContent: 'space-around',
        color: 'orange',
    },
    allEvents: {
        width: '70%',
        marginLeft: '50px'
    },
    counter: {
        width: '85%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '60px',
        paddingBottom: '30px',
        color: '#808080'
    },
    clients: {
        textAlign: 'center',
        fontSize: '28px'
    },
    countericons: {
        fontSize: '50px',
        color: '#07358a'
    },
    record: {
        fontSize: '45px',
        fontWeight: '600'
    }


}));

const Index = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [state, setState] = React.useState([
        { imgUrl: './images/testmonialsimg1.webp' },
        // { imgUrl: './images/testmonialsimg4.webp' },
        // { imgUrl: './images/testmonialsimg3.webp' },
        // { imgUrl: './images/testmonialsimg2.webp' },
        // { imgUrl: './images/testmonialsimg5.webp' },
        // { imgUrl: './images/testmonialsimg5.webp' },
        // { imgUrl: './images/testmonialsimg6.webp' }

    ]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    const [count, setCount] = React.useState({
        clients: 150,
        placements: 2000,
        events: 200,
    });
    const formatValue = (value) => `${Number(value).toFixed(0)} `;


    return (
        <>
            <Head>
                <title>testimonials - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                               {/* <div className={classes.allBlocks} /> */}
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="testimonials" data2="" Color={true} />
                        </Container>
                    </div>
                    <div className={classes.horizontalTabsRoot}>
                        {/* <HorizontalCutomTabs data={data} shadowProp={true} /> */}
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    testimonials
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
                        <div className={classes.verticalTabsRoot} style={{ marginTop: '30px' }}>
                            <h2 className={classes.aboutHeading}>About KBN</h2>
                            <p className={classes.aboutContent}>Kakaraparti Bhavanarayana College (Autonomous) is an exuberant outcome of a century old illustrious charitable organization, S.K.P.V.V. Hindu High Schools Society.</p>
                        </div>
                        <h2 className={classes.galleryHeading}>Gallery</h2>
                        <Slider {...settings} >
                            {state.map((data, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className={classes.events}>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                                                    <img src={'/images/testmonialsimg1.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%' }}>
                                                    <img src={'/images/testmonialsimg4.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%' }}>
                                                    <img src={'/images/testmonialsimg3.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%' }}>
                                                    <img src={'/images/testmonialsimg2.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%' }}>
                                                    <img src={'/images/testmonialsimg5.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className={classes.eventsCalender}>
                                                <div style={{ height: '100%', width: '100%' }}>
                                                    <img src={'/images/testmonialsimg6.webp'} alt="placements" style={{ height: '100%', width: '100%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        <h2 className={classes.galleryHeading} style={{ margin: '0', paddingTop: '30px', color: '#808080' }}>About KBN</h2>
                        <h3 style={{ fontSize: '30px', textAlign: 'center', margin: '0', color: '#808080' }}>A Place for</h3>
                        <div className={classes.counter}>
                            <div className={classes.clients}>
                                <div style={{ paddingLeft: "10px" }}>
                                    <AnimatedNumber
                                        className={classes.record}
                                        value={300}
                                        formatValue={formatValue}
                                        duration={5500}
                                    />
                                </div>
                                <p>opened in</p>
                            </div>
                            <div className={classes.clients}>
                                <div style={{ paddingLeft: "10px" }}>
                                    <AnimatedNumber
                                        className={classes.record}
                                        value={1700}
                                        formatValue={formatValue}
                                        duration={5500}
                                    />
                                </div>
                                <p>students</p>
                            </div>
                            <div className={classes.clients}>
                                <div style={{ paddingLeft: "15px" }}>
                                    <AnimatedNumber
                                        className={classes.record}
                                        value={11900}
                                        formatValue={formatValue}
                                        duration={5500}
                                    />
                                </div>
                                <p>faculty</p>
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