import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  ugHeading: {
    fontSize: '28px',
    color: '#003494'
  },
  diplomaHeading: {
    fontSize: '26px',
    color: 'green',
    marginBottom: '10px'
  },
  diplomaContent: {
    fontSize: '16px',
    margin: '0',
    marginTop: '10px'
  },
  objectivesContent: {
    display: 'flex',
    paddingTop: '12px'
  },
  arrowIcon: {
    marginTop: '4px',
    marginRight: '10px'
  },
  arrowwithContent: {
    fontSize: '18px',
    margin: '0px'
  },
})

const Diploma = () => {
  const classes = useStyles();

  return <div style={{textAlign:'justify'}}>
    <h2 className={classes.ugHeading}>Diploma in Yoga For Human Excellence(DYHE)</h2>
    <p className={classes.diplomaHeading}>Preface</p>
    <p className={classes.diplomaContent}>
      Yoga is an activity that increases flexibility, strengthens muscles, centers thoughts, and relaxes and calms anyone. Yoga is an ancient physical and spiritual discipline and branch of philosophy that originated in India reportedly more than 5,000 years ago. The word Yoga comes from the Sanskrit word yuj, which means to unite-the “joining or integrating of all aspects of the individual-body with mind and mind with soul-to achieve a happy, balanced and useful life. “The ultimate aim of yoga is to reach kalvalya(emancipation or ultimate freedom). Yogis over the millennia passed down the discipline to their students, and many different schools of yoga developed as it spread. The oldest texts in existence is generally believed to be written by Patanjali, an Indian yogic sage who lived somewhere between 2,000 and 2,500 years ago. Patanjali is credited with writing the Yoga Sutras, which are the principles, philosophy, and practices of yoga that are still followed today. Buddism and other Eastern spiritual traditions use many of the yoga techniques or derivations of those techniques.
    </p>
    <p className={classes.diplomaContent}>
      In the light of the above Kakaraparti Bhavanarayana College to fulfil its motto and all round personality of the students and freeing oneself from the predicaments and evolving as person with free soul is imparting yoga through Physical Education department. We wish this endeavour in yoking mind with soul will go long way in shaping the life of our students.
    </p>
    <p className={classes.diplomaHeading}>About Yoga</p>
    <p className={classes.diplomaContent}>
      The word yoga is derived from a Sanskrit word “YUG” means ‘Uniting’. The main aim of yoga is to unite our mind with our body. This is possible through the practice of asana, pranayama, meditation and mudra. Yoga is not a religion, nor a philosophical doctrine. It is wisdom of life. It is an experience. It elevates the thoughts and ideas of a person. Yoga is a method of training the mind to realize the hidden powers wihin us. It is the science of evolution. The science of yoga begins to work on physical body first. Yoga aims at bringing the different body function into perfect coordination, So that they work for the good of whole body. From the physical body yoga moves on to the mental and emotional levels. Through the regular practise of yoga, awareness develops. Gradually this awareness leads to balance the emotional, mental and physical levels, thus helping one to lead a happy life.
    </p>
    <p className={classes.diplomaHeading}>History of Yoga</p>
    <p className={classes.diplomaContent}>
      The yoga we know today was developed as a part of the tantric civilization which existed in India and all parts of the world more than ten thousand years ago. In archaeological excavations made in Indus valley at HARAPPA and MOHENJODARO, now in modern Pakistan, many statues have found depiciting deities resembling Lord Shiva and Parvathi performing various asanas and practising meditation. According to mythical tradition, Shiva is said to be founder of yoga and Parvathi his first disciple. In ancient times, yoga techniques were kept secret and were never written down or exposed to public. They were passed on from teacher or guru to disciple by word of mouth ie, only orally transmission between master and disciple (guru-sishya parampara).
    </p>
    <p className={classes.diplomaContent}>Lord KRISHNA to VIVASVAT -&gt; VIVASVAT to MANU -&gt; MANU to IKSHVAKU.</p>
    <p className={classes.diplomaContent}>
      But such orally transmitted yoga tradition is lost in time and came in the form of books. Pathanjali guru wrote yoga sutras. Swami Matsyendranath wrote Hath Cult. Swami Swatmarama wrote Hatha yoga, Goraksha sataka, Goraksha paddhathi. We can see references of yoga in puranas also. ‘Brahma’ puranam gives 1st preference to yoga, then to Vedas Puranas & Ithihasas.
    </p>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>‘Padma’ puranam speaks of Kriya yoga.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>‘Vaayu’ puranam contains Maheswara yoga.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>‘Bhagavat’ Puranam speaks of Bhakti yoga.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>‘Linga’ puranam introduced 8 fold practice of yoga, which is called as Ashtanga yoga.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>‘Ashtanga’ yoga is also seen in Kurma, Garuda, Agni, Markandeya puranas.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <p className={classes.arrowwithContent}>Practice of Kundalini yoga is striking in Devi-bhagavata purana.</p>
    </div>
    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <a href="https://drive.google.com/file/d/1OknN6mo3xZlxNies60HtF_lRO21UieEx/view?usp=share_link" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Diploma in Yoga For Human Excellence(DYHE)</a>
    </div>

    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <a href="https://drive.google.com/file/d/1OknN6mo3xZlxNies60HtF_lRO21UieEx/view?usp=share_link" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>DIPLOMA IN COMPUER SCIENCE SYLLABUS</a>
    </div>

    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <a href="https://drive.google.com/file/d/1bJiMkke_C0c_fdbWVvAMkiZydjVBKE0L/view?usp=share_link" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>DIPLOMA IN DATA ANALYTICS SYLLABUS</a>
    </div>

    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <a href="https://drive.google.com/file/d/1U2LG6L7QETsqE-lPd_V3-2DTtZyFMqTt/view?usp=share_link" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>DIPLOMA IN DRONE PILOT SYLLABUS</a>
    </div>

    <div className={classes.objectivesContent}>
      <ArrowForwardIosIcon className={classes.arrowIcon} />
      <a href="https://drive.google.com/file/d/1kwj1LqnUUeMB70q4RQwBWiUGXuSyrDsi/view?usp=share_link" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>DIPLOMA IN EVENT MANAGEMENT SYLLABUS</a>
    </div>


  </div>;
};

export default Diploma;
