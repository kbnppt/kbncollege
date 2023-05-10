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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Image from 'next/image';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

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
    examinationMain: {
        // border:'1px solid red',
        // display:'flex',
        // justifyContent:'space-around',
        // backgroundColor: '#c0f0f8',
        padding: '15px 0px'
    },
    cardOne: {
        // border:'1px solid yellow',
        width: '57%',
        borderRadius: '0px',
        padding: '35px 20px'
    },
    cardTwo: {
        // border:'1px solid orange',
        width: '40%',
        borderRadius: '0px',
    },
    examiHeading: {
        // fontSize:'40px',
        margin: '0px',
        paddingBottom: '15px'
    },
    examinationContent: {
        display: 'flex',
        paddingTop: '12px'
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
        // fontSize:'16px',
        margin: '0px',
        // fontWeight:'bold'
    },
    announcementHeading: {
        // fontSize:'40px',
        margin: '0px',
        paddingBottom: '15px',
        padding: '40px 20px',
    },
    examBoard: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    examBoardMain: {
        backgroundColor: '#109ba9',
        width: '30%',
        minHeight: 350,
        textAlign: 'center',
        padding: '35px 0px'
    },
    examBoardContent: {
        borderRadius: '50%',
        width: '80%',
        border: '3px solid white',
    },
    examBoardCard: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '30px 0px'
    },
    custmarque: {
        paddingLeft: '20px',
        // fontSize:'16px',
        paddingBottom: '300px',
        color: 'blue'
    }
}));

const ExaminationCell = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Container>

            <div className={classes.horizontalTabsRoot}>
                {/* <HorizontalCutomTabs data={data} shadowProp={true} /> */}
                <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            examination-cell
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

            <div className={classes.examinationMain}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card className={classes.cardOne} elevation="5">
                        <h2 className={classes.examiHeading}>OBJECTIVES OF AUTONOMY:</h2>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>To Offer Various Modified Courses.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Top Rovide Opportunities For Employment</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>To Enjoy Freedom In Taking Prompt And Accurate Decisions.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>To Reshape The Curriculum According To The Changing Needs Of The Society.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>To Promote Scientific Approach And Research Orientation Among The Staff And Also The Students.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>To Promote Creativity And Responsible Thought And Action For Successful Implementation Of Autonomy.</p>
                        </div>
                        <h2 className={classes.examiHeading} style={{ paddingTop: '30px' }}>ADVANTAGES OF AUTONOMY</h2>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Conduct Tests And Examinations As Per Schedule.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Determine And Prescribe Its Own Courses Of Study And Syllabi.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Establish Language Lab , Develop Speaking, Reading And Writing Skills Of The Students.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Prescribe Rules For Admission In Consonance With The Reservation Policy Of The State Government.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Evolve Methods Of Assessment Of Student Work, The Conduct Of Examinations And Notification Of Results.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>The Year Is Divided Into Two Semesters. The Performance Of Each Student Is Keenly Observed And The Student Is Assessed Throughout The Year.</p>
                        </div>
                        <div className={classes.examinationContent}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                            <p className={classes.arrowwithContent}>Continuous Assessment Through Tests, Assignments, Seminars, Field Work Besides The Examination Helps The Students Develop Self-Confidence, Better Study Habits And Research Skills.</p>
                        </div>
                    </Card>
                    <div className={classes.cardTwo}>
                        <Card elevation="5" style={{ borderRadius: '0px' }}>
                            <h2 className={classes.announcementHeading}>ANNOUNCEMENTS</h2>
                            <marquee width="70%" direction="up" height="100px" className={classes.custmarque}>
                                <p>UG III SEMESTER END EXAMINATION TIME TABLE</p>
                                <p>UG V SEMESTER END EXAMINATION TIME TABLE</p>
                                <p>PG III & V SEMESTER END EXAMINATION TIME TABLE</p>
                            </marquee>
                            {/* <marquee width="70%" direction="up" height="100px" className={classes.custmarque}>
                UG V SEMESTER END EXAMINATION TIME TABLE
                </marquee>    
                <marquee width="70%" direction="up" height="100px" className={classes.custmarque}>
                PG III & V SEMESTER END EXAMINATION TIME TABLE
                </marquee>   */}
                        </Card>
                        <Card elevation="5" style={{ marginTop: '10px', borderRadius: '0px' }}>
                            <p style={{
                                padding: '20px 20px',
                                // fontSize:'16px',
                                paddingBottom: '300px'
                            }}>EXAMINATIONS & RESULTS</p>
                        </Card>
                    </div>
                </div>
                <div>
                    <p className={classes.examBoard}>CONTROLLERS OF EXAMINATION BOARD KBN</p>
                    <Container className={classes.examBoardCard}>
                        <Card className={classes.examBoardMain}>
                            <CardActionArea style={{ marginLeft: '25px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image="/images/addcoe2.jpg"
                                    title="Contemplative Reptile"
                                    className={classes.examBoardContent}
                                />
                            </CardActionArea>
                            <h2 style={{ color: 'white' }}>B.V.MANOHARBABU</h2>
                            <h3 style={{ padding: '15px 0', color: 'white' }}>ADDITIONAL COE</h3>
                        </Card>
                        <Card className={classes.examBoardMain}>
                            <CardActionArea style={{ marginLeft: '25px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image="/images/addcoe (2).jpg"
                                    title="Contemplative Reptile"
                                    className={classes.examBoardContent}
                                />
                            </CardActionArea>
                            <h2 style={{ color: 'white' }}>B.V.MANOHARBABU</h2>
                            <h3 style={{ padding: '15px 0', color: 'white' }}>ADDITIONAL COE</h3>
                        </Card>
                        <Card className={classes.examBoardMain}>
                            <CardActionArea style={{ marginLeft: '25px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image="/images/addcoe1.png"
                                    title="Contemplative Reptile"
                                    className={classes.examBoardContent}
                                />
                            </CardActionArea>
                            <h2 style={{ color: 'white' }}>B.V.MANOHARBABU</h2>
                            <h3 style={{ padding: '15px 0', color: 'white' }}>ADDITIONAL COE</h3>
                        </Card>
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default ExaminationCell