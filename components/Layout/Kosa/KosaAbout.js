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


const KosaAboutComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent} href="https://drive.google.com/file/d/1JaQ5zRE0fXrfMZ4hH78UdIe5ZzpUJDDp/view?usp=share_link" target="__blank">
                    About Alumni Association
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent} href="https://drive.google.com/file/d/1F7zgGqsekoIEIZ935GPMnJrzAA7L6Tby/view?usp=share_link" target="__blank">
                    Registered ALUMNI
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent} href="https://drive.google.com/file/d/1FQYcwRWYE5BoZcwqgNmTlJyM1LHVNfXE/view?usp=share_link" target="__blank">
                    ALUMNI Contribution
                </a>
            </div>
            <h2 className={classes.teluguHeading}>ABOUT ALUMNI</h2>
            <p className={classes.teluguContent}>
                The Alumni Association of KBN College in the early years functioned with the name Alumni Association Net Work. It may be admitted that in the early years there was not much activity. But from 2006, things changed and a committee is constituted for the betterment of the association. From then onwards Alumnae ensured continued contact with the College and facilitated creative involvement in the progress and activities of the College. However as the involvement of alumnae is not satisfactory the Association was revived in 2014 through the efforts of the Principal Dr. P. Krishna Murthy and his dedicated team and was named as KOSA that stands for KBN College Old Students Association. The association was registered on 1st May, 2014 with the register number 103 of 2014 under the Andhra Pradesh Societies Registration Act., 2001. The members meet regularly during the academic year to carry out various activities. The members of the alumni are very prominent people in the society representing the fields of Politics, Real Estate, I.T., Education department and in many Government Departments as well. The members of the alumni help the student community through the Placement Cell, as most of them are well positioned in various corporates. The alumni members are always in touch with the students of the college and act as stake holders along with the management in carving the bright future of the students. They not only involve themselves in academic matters of the students but also focus on the infrastructural amenities to facilitate the wellbeing of the student community.
            </p>
            <p className={classes.teluguContent}>
                The Alumni as integral part of the institution plays a vital role in carrying out various activities, reflects on assessing the quality of the institution through their feedback on the overall functioning of the institution from time to time. The alumni take interest in the academic empowerment of the learner community. Keeping in view of this the alumni arranges guest lecturers to address the requirements of the diverse learners. They either financially support in arranging the guest lecturers or they themselves share their expertise in their chosen field as and when the need demands. KOSA would also support the poor, needy and enthusiastic minds. Every year KOSA identifies the financially backward students and support them in paying their tuition fee based on their overall performance. Many a students for the last five years have been the beneficiaries of this kind of benevolence. Some of the bright minds of KOSA after completing their post graduate studies and doctoral degrees have come back to the institution in the capacity as lecturers and have been contributing their immeasurable knowledge and commitment for the wellbeing of the institution and student community.
            </p>
            <p className={classes.teluguContent}>
                Distinguished alumnae:
            </p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Smt. Yamini Priya- DIG/Tech, Trg & Sports Indian Security Force, South Zone, Chennai
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Sri. Indira Kalyan- IPS, Additional SP, Bijapur, Chhattisgarh
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Sri. J.A.C.S.RAO, IFS, Chief Conservator of Forests, Chhattisgarh
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Sri. Vellampalli Srinivasa Rao, Ex. MLA, Vijayawada, West.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Mr. Appaji, Corporator, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. G. Hari Shankar Prasad, Associate Professor and Chair person, Department of Fashion management Studies, National Institute of Fashion Technology (NIFT), Madhapur, Hyderabad.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. R. K. Ayodhya, Psychiatrist, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. N. C. Lakshmaiah, M.D. (Ophthal.) AIIMS, Vitreo-Retina & Phaco Surgeon.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. K. Ravi, Ophthalmologist, Anusuya Rao Clinic, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. Chakravarthy, Ophthalmologist, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. G. Sankara Rao Psychologist, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. Rudra Nagendra Rao, Pediatrician, Avala Hospitals, Vijayawada
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Dr. V. Anuradha, Professor, Dept. Of Chemistry, Vignan Degree and PG College, Guntur.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Mr. Pankaj, Senior Project Engineer, E-Mids Technology, Bangalore
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    K. Niharika, Software Engineer, Tech Mahindra, Bangalore
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>
                    Md. Shujauddin Ali Ahmed, Asst. manager in Genpact, Hyderabad
                </p>
            </div>
        </div>
    )
}

export default KosaAboutComponent;