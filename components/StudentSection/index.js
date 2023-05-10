/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './studentsection.module.css';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import HeadingComponent from '../Headings/index';
import { motion } from "framer-motion";
// import ParallaxItem from '../ParallelAxis/index';
import ParallaxContainer from '../ParallelAxis/parallelaxis';

const StudentSection = () => {
    // const [scrolled, setScrolled] = React.useState(false);
    const paddingBottom = (400 / 300) * 100;

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //         // console.log(scrolled);
    //     }
    // };

    // React.useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // });
    // React.useEffect(() => {
    //     console.log(offset, '***********');

    // }, [offset])
    return (
        <div style={{ backgroundColor: "#07358a", color: "white", padding: '1rem 0' }}>
            <Container>
                <HeadingComponent data1="student's" data2="section" Color={true} />

                <div className={styles.stusectionMain}>
                    {/* <div className={styles.headingContainer}>
                    <h2 className={styles.headingTxt}>Student&#8217;s Section</h2> <span className={styles.headingDecoration} />
                </div> */}
                    <Grid container justifyContent="space-between">
                        <Grid item lg={4} md={4} sm={12} style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px' }}>
                            {/* {scrolled && (<ParallaxItem state={scrolled}>
                            <div className={styles.studentImage}
                                style={{
                                    paddingBottom: `${paddingBottom}%`,
                                    overflow: 'hidden', border: '1px solid red'
                                }}>
                                <img src='./images/students.jpg' alt='students'
                                    style={{
                                        height: '400px',
                                    }} />
                            </div>
                        </ParallaxItem>)} */}
                            <ParallaxContainer >
                                {/* <div className={styles.studentImage}
                                style={{
                                    // paddingBottom: `${paddingBottom}%`,
                                    overflow: 'hidden', border: '1px solid red'
                                }}> */}
                                <img src='./images/students.jpg' alt='students'
                                    style={{
                                        height: 'auto', width: '100%', borderRadius: '6px'
                                    }} />
                                {/* </div> */}
                            </ParallaxContainer>
                            {/* <motion.img
                            // ref={imageRef}
                            src={'./images/students.jpg'}
                            alt="students"
                            width="100%"
                            height="100%"
                            initial={{ scale: 1.6 }}
                            animate={{
                                scale: 1,
                            }}
                            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                        /> */}

                        </Grid>
                        <Grid item lg={7} md={8} sm={12} className={styles.stucontentMain}>
                            <Grid className={styles.stucontentLeft}>
                                <motion.div className={styles.stucontent} initial={false} animate={{ x: [0, 100, 0] }}
                                    transition={{ ease: "easeOut", duration: 2 }}>
                                    <Link href="/academics">Academics</Link>
                                    <p>KBN revels fosters amicable learning environment.</p>
                                </motion.div>
                                <div className={styles.stucontent}>
                                    <Link href="/iqac">International Admissions</Link>
                                    <p>The Office of International Relations at KBN is committed to improving the academic image, educational standards..,</p>
                                </div>
                                <div className={styles.stucontent}>
                                    <Link href="/iqac">KBN Incubation Center</Link>
                                    <p>Innovation requires nothing short of a paradigm shift in the established ways of thinking. The zeal to explore and dare to break the boundaries is encouraged among students.</p>
                                </div>
                                <div className={styles.stucontent}>
                                    <Link href="/iqac">Anti-Ragging</Link>
                                    <p>The university ensures a ragging free campus through well-structured policies...</p>
                                </div>
                            </Grid>
                            <Grid className={styles.stucontentRight}>
                                <div className={styles.stucontent} style={{ paddingBottom: '7px' }}>
                                    <Link href="/kosa#About-Alumni">Alumni</Link>
                                    <p>Our Alumni is our pride. The Alumni Association of KBN was established in 1965.</p>
                                </div>
                                <div className={styles.stucontent}>
                                    <Link href="/iqac">Industrial Practice School</Link>
                                    <p>As a part of the curriculum, KBN introduced an innovative concept of Practice School.</p>
                                </div>
                                <div className={styles.stucontent}>
                                    <Link href="/iqac">Hobby Clubs</Link>
                                    <p>Students get plenty of opportunities to explore & discover their talents & interests</p>
                                </div>
                                <div className={styles.stucontent} style={{ paddingTop: ' 40px ' }}>
                                    <Link href="/iqac">Extension Activities</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>
            </Container >
        </div >
    )
}

export default StudentSection
