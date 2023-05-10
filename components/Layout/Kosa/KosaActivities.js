import React from 'react'
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    teluguHeading: {
        fontSize: '23px',
        color: 'green',
        margin: '0',
        paddingTop: '12px',
        fontWeight: 'normal'

    },
    teluguContent: {
        fontSize: '22px',
        margin: '0',
        paddingTop: '10px',
    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px',
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
        // fontSize: '22px',
        margin: '0px',
        color: '#337ab7',
        "&:hover": {
            textDecoration: 'underline',
            color: 'grey'
        }
    },
    arrowContent: {
        // fontSize: '22px',
        margin: '0px',
    },

}));

const KosaActivities = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href="http://www.kbncollege.ac.in/alabout.php" target={'__blank'} className={classes.arrowwithContent}>
                    About Alumni Association
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href="http://www.kbncollege.ac.in/alregform.php" target={'__blank'} className={classes.arrowwithContent}>
                    Registered ALUMNI
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>
                    ALUMNI Contribution
                </a>
            </div>
            <h2 className={classes.teluguHeading}>KOSA ACTIVITIES</h2>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    A GUEST LECTURE ON “HUMAN VALUES" BY Smt V.KALAVATHI(ALUMNI) ORGANIZED BY DEPT OF HINDI ON 18TH FEB,2020
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    A GUEST LECTURE ON “MOTHER TONGUE FOR HUMAN DEVELOPMENT - NECESSITY" BY Smt K.SATYASULOCHANA(ALUMNI) ORGANIZED BY DEPT OF TELUGU ON 17TH FEB,2020
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    A GUEST LECTURE ON “MACHINE LEARNING" BY Mr.B.YOHOSHIVA (ALUMNI) ORGANIZED BY DEPT OF MATHEMATICS AND STATISTICS ON 6TH FEB,2020
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    A GUEST LECTURE ON “HUMAN VALUES" BY Smt V.KALAVATHI(ALUMNI) ORGANIZED BY DEPT OF MCA ON 22ND NOVEMBER,2019
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    55th Foundation Day Celebrations 6th November, 2019
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    Foundation Day Celebrations 6th November, 2018
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1BfWQmIQlVcMRP0_PDLZAMPqZi8P19iMt' target={'_blank'} className={classes.arrowwithContent}>
                    Teachers Day Celebrations on 5th September, 2018
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1TOIpQ0NUjUVskyFvROyeskX9zhqry1ek' target={'_blank'} className={classes.arrowwithContent}>
                    Guest lecture on Career orientation and Guidance in association with KOSA on 5TH DECEMBER, 2015
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1zoWmzk-5ioZ2hBvRgZjNkZgD3CeB54IB' target={'_blank'} className={classes.arrowwithContent}>
                    SCHOLARSHIPS ON COLLEGE FOUNDATION DAY on 6-11-2015 by KOSA
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=12FPPblHAku2kia7BbnvAbY3d6J5vlg9q' target={'_blank'} className={classes.arrowwithContent}>
                    SMT.YAMINI PRIYA, DIG, ISF SOUTH ZONE, CHENNAI (ALUMNI) in 50TH ANNUAL DAY CELEBRATIONS on 28th Feb, 2015.
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1XRV0nmtOqeaEY9xsTb3WnsPl9VYy-TOF' target={'_blank'} className={classes.arrowwithContent}>
                    Guest Lecturer on “Career Awareness & Motivation” Conducted by Commerce Department in collaboration with KOSA on 8-10-2014
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1Ij0qPmMGy4rTYlyXMTkco7kC9OAuJD3m' target={'_blank'} className={classes.arrowwithContent}>
                    K.B.N.COLLEGE OLD STUDENTS ASSOCIATION (KOSA) 01-7-2014 on the eve of DOCTORS & CHARTERED ACCOUNTANTS DAY CELEBRATIONS.
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1Ji7ZrougC6oARvct2qztZCH7O2MLr2p9' target={'_blank'} className={classes.arrowwithContent}>
                    “"SELF-MOTIVATION, MEMORY IMPROVEMENT AND STRESS MANAGEMENT” Dr. R. K. AYODHYA , Renowned Psychiatrist, Alumni on 19-7-2012.
                </a>
            </div>
        </div>
    )
}

export default KosaActivities