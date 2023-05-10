import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#07358a',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: '#bdbdbd87'
    }
  },
}))(TableRow);

function createTable1(sno, name, designation) {
  return { sno, name, designation };
}

const table1 = [
  createTable1(1, 'Dr. V. Narayana Rao', 'Principal –Chairman'),
  createTable1(2, 'Sri P. L. Ramesh', 'Vice-Principal –Vice-Chairman'),
  createTable1(3, 'Sri Vijayababu Tekkem', 'Vice-Principal –Vice-Chairman'),
  createTable1(4, 'Captain KPT Vijaya Bhaskar', 'Lecturer in Chemistry, Convenor'),
  createTable1(5, 'Sri Ch. Naga Bhushanam', 'Lecturer in Physics, Member'),
  createTable1(6, 'Sri D. Hema Chandra Rao', 'Physical Director, Member'),
  createTable1(7, 'Dr. N. Venkateswara Rao', 'Lecturer in Commerce, Member'),
  createTable1(8, 'Ms. Sk. Asiya Begum', 'Lecturer in Computers, Member'),
  createTable1(9, 'Cadet S. Anil Kumar', 'I B.Sc. (MPC), Student Member'),
  createTable1(10, 'Cadet K. Poorna Sai', 'I B.Sc. (MPC), Student Member'),
  createTable1(11, 'Cadet B. Emmanual', 'I B.Sc. (MSCS), Student Member'),
  createTable1(12, 'Cadet D. Charan', 'I B.Sc. (MSCS), Student Member'),
];

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NSS = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h2>NSS</h2>
      <h3>Year of Establishment: 1969</h3>
      <p>National Service Scheme, under the Ministry of Youth Affairs & Sports Govt. of India, popularly known as NSS was launched in the Honourable Mahatma Gandhi's Birth Centenary Year 1969, in 37 Universities involving 40,000 students with primary focus on the development of personality of students through community service. Today, NSS has more than 3.2 million student volunteers on its roll spread over 298 Universities and 42 (+2) Senior Secondary Councils and Directorate of Vocational Education all over the country. From its inception, more than 3.75 crores students from Universities, Colleges and Institutions of higher learning have benefited from the NSS activities, as student volunteers.
      </p>
      <p>
        National Service Scheme provides the students an opportunity to understand the community; identify its needs and problems as well as the solutions in which they can be involved by assuming social and civic responsibilities. NSS also provides students with the opportunity to apply their education in finding practical solutions to the problems faced by the individuals and the community at large. NSS aims at arousing social consciousness of the youth with an overall objective of personality development through community service. NSS enables students to participate in various programmes of social service and national development, and to help the community.
      </p>

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Click Here For Moto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <h2>MOTTO</h2>
            <p>The motto of NSS is - ‘Not Me But You’ - giving out the message to put others before oneself. It highlights the basic philosophy of NSS, which is the appreciation of other’s point of view and consideration of other living beings. NSS believes that the welfare of an individual lies in the welfare of the society and thus, the welfare of the society is the major objective of the NSS volunteers.</p>

            <h2>SYMBOL</h2>
            <p>The symbol of the National Service Scheme is based on the 'Rath' wheel of the Konark Sun Temple situated in Orissa. These giant wheels of the Sun Temple portray the cycle of creation, preservation and release, and signify the movement in life across time and space. The design of the symbol, a simplified form of the Sun-chariot wheel primarily depicts movement. The wheel signifies the progressive cycle of life. It stands for continuity as well as change and implies the continuous striving of NSS for social transformation and upliftment.</p>

            <h2>Themes of the programme</h2>
            <p>in the past the themes of the Special Camping Programmes have been 'Youth Against Famine', 'Youth Against Dirt and Disease', 'Youth for Rural Reconstruction', 'Youth for Eco-Development', 'Youth for Mass Literacy', 'Youth for National Integration &amp; Social Harmony', 'Youth for Sustainable Development with special focus on Watershed Management and Wasteland Development'</p>

            <h2>NSS Manual</h2>
            <ul className="kbn_bulletpoints">
              <li>Orientation of students in national problems.</li>
              <li>Study of philosophy of NSS.</li>
              <li>Basic concepts and components of NSS</li>
              <li>National sercive scheme ( NSS) volunteers.</li>
              <li>Special camping programme.</li>
              <li>Fundamental rights, Directive principles of state policy.</li>
              <li>Awareness programme, Consumer awareness, Highlights of consumer act.</li>
              <li>Function literacy non formal education of rural youth.</li>
              <li>Environment enrichment and conservation.</li>
              <li>Brief of five year plans</li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>Details of the Convenor:</h2>
            <p>V.SESHAGIRIRAO<br />Convener<br />LECTURER, DEPARTMENT OF COMMERCE<br />Number, Mail id: 9705347432</p>
            <h2>List of Members in the Cell</h2>
            <ul className="kbn_bulletpoints">
              <li>Sri.Dr. V. Narayana Rao, Principal – FAC &amp; Chairman</li>
              <li>Sri J. Panduranga Rao, Vice – Chairman</li>
              <li>Sri V.Seshagiri Rao, Lecturer, DEP OF COMMERCE, Programme officer Unit-2,   Convener</li>
              <li>Sri M.sambasiva Rao,  HOD, Physical Education, Programme officer Unit-1,   Convener</li>
              <li>DR B.Ramaiah, HOD, DEP OF COMMERCE, Member</li>
              <li>Sri K.SivaprakasaRao, Lecturer, DEP OF COMMERCE, Member</li>
            </ul>
            <hr />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Plantation Programmes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>
              <li><a href="attachments/nss/5.6.2019-PLANTATION PROGRAMME.pdf" target="_blank">Plantation Programme (In view of World Environment Day)(In association with Happy Hills) on 5th June, 2019</a></li>
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2018-2019</h2>
              <li><a href="attachments/nss/Plants distribution Programme 31.7.2018.pdf" target="_blank">Plants Distribution Programme on 31<sup>st</sup> July, 2018.</a></li>
              <h2 className="dept_sidehdng">Previuos Years</h2>
              <li><a href="attachments/nss/1-19.7.2017.pdf" target="_blank">Tree Plantation Programme on 19th July 2017.</a></li>
              <li><a href="attachments/nss/2-15.7.2017.pdf" target="_blank">Plantation Programme on Vanam Manam on 15th July 2017.</a></li>
              <li><a href="attachments/nss/3-26.7.2015.pdf" target="_blank">Plantation Programme on 26th July, 2015</a></li>
              <li><a href="attachments/nss/4-27.8.2014.pdf" target="_blank">Plantation of Saplings on 27th August,2014</a></li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Medical Camps</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2020-2021</h2>
              <li>
                <a href="">A Mega Health Camp on ‘Eye Check’ in association with Amarvathi Hospital, Vijayawada on 24th February, 2021.
                </a>
              </li>

              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>
              <li><a href="attachments/nss/24.9.2019-MEGA EYE CAMP.pdf" target="_blank">MEGA EYE CAMP (In association with Akshaya Eye Hospitals, Vijayawada) on 24th September, 2019</a></li>

              <h2 className="dept_sidehdng">Previuos Years</h2>
              <li><a href="attachments/nss/1-1.9.2017.pdf" target="_blank">Dental camp on 1st September 2017.</a></li>
              <li><a href="attachments/nss/2-14.5.2015.pdf" target="_blank">Medical Camp on 14th May, 2015</a></li>
              <li><a href="attachments/nss/3-20.12.2014.pdf" target="_blank">Medical Camp on 20th December, 2014</a></li>
              <li><a href="attachments/nss/4-23.3.2014.pdf" target="_blank">Mega Medical Camp on 23rd March, 2014</a></li>
              <li><a href="attachments/nss/5-27.11.2013.pdf" target="_blank">Free Eye Medical Camp on 27th November, 2013</a></li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Awareness Programmes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div id="demo3" className="collapse">
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2020-2021</h2>
              <ul className="kbn_bulletpoints">
                <li><a href="attachments/nss/CANCER AWARENESS PROGRAMME-4.2.pdf">Awareness Programme on ‘Cancer’ on the occasion of World Cancer Day on 4th February, 2021. Chief Guest: Dr. Rajesh Kota, Oncology, American Oncology Institute, Vijayawada.</a>
                </li>

                <li><a href="attachments/nss/ROAD SAFETY WEEK - 30.1.pdf">Awareness Programme on ‘Traffic’ with Police Department on 30th January, 2021. Resource Persons: Sri R. Ramachandra Rao, ACP, Traffic-I, Sri M. Sudhakar, CI, Traffic-I, Sector-I, Sri MD. Umar, CI, II Town Police Station.</a></li>

                <li><a href="">11th National Voters Day Celebrations on 25th January, 2021. Chief Guest: Ms. A Charitra Varshini, Deputy Collector, Vijayawada. </a></li>

                <li><a href="attachments/nss/ANTI-DRUG AWARENESS PROGRAMME & RALLY-19.12.pdf">Anti-Drug Drive Programme in view of Anti-Drug Awareness Week in association with AP Task Force on 19th December, 2020. Resource Persons: Dr. K. V. Srinivasa Rao, A.D.C.P, Task Force and Dr. P. Krishna Das, Psychiatrist. </a>
                </li>

                <li><a href="attachments/nss/ANTI-DRUG AWARENESS PROGRAMME & RALLY-19.12.pdf">Organized Rally in ‘Anti-Drug’ with Police Department on 18th December, 2020..</a>
                </li>

                <li><a href="attachments/nss/YOGA DAY CELEBRATIONS-21.06.2020.pdf">Yoga Awareness Programme (Webinar) on 21st June, 2020 was organized by Department of Physical Education & NSS. Resource Person: Mr. N. Sambasiva Rao, In-Charge, HVPE.</a>
                </li>
                <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>
                <li><a href="attachments/nss/1-AWARENESS PROGRAMME ON RIGHT TO INFORMATION ACT-12.12.2019.pdf" target="_blank">AWARENESS PROGRAMME ON RIGHT TO INFORMATION ACT-12.12.2019 </a> </li>

                <li><a href="attachments/nss/NSS REPORT ON 30-11-2019.pdf" target="_blank">NSS REPORT ON 30-11-2019</a> </li>
                <li><a href="attachments/nss/1-2.10.2019-GANDHI JAYANTHI.pdf" target="_blank">Awareness Programme on “Mahatma Gandhi Jayanthi” Organised by National Service Scheme 2<sup>nd</sup> October,2019 </a> </li>
                <li><a href="attachments/nss/2-28.9.2019-WORLD HEART DAY.pdf" target="_blank">Awareness Programme on
                  “World Heart Day” Organised by National Service Scheme 28 <sup>th</sup> September, 2019 </a> </li>

                <li><a href="attachments/nss/27.9.2019-RALLY ON PLASTIC AWARENESS.pdf" target="_blank">Rally on “Plastic Eradication” on 27th September, 2019.</a></li>
                <li><a href="attachments/nss/14.9.2019-FIRST AID.pdf" target="_blank">Awareness Programme on
                  “World First Aid Day” Organised by: National Service Scheme 14th September, 2019 </a> </li>

                <li><a href="attachments/nss/13.9.2019-ROAD SAFETY AWAR. PROGRMME.pdf" target="_blank">Awareness Programme on
                  “Road Safety” Organised by: National Service Scheme 13th September, 2019 </a> </li>

                <li><a href="attachments/nss/14.8.2019-YOUTH DAY.pdf" target="_blank">Awareness Programme on
                  “INTERNATIONAL YOUTH DAY” Organised by: National Service Scheme (In association with Department of Youth Advancement) On  14th
                  August, 2019 </a> </li>
                {/* <li><a href="attachments/nss/29.7.2019-WATER CONSERVATION PLEDGE.pdf" target="_blank">
                  Awareness Programme on “Water Conservation” (In association with Jal Shakti Abhiyan) on 29th July, 2019
                </a><li> */}


                <li><a href="attachments/nss/26.6.2019-ANTI - DRUG ILLICT TRAFFICKING.pdf" target="_blank">Awareness Programme On
                  “International Anti-Drug & Illicit Trafficking Day” Organised by: National Service Scheme 26 th June, 2019 </a> </li>

                <li><a href="attachments/nss/17.6.2019-INTERNATIONAL KARATE DAY.pdf" target="_blank">
                  “International World Karate Day” on 17th June 2019.</a></li>
              </ul>

              <h2 className="dept_sidehdng">Previuos Years</h2>
              <ul>
                <li><a href="attachments/nss/1-Road Safety Awareness Prgm - 15.12.2018.pdf" target="_blank">Traffic Awareness Programme on “Road Safety – Traffic Awareness” on 15<sup>th</sup> December, 2018.</a></li>
                <li><a href="attachments/nss/2-Traffic Awa. Prgm-19.9.2018.pdf" target="_blank">Awareness Programme on “Road Safety – Traffic Awareness” on 19<sup>th</sup> September, 2018.</a></li>
                <li><a href="attachments/nss/3-Traffic & Anti - Ragging Awareness prgm 28.7.2018.pdf" target="_blank">Student Seminar on “Ragging Free Educational Institutions & Traffic Awareness” on 28<sup>th</sup> July, 2018.</a></li>
                <li><a href="attachments/nss/4-ALLURI SEETHA RAMA RAJU - 4.7.2018.pdf" target="_blank">Birth Anniversary of Sri Alluri Seetha Rama Raju, Indian Freedom Fighter on 4<sup>th</sup> July, 2018</a></li>
                <li><a href="attachments/nss/5-IMP. OF STEM CELLS - 20.06.2018.pdf" target="_blank">Awareness programme on “Importance of Stem Cells” on 20<sup>th</sup> June, 2018.</a></li>

                <li><a href="attachments/nss/1-25.1.2018.pdf" target="_blank">Voter’s day Celebrations on 25th January 2018</a></li>
                <li><a href="attachments/nss/2-12.1.2018.pdf" target="_blank">Awareness programme on “Skill Development” in view of Swamy Viveka Nanda Birth Anniversary on 12th January, 2018</a></li>
                <li><a href="attachments/nss/3-15.11.2017.pdf" target="_blank">Programme on “Legal Awareness” on 15th November 2017</a></li>
                <li><a href="attachments/nss/4-1-11-17-vigilence.pdf" target="_blank">Awareness programme on “My Vision-Corruption free India” in view of Vigilance Awareness Week on 1st November 2017</a></li>
                <li><a href="attachments/nss/5-31.10.2017.pdf" target="_blank">National Unity Day in view of Sardhar Vallabhbhai Patel Birth Anniversary Celebrations on 30th October 2017</a></li>
                <li><a href="attachments/nss/6-30.-1.9.2017.pdf" target="_blank">Three day workshop on “Disaster Management Training” from 30th August to 1st September 2017.</a></li>
                <li><a href="attachments/nss/7-29.08.17.pdf" target="_blank">Awareness programme on “Seasonal Diseases” and Homeo pills distribution on 29th August 2017.</a></li>
                <li><a href="attachments/nss/8-11&12.08.17.pdf" target="_blank">Awareness programme on “Rally for Rivers” on 11th & 12th August 2017</a></li>
                <li><a href="attachments/nss/9-20.7.2017.pdf" target="_blank">Awareness programme on “Voter Registration” on 20th July 2017</a></li>
                <li><a href="attachments/nss/10-21.6.2017.pdf" target="_blank">International Yoga Day Celebrations on 21st June 2017.</a></li>
                <li><a href="attachments/nss/11-2.6.2017.pdf" target="_blank">Navanirmana Deeksha on 2nd June 2017.</a></li>
                <li><a href="attachments/nss/12-20.02.2017.pdf" target="_blank">900 Kgs. Rice Donation to Orphan Charitable Trusts under Cheyutha on 20th February, 2017.</a></li>
                <li><a href="attachments/nss/13-25.1.2017.pdf" target="_blank">Awareness Programme on “Voters Day” on 25th January, 2017</a></li>
                <li><a href="attachments/nss/14-11.1.17.pdf" target="_blank">Awareness Programme on “Digital Transaction &  E-Payment” on  11th January 2017</a></li>
                <li><a href="attachments/nss/15-2.12.2016.pdf" target="_blank">National Pollution Prevention Day on 2nd December, 2016.</a></li>
                <li><a href="attachments/nss/16-30.11.16.pdf" target="_blank">Awareness Programme on “Heart Care” on 30th November, 2016</a></li>
                <li><a href="attachments/nss/17-31.10.16.pdf" target="_blank">National Unity Day in view of Sardhar Vallabhbhai Patel Birth Anniversary Celebrations on 31st October 2016</a></li>
                <li><a href="attachments/nss/18-8.10-2016.pdf" target="_blank">Financial Aid to our Watchman under Cheyutha on 8th October, 2016.</a></li>
                <li><a href="attachments/nss/19-30.9..2016.pdf" target="_blank">Awareness Programme on “Seasonal Diseases” on 30th September 2016</a></li>
                <li><a href="attachments/nss/20-30.07.2016.pdf" target="_blank">Awareness Programme on “Krishna Pushkaralu – 2016” on 30th July, 2016</a></li>
                <li><a href="attachments/nss/21-01.07.2016.pdf" target="_blank">Awareness programme on “Legal Acts” on 1st July 2016</a></li>
                <li><a href="attachments/nss/22-21-23.6.2016.pdf" target="_blank">International Yoga Day Celebrations and Training Classes for Staff and Students from 21st to 23rd June, 2016.</a></li>
                <li><a href="attachments/nss/23-1.2.2016.pdf" target="_blank">Awareness Programme on “Legal Acts” on 1st February, 2016.</a></li>
                <li><a href="attachments/nss/24-25.1.2016.pdf" target="_blank">National Voter’s Day Celebrations on 25th January, 2016</a></li>
                <li><a href="attachments/nss/25-28.10.2015.pdf" target="_blank">Awareness Programme on “Seasonal Diseases” on 28th October, 2015</a></li>
                <li><a href="attachments/nss/26-30.7.2015.pdf" target="_blank">Financial aid for medical expenses to our Student M. Srikanth on 30th July, 2015</a></li>
                <li><a href="attachments/nss/27-21.6.2015.pdf" target="_blank">International Yoga Day Celebrations on 21st June, 2015</a></li>
                <li><a href="attachments/nss/28-5.2.2015.pdf" target="_blank">Awareness Programme on “Swine Flu” on 5th February, 2015</a></li>
                <li><a href="attachments/nss/29-11.11.2014.pdf" target="_blank">Awareness programme on ‘Adolescent Healthcare’ on 11th November, 2014</a></li>
                <li><a href="attachments/nss/30-2.11.2014.pdf" target="_blank">Fund Donation to C.M Relief Fund on 2nd November, 2014</a></li>
                <li><a href="attachments/nss/31-31.10.2014.pdf" target="_blank">National Unity Day in view of Sardhar Vallabhbhai Patel Birth Anniversary Celebrations on 31st October 2014</a></li>
                <li><a href="attachments/nss/32-18.10.2014.pdf" target="_blank">Fund Donation on 18th October, 2014</a></li>
                <li><a href="attachments/nss/33-17.9.2014.pdf" target="_blank">Awareness Programme on “Seasonal Diseases” on 17th September, 2014</a></li>
                <li><a href="attachments/nss/34-26.8.2014.pdf" target="_blank">Awareness Programme on “Organ Donation” on 26th August, 2014</a></li>
                <li><a href="attachments/nss/35-16.8.2014.pdf" target="_blank">Training Programme on “First Aid” on 16th August, 2014.</a></li>
                <li><a href="attachments/nss/36-25.1.2014.pdf" target="_blank">National Voter’s Day Celebrations on 25th January, 2014</a></li>
                <li><a href="attachments/nss/37-21.1.2014.pdf" target="_blank">Awareness Programme on “Road Safety” in view of 25th Road safety               Week on 21st January, 2014</a></li>
                <li><a href="attachments/nss/38-7.9.2013.pdf" target="_blank">International Literacy Day on 7th September, 2013</a></li>
                <li><a href="attachments/nss/39-29.7.2013.pdf" target="_blank">Awareness on Oral Rehydration Solution (ORS) on 29th July, 2013</a></li>
              </ul>

            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Swachh Bharat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">

              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>

              <li><a href="attachments/nss/15.9.2019-SWATCH BHARATH PROGRAMME.pdf" target="_blank">Swachh Bharat” Programme on 15th September, 2019  </a></li>

              <li><a href="attachments/nss/2.7.2019-SWATCH BHARATH PROGRAMME.pdf" target="_blank">Awareness Programme on “Swachh Bharat & Swachh Vijayawada” on 2nd July, 2019  </a></li>

              <li><a href="attachments/nss/1-Clean city - green city-4.1.2019.pdf" target="_blank">Clean City – Green City” on 4th January, 2019</a></li>

              <h2 className="dept_sidehdng">Previuos Years</h2>

              <li><a href="attachments/nss/2-Swatch Bharath Prgm-2.12.2018.pdf" target="_blank">Swatch Bharath Programme in and around the College Campus on 2nd December, 2018.</a></li>

              <li><a href="attachments/nss/1-17.6.2015.pdf" target="_blank">Swachh Bharat Programme on 17th June, 2015</a></li>
              <li><a href="attachments/nss/2-12.11.2014.pdf" target="_blank">Swachh Bharat Programme on 12th November, 2014</a></li>
              <li><a href="attachments/nss/3-1.11.2014.pdf" target="_blank">Swachh Bharat Programme on 1st November, 2014</a></li>
              <li><a href="attachments/nss/4-11.8.2013.pdf" target="_blank">Swachh Bharat Programme on 11th November, 2013</a></li>

            </ul>

          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel6' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Guest Lectures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>

              <li><a href="attachments/nss/10.10.2019-WORLD MENTAL HEALTH DAY.pdf" target="_blank"> Programme on “World Mental Health Day” on 10th October, 2019.</a></li>

              <h2 className="dept_sidehdng">Previous Years</h2>
              <li><a href="attachments/nss/1-GANDHIAN VALUES - 30.11.2018.pdf" target="_blank">Student Seminar on “Gandhian Values for the Youth Development” on 30th November, 2018.</a></li>
              <li><a href="attachments/nss/2-World Suicide prevention day.pdf" target="_blank">Guest Lecture on “Suicide Prevention” in view of “World Suicide Prevention Day” on 10th September, 2018.</a></li>

              <li><a href="attachments/nss/1-22.09.2017.pdf" target="_blank">Guest Lecture on “Art of Living” on 22nd September 2017</a></li>
              <li><a href="attachments/nss/2-23.08.2017.pdf" target="_blank">Guest Lecture on “Legal Awareness” on 23rd August 2017</a></li>
              <li><a href="attachments/nss/3-24.11.16.pdf" target="_blank">Guest Lecture on “Sound Mind & Healthy Life” 24th November, 2016</a></li>
              <li><a href="attachments/nss/4-27.07.16.pdf" target="_blank">Guest Lecture on the role of youth in Nation Building and Corruption Free society on 27th July. 2016</a></li>
              <li><a href="attachments/nss/5-14.7.2015.pdf" target="_blank">Guest Lecture on “Super Power Memory” on 14th July, 2015 </a></li>

            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel7' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Special Camps at Adopted Villages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">
              <h2 className="dept_sidehdng">Previuos Years</h2>
              <li><a href="attachments/nss/1.pdf" target="_blank">Special Social Service camp from 14th February to 20th February, 2018</a></li>
              <li><a href="attachments/nss/2.pdf" target="_blank">Special Social Service camp from 27th January to 2nd February, 2017</a></li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel8' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Voluntary Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">

              <h2 className="dept_sidehdng">ACADEMIC YEAR 2020-2021</h2>

              <li><a href="">Food Distribution Programme to the police officials at various places in Vijayawada during Dassara Festival in October, 2020.</a></li>
              <li><a href="attachments/nss/nss.pdf">Pilgrims in the installation of Kanaka Durga Amma App on the eve of Sravana Sukravaram,Varalakshmi Vratham on 31st July, 2020 at Indrakeeladri</a></li>

              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>

              <li><a href="attachments/nss/DUSSEHRA CAMP - 2019-20.pdf" target="_blank">Service activity during Dussehra at Sri Durga Malleswara Swamy Varla Devasthanam from 29-09-2019 to 08-10-2019.</a></li>

              <h2 className="dept_sidehdng">Previuos Years</h2>
              <li><a href="attachments/nss/1-Elections - 2019-.pdf  " target="_blank">NSS Volunteers rendered their services in Elections – 2019 in and around Vijayawada</a></li>
              <li><a href="attachments/nss/3-Dasara - 10.10.2018-19.10.20177.pdf" target="_blank">NSS Volunteers rendered their service at Sri Durga Malleswara Swamy Varla Devasthanam, Indrakeeladri, Vijayawada in view of Bhavani Deeksha Viramanalu from 29th December, 2018 to 2nd January, 2019</a></li>
              <li><a href="attachments/nss/3-Dasara - 10.10.2018-19.10.2018.pdf" target="_blank">NSS Volunteers rendered their service at Sri Durga Malleswara Swamy Varla Devasthanam, Indrakeeladri, Vijayawada in view of Dasara from 10th to 19th October, 2018.</a></li>

              <li><a href="attachments/nss/1a.pdf" target="_blank">Voluntary Service during Bhavini Deeksha Viramana from 10th to 14th December 2017.</a></li>
              <li><a href="attachments/nss/2a.pdf" target="_blank">Voluntary services during Dasara festival at Sri Durga Malleswara Swamy temple, on Indra Keelaradri from 21st to 30th September 2017</a></li>
              <li><a href="attachments/nss/3.pdf" target="_blank">Voluntary Service during Bhavini Deeksha Viramana on December, 2016</a></li>
              <li><a href="attachments/nss/4.pdf" target="_blank">Voluntary Service during Dasara Festival from 6th Oct. to 14th Oct. 2016.</a></li>
              <li><a href="attachments/nss/5.pdf" target="_blank">Voluntary Service during Krishna Pushkaralu from 12th to 23rd August 2016.</a></li>
              <li><a href="attachments/nss/6.pdf" target="_blank">Voluntary Service during Bhavini Deeksha Viramana from 31st December, 2015 to 4th January, 2016.</a></li>
              <li><a href="attachments/nss/7.pdf" target="_blank">Voluntary Service during Dasara Festival from 13th to 23rd October, 2015.</a></li>
              <li><a href="attachments/nss/8.pdf" target="_blank">Voluntary Service during Godavari Pushkaralu from 14th to 25th July, 2015</a></li>
              <li><a href="attachments/nss/9.pdf" target="_blank">Voluntary Service during Bhavini Deeksha Viramana from 12th to 16th December, 2014.</a></li>
              <li><a href="attachments/nss/10.pdf" target="_blank">Voluntary Service during Dasara Festival from 25th September to 3rd October, 2014	</a></li>
              <li><a href="attachments/nss/11.pdf" target="_blank">Voluntary Service during Bhavini Deeksha Viramana from 22nd to 28th December, 2013.</a></li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel9' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Awareness Programmes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="kbn_bulletpoints">
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2020-2021</h2>

              <li><a href="">Community Awareness Programme by Dr. S. Chand Basha, Lecturer in Zoology, KBNC, on ‘Hand Wash’ in view of National Deworming Day at Annapurna Devi Muncipal High School on 10th February, 2021.</a></li>
              <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>

              <li><a href="attachments/nss/1-VOTERS DAY-25.1.2019.pdf" target="_blank">Awareness Programme on “Importance of Vote” in view of National Voter’s Day on 25th January, 2019</a></li>

              <li><a href="attachments/nss/2-National Youth Day.pdf" target="_blank">National Youth Day was observed & celebrated in view of Swami Vivekananda Birth Anniversary Celebrations on 12th January, 2019</a></li>

              <li><a href="attachments/nss/AWARENESS PROGRAMME ON DISASTER MANAGEMENT - 9.11.pdf" target="_blank">Awareness Programme on “Disaster Management” Organised by: National Service Scheme On 9<sup>th</sup>November, 2019</a></li>
              <li><a href="attachments/nss/AWARENESS PROGRAMME ON JOINING HANDS WITH POLICE FOR BETTER SOCIETY - 19.10.2019.pdf" target="_blank">Awareness Programme on “Joining Hands with Police for Better Society ” Organised by: National Service Scheme On 19<sup>th</sup>October,2019</a></li>

              <h2 className="dept_sidehdng">PREVIOUIS YEARS</h2>
              <li><a href="attachments/nss/awp/1.%2019-09-2018.pdf" target="_blank">Traffic Awareness Programme on 19<sup>th</sup> September, 2018 organized by National Service Scheme. Resource Person: Sri Murali Krishna, West ACP (Traffic) &amp; Sri Rajendra Prasad, CI (Traffic).</a></li>
              <li><a href="attachments/nss/awp/2.%2011-9-18.pdf" target="_blank">Awareness Programme on &ldquo;Suicide Prevention&rdquo; (In view of World Suicide Prevention Day) on 11<sup>th</sup> September, 2018. Resource Person: Dr. R. K. Ayodhya, Psychiatrist, Vijayawada</a></li>
              <li><a href="attachments/nss/awp/3.%208-9-18.pdf" target="_blank">World Literacy Day on 8<sup>th</sup> September, 2018. Resource Person: Dr. D. Ramanjaneya Sarma, Regional Director, IGNOU, Vijayawada.</a></li>
              <li><a href="attachments/nss/awp/4.%2028-7-18.pdf" target="_blank">Traffic &amp; Anti &ndash; Ragging Awareness Programme on 28<sup>th</sup> July, 2018 organized by NSS.</a></li>
              <li><a href="attachments/nss/awp/5.%2021-06-18.pdf" target="_blank">International Yoga Day Celebrations on 21<sup>st</sup> June, 2018 organized by NSS Units. Resource Person: Sri T.V.V.R. Gandhi, president, Patanjali Yoga Samithi, AP.</a></li>

              <li><a href="attachments/nss/3-constitutional Day - 26.11.2018.pdf" target="_blank">Constitutional Day on 26th November, 2018</a></li>

              <li><a href="attachments/nss/4-World Literacy Day.pdf" target="_blank">Awareness Programme on “Literacy” in view of World Literacy Day on 8th September, 2018</a></li>

              <li><a href="attachments/nss/5-YOGA DAY - 21.6.2018.pdf" target="_blank">International Yoga Day Celebrations on 21st June, 2018. </a></li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <h3>List of members in the list</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3} align="center">NSS COMMITTEE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.designation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NSS;
