import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '../../public/images/01-ENG Emblem.png';
// import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styles from './header.module.css';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

import logomain from '../../public/images/Established.png';
// import kbnheaderlogo from '../../public/images/KBNHeader.jpg';
// import { FaAngleRight } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import { FaAngleRight } from "react-icons/fa";
// import Row from '@material-ui/core/Row';
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    search: {
        display: "flex",
        flexDirection: 'row',
        marginLeft: 0,
        marginTop: "2px",
        width: "18%",
        color: "blue",
        height: "60%",
        backgroundColor: "whitesmoke",
        borderRadius: 10
    },
    searchIcon: {
        paddingTop: "5px",
        height: '100%',
        pointerEvents: 'none',
    },
    headerKbn: {
        display: "flex",
        width: "75%",
        marginLeft: "auto",
        // border: "1px solid #000",
        // paddingLeft: "150px",
        [theme.breakpoints.down("md")]: {
            width: '100%',
        },
    },
    headerKbnText: {
        // marginLeft: '150px',
        padding: '0.5rem 0',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            margin: 0,
            textAlign: 'center'
        },
        // width: "60%",
        // border: "1px solid blue"
    },
    headerKbnImg: {
        // width: "40%",
        display: "flex",
        margin: 'auto',
        height: '90px',
        // margin-top: auto;
        // margin-bottom: auto,
        // [theme.breakpoints.down("xl")]: {
        padding: '0.8rem 8px',
        // },
        // [theme.breakpoints.down("lg")]: {
        //     padding: '1.5rem 8px'
        // },
        [theme.breakpoints.down("sm")]: {
            display: 'none',
            padding: '1.5rem 8px'
        },
        // border: "1px solid red"
    },
    // mainIMGS: {
    //     display: 'block',
    //     marginLeft: 'auto',
    //     height: '100px', width: '130px',
    //     [theme.breakpoints.down("sm")]: {
    //         display: 'none'
    //     },
    // },
    headerKbnImgMobile: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '80px', width: '100%',
        },
    },
    headerh4: {
        color: "#07358a",
        fontWeight: "bold",
        fontSize: 28,
        paddingTop: 15,
        margin: 0,
        textAlign: "center",
        justifyContent: "center"
    },
    headerh6: {
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 5,
        margin: 0,
        textAlign: "center",
        justifyContent: "center"
    },
    root: {
        position: "fixed",
        bottom: theme.spacing(10),
        right: theme.spacing(2),
    }
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();

    return (
        <Slide in={!trigger}>
            {children}
        </Slide>
    );
}

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};



// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

const Header = (props) => {

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 250) {
            setScrolled(true);
            // console.log(offset)
        } else {
            setScrolled(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const navStrip1 = [
        { title: 'Home', link: '/' },
        { title: 'About Us', link: '/about' },
        { title: 'Administration', link: '/administration' },
        { title: 'Academics', link: '/academics' },
        { title: 'IQAC', link: '/iqac' },
        { title: 'NIRF', link: '/nirf' },
        { title: 'ARIIA', link: '/ariia' },
        { title: 'Placements', link: '/placements' },
        { title: 'Contact Us', link: '/contact-us' },
    ];

    const navStrip2 = [
        { title: 'Kosa', link: '/kosa' },
        { title: 'Examination Cell', link: '/examination-cell' },
        { title: 'Testimonials', link: '/testimonials' },
        { title: 'Student Services', link: '/student-services' },
        { title: 'Covid-19 Best Practices', link: '/covid-19-best-practices' },
        { title: 'Faq', link: '/faqs' }
    ]

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Image src={logomain} alt="brand name" width={250} height={112} />

            <List >
                {navStrip1.map((text, index) => (
                    <ListItem button key={text} onClick={() => window.open(`${text.link}`, '_blank')}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text.title} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {navStrip2.map((text, index) => (
                    <ListItem button key={text} onClick={() => window.open(`${text.link}`, '_blank')}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <div style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    backgroundColor: "white",
                    boxShadow: ' 0 3px 14px rgba(0, 0, 0, 0.2196078431372549) !important',
                    zIndex: '999999',
                }}>
                    <div className={classes.headerKbn} style={{ display: scrolled ? 'none' : 'flex' }}>
                        <div className={classes.headerKbnText}>
                            <h4 className={classes.headerh4}>Kakaraparti Bhavanarayana College (Autonomous)</h4>
                            <h6 className={classes.headerh6}>Sponsored by: S.K.P.V.V Hindu High Schools Committee</h6>
                        </div>
                        <div className={classes.headerKbnImg}>
                            {/* <img src={'svgs/NAAC.svg'} alt='Naac_kbn' width={200} height={110} className={classes.mainIMGS} /> */}
                            {/* <img src={ISOIMG} alt='iso_kbn' width={200} height={110} className={classes.mainIMGS} /> */}
                            <Image src={'/images/grad_img.PNG'} alt="grads_kbn" width={110} height={80} />
                            <Image src={'/images/iso_img.PNG'} alt="iso_kbn" width={75} height={80} />
                            <span style={{ padding: '5px' }} />
                            <Image src={'/svgs/nirf.png'} alt="grads_kbn" width={95} height={80} />
                            <Image src={'/svgs/ugc_cpe.png'} alt="iso_kbn" width={75} height={80} />
                            {/* <img src={'images/iso.jpg'} alt='aaa' className={classes.mainIMGS}/>
                        <img src={'images/isocompany.jpg'} alt='aaa' className={classes.mainIMGS} /> */}
                        </div>
                    </div>
                    <div className={classes.headerKbnImgMobile}>
                        <Image src={'/images/grad_img.PNG'} alt="grads_kbn" width={120} height={40} />
                        <Image src={'/images/iso_img.PNG'} alt="iso_kbn" width={80} height={40} />
                        <Image src={'/svgs/nirf.png'} alt="grads_kbn" width={95} height={80} />
                        <Image src={'/svgs/ugc_cpe.png'} alt="iso_kbn" width={75} height={80} />
                    </div>

                    <div>
                        <div className={styles.header} >
                            <div className={styles.logo} style={{ border: '1px solid red', margin: '1px' }} >
                                <Image src={logomain} alt="brand name" width={200} height={110} />
                                {/* <Image src={logomain} alt="brand name" width={200} height={110} /> */}
                                {/* <div className={styles.logoTxt}>
                                <p style={{ letterSpacing: '8px' }}>KBN</p>
                                <p>college</p>
                                <span>established 1965</span>
                            </div> */}

                            </div>
                            <div className={styles.navbarMain}>
                                <div className={styles.admissionbtn}>
                                    <Button variant='contained'>
                                        2022 Admissions apply now
                                    </Button>
                                </div>
                                <ul className={styles.navbar}>
                                    <li className={styles.dropdown}>
                                        <Link href='/kosa' className={styles.navbarHome} >kosa</Link>
                                    </li>
                                    <li className={styles.dropdown}>
                                        <Link href='/examination-cell' className={styles.navbarHome} >examination cell</Link>
                                    </li>
                                    <li className={styles.dropdown}>
                                        <Link href='/testimonials' className={styles.dropbtn}>Testimonials</Link>
                                    </li>
                                    <li className={styles.dropdown}>
                                        <Link href='/student-services' className={styles.dropbtn} >Student services</Link>
                                        <div className={styles.dropdowncontent}>
                                            <a href='/student-services/#online-services' className={styles.onlineSTxtStyle} >online services</a>
                                            <a href='/student-services/#UNNT-BHARAT-ABHIYAN-2.0'>UNNT BHARAT ABHIYAN 2.0</a>
                                            <a href="/student-services/#UGC-Women's-Studies-Center">UGC Women's Studies Center</a>

                                            <a href='/student-services/#Red-Ribbon-Club'>Red Ribbon Club</a>
                                            <a href='/student-services/#Consumer-Club'>Consumer Club</a>
                                            <a href='/student-services/#NCC'>NCC</a>
                                            <a href='/student-services/#NSS'>NSS</a>
                                            <a href='/student-services/#Dramatic-Association'>Dramatic Association</a>
                                            <a href='/student-services/#Eco-Club'>Eco Club</a>
                                        </div>
                                    </li>
                                    <li className={styles.dropdowncovid}>
                                        <Link href='/covid-19-best-practices' className={styles.navbarHome}>covid-19 best practices</Link>
                                    </li>
                                    <li className={styles.dropdown}>
                                        <Link href='/faqs' className={styles.dropbtn}>FAQ</Link>
                                    </li>
                                    <div className={classes.search}>

                                        <div>
                                            <InputBase
                                                placeholder="Search…"
                                                style={{ color: "blue", marginLeft: "10px", width: "90%" }}
                                                inputProps={{ 'aria-label': 'search' }}
                                                onChange={(e) => console.log(e.target.value, '__test')}
                                            />
                                        </div>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                    </div>
                                </ul>
                                <div className={styles.navbarlist}>
                                    <div className={styles.home}>
                                        <div className={styles.homemain}>
                                            <Link href='/'>Home</Link>
                                            <div className={styles.homehoverline} ></div>
                                        </div>
                                    </div>
                                    <div className={styles.services}>
                                        <div className={styles.servicesmain}>
                                            <Link href='/about'>About kbn</Link>
                                            <div className={styles.hoverline} ></div>
                                        </div>
                                        <div className={styles.megamenu}>
                                            <Grid item xs={8} className={styles.megagrid}>
                                                <div className={styles.row}>
                                                    <div className={styles.servicesLinks}>
                                                        <h3>About Us</h3>
                                                        <a href="/about/#History-of-the-College">History of the College</a>
                                                        <a href="/about/#Vision-&-Mission">Vision & Mission</a>
                                                        <div className={styles.campusatglance}>
                                                            <div style={{ display: 'flex', position: 'relative' }}>
                                                                <a href="/about/#Campus-at-a-Glance" className={styles.campusheading}>Campus at a Glance</a>
                                                                <div className={styles.campusicon}>
                                                                    <FaAngleRight />
                                                                </div>
                                                            </div>

                                                            <div className={styles.campusatglanceLinks}>
                                                                <a href="/about/#Campus-at-a-Glance#Digital-Library">Digital Library</a>
                                                                <a href="/about/#Campus-at-a-Glance#Campus-at-a-Glance#Museums">Museums</a>
                                                                <a href="/about/#Campus-at-a-Glance#Indoor-Sports">Indoor Sports</a>
                                                                <a href="/about/#Campus-at-a-Glance#Outdoor-Sports">Outdoor Sports</a>
                                                                <a href="/about/#Campus-at-a-Glance#Infrastructure">Infrastructure</a>
                                                                <a href="/about/#Campus-at-a-Glance#Bank">Bank</a>
                                                                <a href="/about/#Campus-at-a-Glance#Canteen">Canteen</a>
                                                                <a href="/about/#Campus-at-a-Glance#Divyangian">Divyangian</a>
                                                                <a href="/about/#Campus-at-a-Glance#ICT-Facilities">ICT-Facilities</a>
                                                                <a href="/about/#Campus-at-a-Glance#Utility-Store">Utility Store</a>
                                                                <a href="/about/#Campus-at-a-Glance#Language-Lab">Language Lab</a>
                                                                <a href="/about/#Campus-at-a-Glance#Homeo-Clinic">Homeo Clinic</a>
                                                                <a href="/about/#Campus-at-a-Glance#Kalanikethan">Kalanikethan</a>
                                                                <a href="/about/#Campus-at-a-Glance#Girls-Hostel">Girls Hostel</a>
                                                                <a href="/about/#Campus-at-a-Glance#Boys-Hostel">Boys Hostel</a>
                                                                <a href="/about/#Campus-at-a-Glance#Yoga-Meditation-Centre">Yoga & Meditation Centre</a>
                                                            </div>
                                                        </div>

                                                        <a href="/about/#Goals-&-Objectives">Goals & Objectives</a>
                                                        <a href="/about/#Code-of-Conduct">Code of Conduct</a>
                                                        {/* <a href="/about/#vision">Visitors</a> */}
                                                        {/* <a href="/about/#vision">Outreach Programs</a> */}
                                                        {/* <a href="/about/#vision">Best Practices</a> */}
                                                        <a href="/about/#KBNC-Certificates">KBNC Certificates</a>
                                                        {/* <a href="/">Aerial View</a> */}
                                                        {/* <a href="/alumni">Alumni</a> */}
                                                    </div>
                                                    <div className={styles.cardMain}>
                                                        <Grid className={styles.card} >
                                                            <CardActionArea>
                                                                <iframe width="100%" height="200px" src="https://www.youtube.com/embed/4ropKMOMKjM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                                {/* <Image src={graduation1} alt="" /> */}
                                                                <h2 style={{ color: 'black' }}>Undergraduate Programs</h2>
                                                                <CardContent style={{ padding: '0' }}>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        Lizards are Link widespread group of squamate reptiles, with over 6,000 species, ranging
                                                                        across all continents except Antarctica
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Grid>
                                                        <Grid className={styles.card}>
                                                            <CardActionArea>
                                                                {/* <Image src={graduation2} alt="" /> */}
                                                                {/* <h2 style={{ color: 'black' }}>Graduate Programs</h2> */}
                                                                <CardContent style={{ padding: '0', marginLeft: '20px' }}>
                                                                    <h2 style={{ marginTop: '0', marginBottom: '5px', color: '#b05329' }}>Mission</h2>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        To produce knowledgeable, responsible, skilled, cultured, confident and competent citizens of India with a desire to develop its progress and developmentThese students coming out of the portals of the institution shall have the abilities such as learning to know, learning to do, learning to live and learning to be a responsible citizen.
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Grid>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                    <div className={styles.admissions}>
                                        <div className={styles.admissionsmain}>
                                            <Link href='/administration'>administration</Link>
                                            <div className={styles.admissionshoverline} ></div>
                                        </div>
                                        <div className={styles.admissionsmegamenu}>

                                            <div className={styles.admissionLinks}>
                                                <a href="/administration/#Organization-Structure">Organization Structure</a>
                                                <a href="/administration/#Statutory-Bodies">Statutory Bodies</a>
                                                <a href="/administration/#Decentralization-of-Admin">Decentralization of Admin</a>
                                                <a href="/administration/#BOS-Members">BOS Members</a>
                                                <a href="/administration/#Policy-Documents">Policy Documents</a>
                                                <a href="/administration/#Strategic-Plan">Strategic Plan</a>
                                                <a href="/administration/#Principal's-Desk">Principal's Desk</a>
                                                <a href="/administration/#Succession-List-of-Principals">Succession List of Principals</a>
                                            </div>
                                        </div>
                                        {/* </Grid> */}
                                        {/* </div> */}
                                    </div>

                                    <div className={styles.academics}>
                                        <div className={styles.academicsmain}>
                                            <Link href='/academics'>academics</Link>
                                            <div className={styles.academicshoverline} ></div>
                                        </div>
                                        <div className={styles.academicsmegamenu}>
                                            {/* <Grid item xs={12}> */}
                                            {/* <div className={styles.row}> */}

                                            <div className={styles.academicsLinks}>
                                                <div className={styles.diplomaprograms}>
                                                    <a href="/academics/#Syllabus">syllabus</a>
                                                    <div className={styles.dipicon}>
                                                        <FaAngleRight />
                                                    </div>
                                                    <div className={styles.academicsdiplomaLinks}>
                                                        {/* <h3>Postgraduate programs</h3> */}
                                                        <a href="/academics/#Syllabus#Undergraduate-Programmes">Undergraduate Programmes </a>
                                                        <a href="/academics/#Syllabus#Post-Graduate-Programmes">Post-Graduate Programmes </a>
                                                        <a href="/academics/#Syllabus#Diploma-Programmes">Diploma Programmes</a>
                                                    </div>
                                                </div>
                                                {/* <h3 style={{ margin: '0', paddingLeft: '15px', color: '#b05329' }}>Programs</h3> */}
                                                <div className={styles.ugprograms}>
                                                    <a href="/academics/#Departments">Departments</a>
                                                    <div className={styles.ugicon}>
                                                        <FaAngleRight />
                                                    </div>
                                                    <div className={styles.departmentsLinks}>
                                                        <div className={styles.departmentugLinks}>
                                                            <a >UG</a>
                                                            <div className={styles.departmentugicon}>
                                                                <FaAngleRight />
                                                            </div>
                                                            <div className={styles.academicsugLinks}>
                                                                <a href="/academics/#Departments#Department-of-Telugu">Department of Telugu</a>
                                                                <a href="/academics/#Departments#Department-of-English">Department of English</a>
                                                                <a href="/academics/#Departments#Department-of-Hindi">Department of Hindi</a>
                                                                <a href="/academics/#Departments#Department-of-Botany">Department of Botany</a>
                                                                <a href="/academics/#Departments#Department-of-Zoology">Department of Zoology</a>
                                                                <a href="/academics/#Departments#Department-of-Chemistry">Department of Chemistry</a>
                                                                <a href="/academics/#Departments#Department-of-Mathematics-&-Statistics">Department of Mathematics & Statistics</a>
                                                                <a href="/academics/#Departments#Department-of-Physics-&-Electronics">Department of Physics & Electronics</a>
                                                                <a href="/academics/#Departments#Department-of-Computer-Science-&-Applications">Department of Computer Science & Applications</a>
                                                                <a href="/academics/#Departments#Department-of-Library-Science">Department of Library Science</a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.departmentpgLinks}>
                                                            <a >PG</a>
                                                            <div className={styles.pgicon}>
                                                                <FaAngleRight />
                                                            </div>
                                                            <div className={styles.departmentpgLink}>
                                                                {/* <h3>Postgraduate programs</h3> */}
                                                                <a href="/academics/#Departments#Department-of-MBA">Department of MBA</a>
                                                                {/* <a href="/academics/#Departments#Department-of-M.Sc(CS)">Department of M.Sc(CS)</a> */}
                                                                <a href="/academics/#Departments#Department-of-MCA">Department of MCA</a>
                                                                {/* <a href="/academics/#Departments#Department-of-M.COM">Department of M.COM</a> */}
                                                                <a href="/academics/#Departments#Department-of-M.Sc(Organic-&-Analytical-Chemistry)">Department of M.Sc(Organic & Analytical Chemistry)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href="/academics/#KBNLMS">KBNLMS</a>
                                                <a href="/academics/#e-Resources">e-Resources</a>
                                            </div>


                                            {/* </div> */}
                                            {/* </Grid> */}
                                        </div>
                                    </div>
                                    <div className={styles.iqac}>
                                        <div className={styles.iqacmain}>
                                            <Link href='/iqac'>IQAC</Link>
                                            <div className={styles.iqachoverline} ></div>
                                        </div>
                                        <div className={styles.iqacmegamenu} >

                                            <div className={styles.iqacLinks}>
                                                {/* <Link href='/iqac'>IQAC</Link> */}
                                                <a href='/iqac/#About-IQAC'>About IQAC</a>
                                                <a href='/iqac/#AQAR-Reports'>AQAR Reports</a>
                                                <a href='/iqac/#IQAC-Reports'>IQAC Reports</a>
                                                <a href='/iqac/#AAA-Reports'>AAA Reports</a>
                                                <a href='/iqac/#IQAC-Minutes-of-Meeting'>IQAC Minutes of Meeting</a>
                                                {/* <Link href='/'>Quality Initiatives</Link> */}

                                                <div className={styles.qualityInitiative}>
                                                    <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
                                                        <a href="/iqac/#Quality-Initiatives">Quality Initiatives</a>
                                                        <div className={styles.qInitiativeicon}>
                                                            <FaAngleRight />
                                                        </div>
                                                    </div>
                                                    <div className={styles.qualityInitiativeLinks}>
                                                        <a href="/iqac/#Quality-Initiatives#FDP-Programmes">FDP Programmes</a>
                                                        <a href="/iqac/#Quality-Initiatives#International-Seminars">International Seminars</a>
                                                        <a href="/iqac/#Quality-Initiatives#National-Seminars">National Seminars</a>
                                                        <a href="/iqac/#Quality-Initiatives#Workshops">Workshops</a>
                                                        <a href="/iqac/#Quality-Initiatives#Add-On-Programmes">Add On Programmes</a>
                                                        <a href="/iqac/#Quality-Initiatives#Bridge-Courses">Bridge Courses</a>
                                                        <a href="/iqac/#Quality-Initiatives#TLI-methods">TLI methods</a>
                                                        <a href="/iqac/#Quality-Initiatives#Interaction-Meets">Interaction Meets</a>
                                                        <a href="/iqac/#Quality-Initiatives#Orientation-Programmes">Orientation Programmes</a>
                                                        <a href="/iqac/#Quality-Initiatives#Parents-Meet">Parents Meet</a>
                                                    </div>
                                                </div>

                                                <a href="/iqac/#College-Activity-Register">College Activity Register</a>
                                                <a href="/iqac/#Research-Promotion-and-Monitoring-Cell">Research Promotion and Monitoring Cell</a>
                                            </div>
                                            {/* </div> */}
                                            {/* </Grid> */}
                                        </div>
                                    </div>
                                    <div className={styles.nirf}>
                                        <div className={styles.nirfmain}>
                                            <Link href='/nirf'>nirf</Link>
                                            <div className={styles.nirfhoverline} ></div>
                                        </div>
                                    </div>
                                    <div className={styles.ariia}>
                                        <div className={styles.ariiamain}>
                                            <Link href='/ariia'>ariia</Link>
                                            <div className={styles.ariiahoverline} ></div>
                                        </div>
                                    </div>
                                    {/* <div style={{ borderRight: '2px solid #98AFC7', borderColor: '#98AFC7' }}></div> */}
                                    <div className={styles.placements}>
                                        <div className={styles.placementsmain}>
                                            <Link href='/placements'>placements</Link>
                                            <div className={styles.placementshoverline} ></div>
                                        </div>
                                    </div>
                                    <div className={styles.contact}>
                                        <div className={styles.contactmain}>
                                            <Link href='/contact-us'>contact us</Link>
                                            <div className={styles.contacthoverline} ></div>
                                        </div>
                                        <div className={styles.contactmegamenu}>
                                            <div className={styles.contactLinks}>
                                                <a href="/contact-us">College Name</a>
                                                <a href="/contact-us">College Address</a>
                                                <a href="/contact-us">College Landline Number</a>
                                                <a href="/contact-us">E-Mail ID</a>
                                                <a href="/contact-us">Google Map Location</a>
                                                <a href="/contact-us">Ariel View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mobileNav}>
                                <IconButton color="primary" aria-label="open menu" onClick={toggleDrawer('right', !state.right)}>
                                    <MenuOpenIcon />
                                </IconButton>
                                <Drawer anchor={'right'} open={state['right']} onClick={toggleDrawer('right', false)}>
                                    {list('anchor')}
                                </Drawer>
                            </div>
                        </div>
                    </div>
                </div>
            </HideOnScroll>
            {/* <ScrollTop {...props} >
                <Fab color="secondary" size="middle" aria-label="scroll back to top" >
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
        </React.Fragment>
    )
}

export default Header;