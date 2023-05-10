import React from 'react'
import { withStyles, Container, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        textAlign:'justify'
    },
    // root: {
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    // },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    table: {
        minWidth: 700,
    },
    tableHead: {
        fontWeight: "bold",
        backgroundColor: "darkblue",

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
        padding:'8px',
        textAlign:'justify',
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
    ariiaReportMain: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '40px'
    },
    ariiaReport: {
        fontSize: '16px',
        padding: '10px 0px'
    }
}));

const ARIIA2020 = () => {
    const classes = useStyles();

    return (
        <>
            <main>
                <div className={classes.root}>

                    <h2>About ARIIA</h2>
                    <h3  style={{color:'#1c9710'}}>Welcome to ARIIA</h3>
                    <Divider />

                    <p>The buzzword across the globe for the 21st century is ‘Innovation’. In the simplest term, Innovation could be defined as converting ideas into new or improved products, processes and services. Undoubtedly, Innovation is about taking inventions to marketplace by translating scientific knowledge into products, services and offerings for economic growth and social development. Even, Hon’ble Prime Minister of India has declared decade 2010-20 as the ‘Decade of Innovation’, to unleash the creative potential of every Indian. India has already been improving on global stage in terms of Innovation ranking from 86th place, 5 years ago, to 57th place this year.</p>
                    <p>For India to emerge as a global innovation hub, the youth of our country, especially in higher education institutions (HEIs) need to play a crucial role to create a sustainable innovation ecosystem. Hence, ideally all HEIs should have a comprehensive and functional mechanism to convert research into innovations. This ecosystem will encourage, inspire and nurture young students by exposing them to new ideas and processes resulting in innovative activities in their formative years.</p>
                    <p>Atal Ranking of Institutions on Innovation Achievements (ARIIA) is an initiative of Ministry of Education (MoE), Govt. of India to systematically rank all major higher educational institutions and universities in India on indicators related to “Innovation and Entrepreneurship Development” amongst students and faculties.</p>
                    <Divider />
                    
                    <div className={classes.horizontalTabsRoot}>
                    <h4 style={{ textDecoration: 'underline' }}>ARIIA 2020-21</h4>
                            <div className={classes.ariiaReportMain}>
                                <a href="https://drive.google.com/file/d/1Pr8jDmFbjcEEe5g54WJRdN5mUPzjI6KX/view?usp=share_link" target={'_blank'} className={classes.ariiaReport}>ARIIA 2020-21 Report</a>
                                <a href="https://drive.google.com/file/d/1MCIg3HVfHuh1xeERqCQvwukOftn1tQm4/view?usp=share_link" target={'_blank'} className={classes.ariiaReport}>ARIIA - BAND PERFORMER CERTIFICATE</a>
                            </div>
                    </div>
                    <Container>
                        <div className={classes.verticalTabsRoot}>
                            <h4 style={{ textDecoration: 'underline' }}>ARIIA 2020-21</h4>
                            <div className={classes.ariiaReportMain}>
                                <a href="https://drive.google.com/file/d/1Pr8jDmFbjcEEe5g54WJRdN5mUPzjI6KX/view?usp=share_link" target={'_blank'} className={classes.ariiaReport}>ARIIA 2020-21 Report</a>
                                <a href="https://drive.google.com/file/d/1MCIg3HVfHuh1xeERqCQvwukOftn1tQm4/view?usp=share_link" target={'_blank'} className={classes.ariiaReport}>ARIIA - BAND PERFORMER CERTIFICATE</a>
                            </div>
                        </div>
                    </Container>

                </div>

            </main>
        </>
    )
}

export default ARIIA2020;