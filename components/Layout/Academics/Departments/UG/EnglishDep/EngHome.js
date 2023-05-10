import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    teluguHeadingMain: {
      //fontSize:'36px',
        textAlign: 'center',
        color: '#2e69d6'
    },
    teluguHeading: {
              // fontSize: '23px',
        color: 'green',
        margin: '0',
        paddingTop: '12px'
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
        margin: '0px'
    },
    teluguContent: {
      // fontSize: '22px',
        margin: '0',
        paddingTop: '10px'
    }

}));

const EngHome = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF ENGLISH</h2>
            <h3 className={classes.teluguHeading}>Vision</h3>
            <p className={classes.teluguContent}>
                to provide quality education that enables the student evolve into a knowledgeble, professionally competent and emotionally matured citizen
            </p>
            <h3 className={classes.teluguHeading}>Mission</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Adapting the latest teaching methodologies such as:
                    <p style={{ margin: '0' }}>a.Learner-centeric language teaching.</p>
                    <p style={{ margin: '0' }}>b.Interactive method.</p>
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Attaining learner autonomy.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Help the student achieve language proficiency.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Minimize the M.T.I in L2</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Project the literary and aesthetic values objectively and in a simple manner.</p>
            </div>
            <h3 className={classes.teluguHeading}>General Outcomes</h3>
            <p className={classes.teluguContent}>
                Humans are linguistic animals. Language is the most fundamental and pervasive tool we have for interpreting our world and communicating with others as we act in and attempt to transform that world. Whether they pursue an emphasis in literature or writing, English majors gain a deeper understanding of the resources of the written word. Both literature and writing courses help students explore how writers use the creative resources of language-in fiction, poetry, nonfiction prose, and drama-to explore the entire range of human experience. English courses help students build skills of analytical and interpretive argument; become careful and critical readers; practice writing-in a variety of genres-as a process of intellectual inquiry and creative expression; and ultimately to become more effective thinkers and communicators who are well-equipped for a variety of careers in our information-intensive society.
            </p>
            <h3 className={classes.teluguHeading}>Specific learning outcomes for English courses include the following:</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}><b>Reading:</b> Students will become accomplished, active readers who appreciate ambiguity and complexity, and who can articulate their own interpretations with an awareness and curiosity for other perspectives.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}><b>Writing skills and process:</b> Students will be able to write effectively for a variety of professional and social settings. They will practice writing as a process of motivated inquiry, engaging other writers’ ideas as they explore and develop their own. They will demonstrate an ability to revise for content and edit for grammatical and stylistic clarity. And they will develop an awareness of and confidence in their own voice as a writer.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}><b>Sense of Genre:</b> Students will develop an appreciation of how the formal elements of language and genre shape meaning. They will recognize how writers can transgress or subvert generic expectations, as well as fulfill them. And they will develop a facility at writing in appropriate genres for a variety of purposes and audiences.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}><b>Culture and History:</b> Students will gain a knowledge of the major traditions of literatures written in English, and an appreciation for the diversity of literary and social voices within–and sometimes marginalized by–those traditions. They will develop an ability to read texts in relation to their historical and cultural contexts, in order to gain a richer understanding of both text and context, and to become more aware of themselves as situated historically and culturally.</p>
            </div>
        </div>
    )
}

export default EngHome;