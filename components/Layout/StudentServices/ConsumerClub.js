import React from 'react';
import { Divider } from "@material-ui/core"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ConsumerClub = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h2>Consumer Club</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Name of the Cell:</h4>
        <p style={{ marginLeft: '1rem' }}>KBN College Consumer Club</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Year of Establishment:</h4>
        <p style={{ marginLeft: '1rem' }}>22.03.2017</p>
      </div>

      <p>Importance / Purpose of the Club:</p>
      <ul>
        <li>protecting consumers interests, creating a pro-active consumer protection regime in the society.</li>
        <li>Involving students in the activities like sensitisation and Awareness Programmes, Poster Presentations, Seminars, Projects, Workshops, Exhibitions, Debates and Rallies on Consumer Rights.</li>
        <li>Display posters on Consumer Rights in the college premises to promote awarness in the college.</li>
        <li>Invite Guest Lectures by subject experts.</li>
        <li>Include the Consumer Protection Act, 1986 as a subject in UG/PG courses.</li>
        <li>Guide and Assist the students and the society in filing the grievances at local Consumer Forum.</li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Guidelines:</h4>
        <p style={{ marginLeft: '1rem' }}>As per the guidelines of the Consumer Protection Act, 1986.</p>
      </div>

      <div>
        <h3>Details of the Co-ordinator:</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>Name:</h4>
          <p style={{ marginLeft: '1rem' }}>Vijayababu Tekkem</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>Designation:</h4>
          <p style={{ marginLeft: '1rem' }}>Lecturer</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>Department:</h4>
          <p style={{ marginLeft: '1rem' }}>Commerce & Management</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>Phone Number:</h4>
          <p style={{ marginLeft: '1rem' }}>9440618287</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>Mail-id:</h4>
          <p style={{ marginLeft: '1rem' }}>vijayababu_tekkem@yahoo.com</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4>List of Members in the Club:</h4>
          <p style={{ marginLeft: '1rem' }}>50 Student Members from Degree</p>
        </div>
      </div>

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Click Here For Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="kbn_bulletpoints">

              <li><a href="attachments/consumer/LEGAL AWARENESS PROGRAMME-22.02 (2).pdf" target="_blank">Guest Lecture on “Legal Awareness” on 22nd February, 2020</a></li>
              <li><a href="attachments/consumer/1-GUEST LECTURE - 28.12.2019.pdf" target="_blank">Guest Lecture on “Consumer Awareness” on 28th December,2019.</a></li>
              <li><a href="attachments/consumer/2-GUEST LECTURE - 25.9.2019.pdf" target="_blank">Guest Lecture on “The Consumer Protection Act, 1986” on 25th September 2019.</a></li>
              <li><a href="attachments/consumer/3-SCIENCE EXPO-21-23.8.2019.pdf" target="_blank">Science Expo – 21st to 23rd August, 2019.</a></li>
              <li><a href="attachments/consumer/4-CONSU.AWA.CLASS-2-7-2019.pdf" target="_blank">Consumer Awareness Classes to All Degree Students from 2nd to 7th July, 2019.</a></li>
              <li><a href="attachments/consumer/5-WORLD CONSUMER RIGHTS DAY-15.3.2019.pdf" target="_blank">World Consumer Rights Day on 15th March, 2019.</a></li>
              <li><a href="attachments/consumer/6-VIGILANCE AWARENESS WEEK-30.10.2018.pdf" target="_blank">Vigilance Awareness Week (Eradicate Corruption - “Build a New India & A New Andhra Pradesh” – A Better Society) on 30th October, 2018.</a></li>
              <li><a href="attachments/consumer/7-CONSUMER AWAR.CLASSES-2.7.2019.pdf" target="_blank">Consumer Awareness Classes to All Degree Students from 2nd to 7th July, 2018.</a></li>
              <li><a href="attachments/5.%2015%20MARCH%202018%20World%20Consumer%20Rights%20Day.pdf" target="_blank">World Consumer Right Day</a></li>
              <li><a href="attachments/4.%2024%20DECEMBER%202017%20National%20Consumer%20Day.pdf" target="_blank">National Consumer Day-Consumer Awareness Rally</a></li>
              <li><a href="attachments/3.%2023%20AUGUST%202017%20Guest%20Lecture%20on%20Legal%20Awareness.pdf" target="_blank">Guest Lecture on Legal Awareness</a></li>
              <li><a href="attachments/2.%203%20TO%208%20JULY%202017%20Consumer%20Awareness%20Classes%20to%20All%20Degree%20Students.pdf" target="_blank">Consumer Awareness Classes</a></li>
              <li><a href="attachments/1.%2022%20MARCH%202017%20Inauguration%20of%20KBN%20College%20Consumer%20Club.pdf" target="_blank">Inauguration of KBN College Consumer Club-Consumer Awareness Meeting</a></li>

            </ul>
          </Typography>

        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default ConsumerClub;
