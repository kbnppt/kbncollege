import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
// import Header from '../components/Header/MainNavigation';
// import HeadingComponent from '../components/Headings/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Head from 'next/head';
// import Footer from '../components/Footer/animatedfooter';
import Image from 'next/image';

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
}));

const KosaIndex = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <main>
                <div className={classes.root}>
                    <div className={classes.horizontalTabsRoot}>
                        {/* <HorizontalCutomTabs data={data} shadowProp={true} /> */}
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Kosa
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
                            <Image src={'/images/kosa.png'} alt="" width={1600} height={800} />
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default KosaIndex