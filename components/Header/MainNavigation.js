import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logomain from "../../public/images/Established.png";
import Image from "next/image";
// import Slide from '@material-ui/core/Slide';
import clsx from "clsx";
import Link from "next/link";
// import InputBase from "@material-ui/core/InputBase";
import Drawer from "@material-ui/core/Drawer";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import IconButton from "@material-ui/core/IconButton";
// import styles from './header.module.css';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useRouter } from 'next/router'
import Button from "@material-ui/core/Button";
import { FaAngleRight } from "react-icons/fa";

import styles from "./MainNavigation.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "999999",
  },
  headerKbn: {
    display: "flex",
  },
  brandTxt: {
    color: "#07358a",
    textAlign: "center",
    margin: "20px 0 0 0",
  },
  txtNaac:{
    marginTop:0,
    marginBottom:'4px',
    textAlign:'center',
    color:'#b0532a'
  },
  headerKbnImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "18px !important",
    // [theme.breakpoints.down("sm")]: {
    //     display: 'none',
    //     padding: '1.5rem 8px'
    // },
  },
  search: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: "2px",
    width: "18%",
    color: "blue",
    height: "60%",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchIcon: {
    paddingTop: "9px",
    marginLeft:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    // border:'1px solid red'
    // height: "100%",
    // pointerEvents: "none",
  },
}));

const MainNavigation = () => {
  const classes = useStyles();
    const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const navStrip1 = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Administration", link: "/administration" },
    { title: "Academics", link: "/academics" },
    { title: "IQAC", link: "/iqac" },
    { title: "NIRF", link: "/nirf" },
    { title: "ARIIA", link: "/ariia" },
    { title: "Placements", link: "/placements" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  const navStrip2 = [
    { title: "Kosa", link: "/kosa" },
    { title: "Examination Cell", link: "/examination-cell" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "Student Services", link: "/student-services" },
    { title: "Covid-19 Best Practices", link: "/covid-19-best-practices" },
    { title: "Faq", link: "/faqs" },
    { title: "Search", link: "/search" },

  ]; 

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Image src={logomain} alt="brand name" width={250} height={112} />

      <List>
        {navStrip1.map((text, index) => (
          <ListItem
            button
            key={text}
          onClick={() => router.push(`${text.link}`)}
            // onClick={() => window.open(`${text.link}`, "_blank")}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navStrip2.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => window.open(`${text.link}`)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} className={styles.base_nav_left}>
          <Link href="/">
            <Image src={logomain} alt="brand name" width={225} height={120} />
          </Link>
          <div className={styles.mobileNav}>
            <IconButton
              color="primary"
              aria-label="open menu"
              onClick={toggleDrawer("right", !state.right)}
            >
              <MenuOpenIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClick={toggleDrawer("right", false)}
            >
              {list("anchor")}
            </Drawer>
          </div>
        </Grid>
        <Grid item xs={12} md={9} className={styles.base_nav_right}>
          <Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} className={classes.headerKbnText}>
                <h2 className={classes.brandTxt} style={{ fontSize: "27px" }}>
                  Kakaraparti Bhavanarayana College (Autonomous)
                </h2>
                <h3
                  className={classes.brandTxt}
                  style={{ color: "#000", marginTop: "10px" }}
                >
                  Sponsored by: S.K.P.V.V Hindu High Schools Committee
                </h3>
                <h4 className={classes.txtNaac}>Affiliated to Krishna University, Machilipatnam</h4>
              </Grid>
              <Grid item xs={12} md={5} className={classes.headerKbnImg}>
                <div>
                  {" "}
                  <img
                    src="/images/KBN_Certification_Logos.png"
                    alt=""
                    style={{
                      width: "350px",
                      height: "95px",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>
          <div className={styles.header}>
            <div className={styles.navbarMain}>
              <div className={styles.admissionbtn}>
                <Button variant="contained">2022 Admissions apply now</Button>
              </div>

              <ul className={styles.navbar}>
                <li className={styles.dropdown}>
                  <Link href="/kosa" className={styles.navbarHome}>
                    kosa
                  </Link>
                </li>

                <li className={styles.dropdown}>
                  <Link href="/examination-cell" className={styles.navbarHome}>
                    examination cell
                  </Link>
                </li>

                <li className={styles.dropdown}>
                  <Link href="/testimonials" className={styles.dropbtn}>
                    Testimonials
                  </Link>
                </li>

                <li className={styles.dropdown}>
                  <Link href="/student-services" className={styles.dropbtn}>
                    Student services
                  </Link>
                  <div className={styles.dropdowncontent}>
                    <Link
                      href="/student-services/#online-services"
                      className={styles.onlineSTxtStyle}
                    >
                      online services
                    </Link>
                    <Link href="/student-services/#UNNT-BHARAT-ABHIYAN-2.0">
                      UNNT BHARAT ABHIYAN 2.0
                    </Link>
                    <Link href="/student-services/#UGC-Women's-Studies-Center">
                      UGC Women's Studies Center
                    </Link>
                    <Link href="/student-services/#Statutroy-Cells">
                      Statutroy Cells
                    </Link>
                    <Link href="/student-services/#Red-Ribbon-Club">
                      Red Ribbon Club
                    </Link>
                    <Link href="/student-services/#Consumer-Club">
                      Consumer Club
                    </Link>
                    <Link href="/student-services/#NCC">NCC</Link>
                    <Link href="/student-services/#NSS">NSS</Link>
                    <Link href="/student-services/#Dramatic-Association">
                      Dramatic Association
                    </Link>
                    <Link href="/student-services/#Eco-Club">Eco Club</Link>
                    <Link href="/student-services/#Ward-Counselling-System">Ward Counselling System</Link>
                  </div>
                </li>

                <li className={styles.dropdowncovid}>
                  <Link
                    href="/covid-19-best-practices"
                    className={styles.navbarHome}
                  >
                    covid-19 best practices
                  </Link>
                </li>
                <li className={styles.dropdown}>
                  <Link href="/faqs" className={styles.dropbtn}>
                    FAQ
                  </Link>
                </li>
                <div>
                  {/* <div style={{position:'relative'}}>
                    <InputBase
                    // value={this.state.lable}
                    onChange={(e)=> handlechange(e.target.value)}
                    // onChange={(e)=> this.handlechange(e.target.value)}
                      placeholder="Search…"
                      style={{
                        color: "#000",
                        marginLeft: "10px",
                        width: "90%",
                      }}
                      value={searchData}
                      onChange={(e)=> handleSearch(e.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                    {searchResults.length > 0 && (
                      <div style={{position:'absolute',
                      zIndex:99 ,
                      minHeight:'80px',
                      maxHeight:'300px',
                      minWidth:'200px',
                      overflowY:'scroll',
                      borderRadius:'6px',
                      boxShadow:'0 2px 5px 1px rgb(64 60 67 / 16%)',
                  background:'#fff'}}>

                      <List component="nav" aria-label="secondary mailbox folders">
                        {searchResults?.map((e)=>{
                          return (
                            <ListItem button onClick={()=>window.open(e.link, '_blank')}>
                            <ListItemText style={{color:'#000'}} primary={e.title}/>
                          </ListItem>
                          )
                        })}
                        </List> 
                        </div>
                    )}

                    <div></div>
                  </div> */}
                  <a href="/search" style={{cursor:'pointer'}} className={classes.searchIcon}>
                  {/* <Link href="/search" className={styles.dropbtn}>
<SearchIcon/>                    
                  </Link> */}
                  <SearchIcon  />

                  </a>
                </div>
              </ul>

              <div className={styles.navbarlist}>
                <div className={styles.home}>
                  <div className={styles.homemain}>
                    <Link href="/">Home</Link>
                    <div className={styles.homehoverline}></div>
                  </div>
                </div>

                <div className={styles.services}>
                  <div className={styles.servicesmain}>
                    <Link href="/about">About kbn</Link>
                    <div className={styles.hoverline}></div>
                  </div>
                  <div className={styles.megamenu}>
                    <Grid item xs={8} className={styles.megagrid}>
                      <div className={styles.row}>
                        <div className={styles.servicesLinks}>
                          <h3>About Us</h3>
                          <Link href="/about/#History-of-the-College">
                            History of the College
                          </Link>
                          <Link href="/about/#Vision-&-Mission">
                            Vision & Mission
                          </Link>

                          <div className={styles.campusatglance}>
                            <div
                              style={{
                                display: "flex",
                                position: "relative",
                              }}
                            >
                              <Link
                                href="/about/#Campus-at-a-Glance"
                                className={styles.campusheading}
                              >
                                Campus at a Glance
                              </Link>
                              <div className={styles.campusicon}>
                                <FaAngleRight />
                              </div>
                            </div>

                            <div className={styles.campusatglanceLinks}>
                              <Link href="/about/#Campus-at-a-Glance#Digital-Library">
                                Digital Library
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Campus-at-a-Glance#Museums">
                                Museums
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Indoor-Sports">
                                Indoor Sports
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Outdoor-Sports">
                                Outdoor Sports
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Infrastructure">
                                Infrastructure
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Bank">
                                Bank
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Canteen">
                                Canteen
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Divyangian">
                                Divyangian
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#ICT-Facilities">
                                ICT-Facilities
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Utility-Store">
                                Utility Store
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Language-Lab">
                                Language Lab
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Homeo-Clinic">
                                Homeo Clinic
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Kalanikethan">
                                Kalanikethan
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Girls-Hostel">
                                Girls Hostel
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Boys-Hostel">
                                Boys Hostel
                              </Link>
                              <Link href="/about/#Campus-at-a-Glance#Yoga-Meditation-Centre">
                                Yoga & Meditation Centre
                              </Link>
                            </div>
                          </div>

                          <Link href="/about/#Goals-&-Objectives">
                            Goals & Objectives
                          </Link>
                          <Link href="/about/#Code-of-Conduct">
                            Code of Conduct
                          </Link>
                          {/* <Link href="/about/#vision">Visitors</Link> */}
                          {/* <Link href="/about/#vision">Outreach Programs</Link> */}
                          {/* <Link href="/about/#vision">Best Practices</Link> */}
                          <Link href="/about/#KBNC-Certificates">
                            KBNC Certificates
                          </Link>
                          <Link href="/about/#Annual-Report">
                            Annual Report
                          </Link>
                          {/* <Link href="/">Aerial View</Link> */}
                          {/* <Link href="/alumni">Alumni</Link> */}
                        </div>
                        <div className={styles.cardMain}>
                          <Grid className={styles.card}>
                            <CardActionArea>
                              <iframe
                                width="100%"
                                height="200px"
                                src="https://www.youtube.com/embed/4ropKMOMKjM"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              {/* <Image src={graduation1} alt="" /> */}
                              <h2 style={{ color: "black" }}>
                                Undergraduate Programs
                              </h2>
                              <CardContent style={{ padding: "0" }}>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  Lizards are Link widespread group of squamate
                                  reptiles, with over 6,000 species, ranging
                                  across all continents except Antarctica
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Grid>
                          <Grid className={styles.card}>
                            <CardActionArea>
                              {/* <Image src={graduation2} alt="" /> */}
                              {/* <h2 style={{ color: 'black' }}>Graduate Programs</h2> */}
                              <CardContent
                                style={{ padding: "0", marginLeft: "20px" }}
                              >
                                <h2
                                  style={{
                                    marginTop: "0",
                                    marginBottom: "5px",
                                    color: "#b05329",
                                  }}
                                >
                                  Mission
                                </h2>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  To produce knowledgeable, responsible,
                                  skilled, cultured, confident and competent
                                  citizens of India with a desire to develop its
                                  progress and developmentThese students coming
                                  out of the portals of the institution shall
                                  have the abilities such as learning to know,
                                  learning to do, learning to live and learning
                                  to be a responsible citizen.
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
                    <Link href="/administration">administration</Link>
                    <div className={styles.admissionshoverline}></div>
                  </div>

                  <div className={styles.admissionsmegamenu}>
                    <div className={styles.admissionLinks}>
                      <Link href="/administration/#Organization-Structure">
                        Organization Structure
                      </Link>
                      <Link href="/administration/#Statutory-Bodies">
                        Statutory Bodies
                      </Link>
                      <Link href="/administration/#Decentralization-of-Admin">
                        Decentralization of Admin
                      </Link>
                      <Link href="/administration/#BOS-Members">
                        BOS Members
                      </Link>
                      <Link href="/administration/#Policy-Documents">
                        Policy Documents
                      </Link>
                      <Link href="/administration/#Strategic-Plan">
                        Strategic Plan
                      </Link>
                      <Link href="/administration/#Principal's-Desk">
                        Principal's Desk
                      </Link>
                      <Link href="/administration/#Succession-List-of-Principals">
                        Succession List of Principals
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.academics}>
                  <div className={styles.academicsmain}>
                    <Link href="/academics">academics</Link>
                    <div className={styles.academicshoverline}></div>
                  </div>

                  <div className={styles.academicsmegamenu}>
                    <div className={styles.academicsLinks}>
                      <div className={styles.diplomaprograms}>
                        <Link href="/academics/#Syllabus">syllabus</Link>
                        <div className={styles.dipicon}>
                          <FaAngleRight />
                        </div>

                        <div className={styles.academicsdiplomaLinks}>
                          {/* <h3>Postgraduate programs</h3> */}
                          <Link href="/academics/#Syllabus#Undergraduate-Programmes">
                            Undergraduate Programmes
                          </Link>
                          <Link href="/academics/#Syllabus#Post-Graduate-Programmes">
                            Post-Graduate Programmes
                          </Link>
                          <Link href="/academics/#Syllabus#Diploma-Programmes">
                            Diploma Programmes
                          </Link>
                        </div>
                      </div>

                      <div className={styles.ugprograms}>
                        <Link href="/academics/#Departments">Departments</Link>
                        <div className={styles.ugicon}>
                          <FaAngleRight />
                        </div>

                        <div className={styles.departmentsLinks}>
                          <div className={styles.departmentugLinks}>
                            <a>UG</a>
                            <div className={styles.departmentugicon}>
                              <FaAngleRight />
                            </div>
                            <div className={styles.academicsugLinks}>
                              <Link href="/academics/#Departments#Department-of-Telugu">
                                Department of Telugu
                              </Link>
                              <Link href="/academics/#Departments#Department-of-English">
                                Department of English
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Hindi">
                                Department of Hindi
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Botany">
                                Department of Botany
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Zoology">
                                Department of Zoology
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Chemistry">
                                Department of Chemistry
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Mathematics-&-Statistics">
                                Department of Mathematics & Statistics
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Physics-&-Electronics">
                                Department of Physics & Electronics
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Computer-Science-&-Applications">
                                Department of Computer Science & Applications
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Library-Science">
                                Department of Library Science
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Commerce-and-Management">
                                Department of Commerce And Management
                              </Link>
                              <Link href="/academics/#Departments#Department-of-Physical-Education">
                                Department of Physical Education
                              </Link>
                            </div>
                          </div>

                          <div className={styles.departmentpgLinks}>
                            <a>PG</a>
                            <div className={styles.pgicon}>
                              <FaAngleRight />
                            </div>
                            <div className={styles.departmentpgLink}>
                              {/* <h3>Postgraduate programs</h3> */}
                              <Link href="/academics/#Departments#Department-of-MBA">
                                Department of MBA
                              </Link>
                              {/* <Link href="/academics/#Departments#Department-of-M.Sc(CS)">
                                Department of M.Sc(CS)
                              </Link> */}
                              <Link href="/academics/#Departments#Department-of-MCA">
                                Department of MCA
                              </Link>
                              {/* <Link href="/academics/#Departments#Department-of-M.COM">
                                Department of M.COM
                              </Link> */}
                              <Link href="/academics/#Departments#Department-of-M.Sc(Organic-&-Analytical-Chemistry)">
                                Department of M.Sc(Organic & Analytical Chemistry)
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link href="/academics/#KBNLMS">KBNLMS</Link>
                      <Link href="/academics/#e-Resources">e-Resources</Link>
                    </div>
                  </div>
                </div>

                <div className={styles.iqac}>
                  <div className={styles.iqacmain}>
                    <Link href="/iqac">IQAC</Link>
                    <div className={styles.iqachoverline}></div>
                  </div>

                  <div className={styles.iqacmegamenu}>
                    <div className={styles.iqacLinks}>
                      <Link href="/iqac/#About-IQAC">About IQAC</Link>
                      <Link href="/iqac/#AQAR-Reports">AQAR Reports</Link>
                      <Link href="/iqac/#IQAC-Reports">IQAC Reports</Link>
                      <Link href="/iqac/#AAA-Reports">AAA Reports</Link>
                      <Link href="/iqac/#IQAC-Minutes-of-Meeting">
                        IQAC Minutes of Meeting
                      </Link>

                      <div className={styles.qualityInitiative}>
                        <div
                          style={{
                            display: "flex",
                            position: "relative",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link href="/iqac/#Quality-Initiatives">
                            Quality Initiatives
                          </Link>
                          <div className={styles.qInitiativeicon}>
                            <FaAngleRight />
                          </div>
                        </div>
                        <div className={styles.qualityInitiativeLinks}>
                          <Link href="/iqac/#Quality-Initiatives#FDP-Programmes">
                            FDP Programmes
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#International-Seminars">
                            International Seminars
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#National-Seminars">
                            National Seminars
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Workshops">
                            Workshops
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Add-On-Programmes">
                            Add On Programmes
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Bridge-Courses">
                            Bridge Courses
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#TLI-methods">
                            TLI methods
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Interaction-Meets">
                            Interaction Meets
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Orientation-Programmes">
                            Orientation Programmes
                          </Link>
                          <Link href="/iqac/#Quality-Initiatives#Parents-Meet">
                            Parents Meet
                          </Link>
                        </div>
                      </div>

                      <Link href="/iqac/#College-Activity-Register">
                        College Activity Register
                      </Link>
                      <Link href="/iqac/#Research-Promotion-and-Monitoring-Cell">
                        Research Promotion and Monitoring Cell
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.nirf}>
                  <div className={styles.nirfmain}>
                    <Link href="/nirf">nirf</Link>
                    <div className={styles.nirfhoverline}></div>
                  </div>
                </div>

                <div className={styles.ariia}>
                  <div className={styles.ariiamain}>
                    <Link href="/ariia">ariia</Link>
                    <div className={styles.ariiahoverline}></div>
                  </div>

                  <div className={styles.ariiamegamenu}>
                    <div className={styles.iqacLinks}>
                      <Link href="/ariia#ARIIA-2020-21">ARIIA 2020-21</Link>
                      <Link href="/ariia#IIC-MENU">IIC MENU</Link>
                      <Link href="/ariia#About-NISP">ABOUT NISP</Link>
                    </div>
                  </div>
                </div>

                <div className={styles.placements}>
                  <div className={styles.placementsmain}>
                    <Link href="/placements">placements</Link>
                    <div className={styles.placementshoverline}></div>
                  </div>
                </div>

                <div className={styles.contact}>
                  <div className={styles.contactmain}>
                    <Link href="/contact-us">contact us</Link>
                    <div className={styles.contacthoverline}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainNavigation;
