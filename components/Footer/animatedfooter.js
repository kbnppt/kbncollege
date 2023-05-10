import React from 'react'
import { makeStyles } from '@material-ui/core';
import styles from './animatedfooter.module.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
// import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram,  FaTelegram } from "react-icons/fa";

// import Logo from '../../public/images/01-ENG Emblem.png';

const useStyles = makeStyles((theme) => ({
    newRoot: {
        position: 'relative',
        padding: '2rem 0'
    },
    brandname: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     background: 'grey'
    // },

}));

const AnimatedFooter = () => {
    const classes = useStyles();

    return (
        <div className={styles.root}>
            <Container >
                <Grid container spacing={3} className={classes.newRoot}>
                    <Grid item xs={12} sm={6} md={3} className={classes.brandname} style={{ display: 'block', paddingTop: '30px', paddingBottom: '50px' }}>
                        <div style={{ marginLeft: '35px' }}>
                            <Image src={'/images/01-ENG Emblem.png'} alt="" width={180} height={180} className={styles.brandname} />
                        </div>
                        <div className={styles.sociallinks}>
                            <a href="https://www.facebook.com/kbncollegeofficial" target='_blank'><FaFacebookF /></a>
                            <a href="#" target='_blank'><FaTwitter /></a>
                            <a href="https://www.youtube.com/c/kbncollegemedia" target='_blank'><FaYoutube /></a>
                            <a href="https://www.instagram.com/kbncollegeofficial/" target='_blank'><FaInstagram /></a>
                            <a href='#' target='_blank'><FaTelegram /></a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} style={{ padding: '0' }}>
                        <div className={styles.footercol} style={{ padding: '0' }}>
                            <h4 style={{ marginBottom: '0' }}>About KBN</h4>
                            <ul className={styles.listStyle}>
                                <li><a href="/about" target='_blank'>About Us </a></li>
                                <li><a href="/about#Vision-&-Mission" target='_blank'>Vision & Mission </a></li>
                                <li><a href="/faqs" target='_blank'>FAQs</a></li>
                                <li><a href="/contact-us" target='_blank'>Contact Us</a></li>
                                <li><a href="/administration#Policy-Documents" target='_blank'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ padding: '0' }}>
                        <div className={styles.footercol} style={{ padding: '0' }}>
                            <h4 style={{ marginBottom: '0' }}>UG Programs</h4>
                            <ul className={styles.listStyle}>
                                <li><a href="/academics#Departments#Department-of-Telugu" target='_blank'>Department of Telugu</a></li>
                                <li><a href="/academics#Departments#Department-of-English" target='_blank'>Department of English</a></li>
                                <li><a href="/academics#Departments#Department-of-Hindi" target='_blank'>Department of Hindi</a></li>
                                <li><a href="/academics#Departments#Department-of-Botany" target='_blank'>Department of Botany</a></li>
                                <li><a href="/academics#Departments#Department-of-Zoology" target='_blank'>Department of Zoology</a></li>
                                <li><a href="/academics#Departments#Department-of-Chemistry" target='_blank'>Department of Chemistry</a></li>
                                <li><a href="/academics#Departments#Department-of-Mathematics-&-Statistics" target='_blank'>Department of Mathematics & Statistics</a></li>
                                <li><a href="/academics#Departments#Department-of-Physics-&-Electronics" target='_blank'>Department of Physics & Electronics</a></li>
                                <li><a href="/academics#Departments#Department-of-Computer-Science-&-Applications" target='_blank'>Department of Computer Science & Applications</a></li>
                                <li><a href="/academics#Departments#Department-of-Library-Science" target='_blank'>Department of Library Science</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} style={{ padding: '0' }}>

                        <div className={styles.footercol} style={{ padding: '0' }}>
                            <h4 style={{ marginBottom: '0' }}>PG Programs</h4>
                            <ul className={styles.listStyle} >
                                <li><a href="/academics#Departments#Department-of-MBA" target='_blank'>Department of MBA</a></li>
                                {/* <li><a href="/academics#Departments#Department-of-M.Sc(CS)" target='_blank'>Department of M.Sc(CS)</a></li> */}
                                <li><a href="/academics#Departments#Department-of-MCA" target='_blank'>Department of MCA</a></li>
                                {/* <li><a href="/academics#Departments#Department-of-M.COM" target='_blank'>Department of M.COM</a></li> */}
                                <li><a href="/academics#Departments#Department-of-M.Sc(Organic-&-Analytical-Chemistry)" target='_blank'>Department of M.Sc(Organic & Analytical Chemistry)</a></li>

                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} style={{ padding: '0' }}>

                        <div className={styles.footercol} style={{ padding: '0' }}>
                            <h4 style={{ marginBottom: '0' }}>Diploma Programs</h4>
                            <ul className={styles.listStyle} >
                                <li><a href="#">Diploma in Printing & Technology</a></li>
                                {/* <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li> */}

                            </ul>
                        </div>
                    </Grid>
                    {/* <div className={styles.lines}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div> */}
                </Grid>
                <Grid item xs={12} style={{ position: 'relative', marginTop: '11px', padding: '0', color: '#fff' }}>
                    <div className={styles.copyright}>
                        <p style={{ paddingTop: '10px' }}><i>&copy;</i>2023 <i style={{ color: '#07358a' }}>KBN College.</i><a href="" target="_blank" rel="noopener"> All rights reserved</a></p>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default AnimatedFooter;
