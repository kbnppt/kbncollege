import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styles from './about.module.css';
import HeadingsComponent from '../HeadingComponent/Headings';

const About = () => {
    return (
        <div className={styles.aboutmain}>
            <div>
                <HeadingsComponent data='About Us' />
            </div>
            <div className={styles.about}>
                <Grid className={styles.aboutvideo} item xs={12}>
                    <Card elevation={8} item xs={12} style={{padding:'0px',borderRadius:'8px'}} className={styles.video}>
                        <iframe width="100%" height="300" 
                            src="https://www.youtube.com/embed/xM1AEDl14YY" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{borderRadius:'8px'}}        
                            >
                        </iframe>
                    </Card> 
                </Grid>
                <Grid item xs={12} className={styles.contentmain}>
                    <Card elevation={6} className={styles.aboutcontent} item xs={12}>
                        <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. </p>
                        <p>-Filler text is text</p>
                    </Card>
                </Grid>
           </div>
        </div>
    )
}

export default About
