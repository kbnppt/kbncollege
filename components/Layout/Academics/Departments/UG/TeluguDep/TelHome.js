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

const TelHome = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF TELUGU</h2>
            <h3 className={classes.teluguHeading}>VISION</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Develop good communicators in Telugu.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>Inculcating interest in students to aspire for journalism both print and electronic media.</p>
            </div>
            <h3 className={classes.teluguHeading}>MISSION STATEMENT</h3>
            <p className={classes.teluguContent}>To reinforce linguistic and eastic values in the fields of literature, art, culture,education and society.</p>
            <h3 className={classes.teluguHeading}>Program Outcomes</h3>
            <p className={classes.teluguContent}>
                “తెలుగు భాష యందు సమర్ధవంతమైన నైపుణ్యాలను సాహితి ప్రక్రియల పరంగా విద్యార్ధులకు అందించుటంతో గర్వించదగిన అంశము. భారతదేశంలో పేరొందిన బాషలలో అత్యధిక శాతం ప్రజలు వ్యవహరిస్తున్న భాషలలో మూడవ స్థానంలో తెలుగు భాష పొందినది. తేనే వంటి తియ్యనైన భాష ఆంధ్రులకు దక్కటము అదృష్టమనే చెప్పవలెను. తెలుగు భాష ద్వారా అభిప్రాయాలను, చక్కని భావజాలాన్ని, ఆలోచనలను వ్యక్తీకరించటమే కాకుండా సమర్ధవంతమైన విలువలు, సంప్రదాయాలను, సంస్కృతిని అద్భుతంగా విద్యార్ధులు అధ్యయనం చేసి, చక్కని దేశభక్తితో మంచి పౌరులుగా ఎదుగుతారు. రచయితలుగా, కవులుగా, విద్యార్ధులు ఎదగటానికి తెలుగు ఎంతో దోహదపడుతున్నది.
            </p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>విద్యార్ధుల యందు నాయకత్వ లక్షణాలు పెంపొందిచుట</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>విద్యార్ధులలో మంచి వ్యక్తలుగా రాణించుట, కార్యక్రమ, సభానిర్వాహక సామర్ధ్యం పెంపొందించుట.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>మంచి వ్యక్తిత్వం, నిజాయితీ, నిబద్దత విద్యార్ధులలో పెంపొందిచుట</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>మంచి భావజాలం కలిగిన యువతరాన్ని భారతదేశ పౌరులుగా భావితరాలకు స్పూర్తిగా నిలిచేలా అందించుట.</p>
            </div>
            <h3 className={classes.teluguHeading}>Programme Specific Outcomes</h3>
            <p className={classes.teluguContent}>
                మధురమైన తల్లి భాషయైన తెలుగును విద్యార్ధులు తమ జీవితాంతం గుర్తుంచుకొని దానితో తమ విద్యా విలువలను చాటే విధంగా పాఠ్యగతమైన వివిధ అంశాలపై విధ్యార్ధులను నిష్ట్నాతులుగా చేయుటలో ద్వితీయ భాషయైన తెలుగు భాష బోధన డిగ్రీ స్థాయిలో ఎంతో ఉపకరిస్తుంది. విద్యార్దులలో సృజనాత్మక విలువలను పెంపొందింపచేస్తూ, వారిని బాహ్య ప్రంపంచంలో సమున్నతలుగా వివిధ రంగాలలో నిలబడేలాచేస్తుంది.
            </p>
        </div>
    )
}

export default TelHome