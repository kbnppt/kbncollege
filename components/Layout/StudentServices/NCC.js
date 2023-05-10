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

function createData(sno, name, designation, from, photo) {
  return { sno, name, designation, from, photo };
}

function demoData(sno, name, from, to, participated) {
  return { sno, name, from, to, participated };
}

const rows = [
  createData(1, 'Dr. V. Narayana Rao', 'Principal –Chairman'),
  createData(2, 'Sri P. L. Ramesh', 'Vice-Principal –Vice-Chairman'),
  createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal –Vice-Chairman'),
  createData(4, 'Captain KPT Vijaya Bhaskar', 'Lecturer in Chemistry, Convenor'),
  createData(5, 'Sri Ch. Naga Bhushanam', 'Lecturer in Physics, Member'),
  createData(6, 'Sri D. Hema Chandra Rao', 'Physical Director, Member'),
  createData(7, 'Dr. N. Venkateswara Rao', 'Lecturer in Commerce, Member'),
  createData(8, 'Ms. Sk. Asiya Begum', 'Lecturer in Computers, Member'),
  createData(9, 'Cadet S. Anil Kumar', 'I B.Sc. (MPC), Student Member'),
  createData(10, 'Cadet K. Poorna Sai', 'I B.Sc. (MPC), Student Member'),
  createData(11, 'Cadet B. Emmanual', 'I B.Sc. (MSCS), Student Member'),
  createData(12, 'Cadet D. Charan', 'I B.Sc. (MSCS), Student Member'),
];

const demoTable = [
  demoData(1, 'Dasara Camp', '16-10- 12', '19-10- 12', '35'),
  demoData(2, 'Blood Donation ( KBN Foundation Day)', '6-11- 12', '', '10'),
  demoData(3, 'Communal Harmony', '25-10- 12	', '', '08'),
  demoData(4, 'Army Attachment Camp Secunderabad', '15-11- 12', '30-11- 12', '05'),
  demoData(5, 'ATC – VII, Nuzivid', '01-12- 12', '10-12- 12', '40'),
  demoData(6, 'Bhavanideeksha virmana', '27-12- 12', '08-01- 13	', '20'),
  demoData(7, 'Special Republic day parade', '26-01- 13	', '', '35'),
]

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NCCComponent = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h2>NCC</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Name of the Cell:</h4>
        <p style={{ marginLeft: '1rem' }}>KBN COLLEGE 93 CoY 17 (A) BN NCC (Army Wing)</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Year of Establishment:</h4>
        <p style={{ marginLeft: '1rem' }}>1965</p>
      </div>

      <h2 className="dept_sidehdng">Our Motto:</h2>
      <ul className="kbn_bulletpoints">
        <li>Unity and Discipline</li>
      </ul>
      <h2 className="dept_sidehdng">Aim Of NCC:</h2>
      <ul className="kbn_bulletpoints">
        <li>Developing character, camaraderie, discipline, secular outlook, the spirit of adventure and the ideals of selfless service amongst the young citizens</li>
        <li>Creating a pool of organised, trained and motivated youth with leadership qualities in all walks of life, who will serve the nation regardless of which career they choose</li>
        <li>Provide an environment condusive to motivate young Indians to choose the Armed Forces as a career</li>
      </ul>
      <h2 className="dept_sidehdng">Vision:</h2>
      <ul className="kbn_bulletpoints">
        <li>Empower volunteer youth to become potential leaders and responsible citizens of the country</li>
      </ul>
      <h2 className="dept_sidehdng">Mission:</h2>
      <ul className="kbn_bulletpoints">
        <li>To develop leadership and character qualities, mould discipline and nurture social integration and cohesion through multi-faced programmes conducted in a military environment</li>
      </ul>
      <h2 className="dept_sidehdng">Why join the NCC?:</h2>
      <ul className="kbn_bulletpoints">
        <li><span> </span>NCC stands for the National Cadets Corps which is the Indian military cadet corps. <span>Initially <strong>NCC</strong> was started in 15th July, 1948 to rise the youth of India in several fields to support Indian defense forces during the war period.</span></li>
        <li>To get basic education of military training, this helps them in finding out whether they are suitable to pursue nation&rsquo;s security as their career in the future.</li>
        <li>To take the leadership role at the very young age.</li>
        <li>To participate in activities like social service, community development, Sports, Cultural events etc. for their all-round development.</li>
        <li>To imbibe intangible qualities like brotherhood, leadership, honesty, integrity, communication skills, decision making capabilities and time management.</li>
        <li>Being part&nbsp; of&nbsp; NCC&nbsp; one&nbsp; gets&nbsp; chance&nbsp; to&nbsp; attend&nbsp; various&nbsp; camps&nbsp; like&nbsp; DC, CATC, NIC, TSC, BLC,&nbsp; ALC,TREK,YEP etc. which prepare the cadets to face challenges in life.</li>
        <li>NCC prepares you for life - not just to take up career in Armed forces, but let it be any field you go.</li>
        <li>One can definitely see great change in once attitude once you complete your NCC training.</li>
        <li>NCC definitely adds value to your CV wherever you go.</li>
      </ul>
      <h2 className="dept_sidehdng">HOW TO JOIN THE NCC?</h2>
      <ul className="kbn_bulletpoints">

        <li>Enrolment in the National Cadet Corps in on voluntary basis. Students can join at a minimum age of 16+ years in the Senior Division (SD) for boys.</li>
        <li>Similarly, enrolment in the senior division (SD) for boys in intermediate &amp; degree. A cadet can normally stay in the SD for four years.</li>
        <li>Environment coincides with the beginning of the academic session (Jun/Jul) in schools &amp; colleges. To get oneself enrolled in the NCC, a student should be physically fit and within the prescribed age limit. The final selection is, however, done by the Commanding Officer of the concerned NCC unit</li>
      </ul>
      <h2 className="dept_sidehdng">Importance of the Cell:</h2>
      <ul className="kbn_bulletpoints">
        <li>NCC is a highly reputable body and considered to be the second line of defence. In India, many youngsters are trained in line with defence mechanisam, in case the need arises. If young students want to make as their career option, then being a NCC cadet holds a lot of weight.</li>
        <li>apart from military training the cadets also learn several other core values such as selflessness,honesty,discipline,hard work,building confidence and aquire leadership qualities.</li>
        <li>Since NCC camps are held all over India, the cadets are trained in a various parts of the country as such students get an opportunity to visit new places and learn the art of independence. They are required to exhibit their social skills and their senses to get to know about new places and adapt themselves to the varying environment.They are also exposed to the historical significance,the cultural diversity and the artistic outlook of the new places.</li>
        <li>The NCC teaches &#39;ekta&#39; and &#39;anushasan&#39; as core values. One needs to rely on these values no matter where one has to go in life. Besides, there is no better platform to learn to be a leader at a prime age being physically fit at the same time.</li>
        <li>The NCC teaches hands on experience of how to be with people,irrespective of age and place through camps at various parts of the country therefore takes the cadets out of comfort zone,through self-reliance.</li>
        <li>It gives a first hand experience what it is like to be in the Indian armed forces, air or naval forces depending upon the batallion.</li>
        <li>NCC cadets learn to take pride in themselves.The training empowers the cadets to develop the true spirit of being an Indian. This helps them gear towards joining the forces and offering their total selves when the country is in need.</li>
        <li>The cadets are taught parachuting, paragliding and basic aviation courses which enables them to have an edge over others when appearing for armed force interviews.Besides they have a special quota which is very useful in case of final selection to join the armed forces.</li>
        <li>Under the regime of exchange programme, there are a few selected students who get an opportunity to visit other countries and learn various things which are practised in other nations and exchange experiences with cadets who happen to come to India from foreign lands.</li>
      </ul>
      <h2 className="dept_sidehdng">Guidelines:</h2>
      <p><strong>As Regular officers in Indian Army</strong>  - 25 vacancies reserved for NCC &#39;C&#39; Certificate holders for every cource, ie... 50 seats each year irrepective of merit in SSB.</p>

      <p><strong>As Short Service Commissioned Officers in the Indian Army</strong> - NCC &#39;C&#39; Certificate holders are exempted from appearing in written Examination (UPSC exam). 50 vacancies are reserved in each course ie... 100 seats for each year.</p>

      <p><strong>As Regular Officers in Indian Navy</strong> - Six vacancies are reserved in each course ie... 12 seats per year for NCC &#39;C&#39; Certificate(Naval Wing) holders. They must have passed BSc(Physics and Maths) or BE, are 19 to 24 years of age and are deemed fit to undergo training in Naval Academy, Goa by the Services Selection Board (SSB). Such candidates are exempted from appearing in the CDS Examination conducted by UPSC.</p>

      <p><strong>As Regular Officers in Indian Air Forc</strong> - 10% of all available seats are reserved for NCC &#39;C&#39; Certificate (Air Wing) holders including Pilot courses. They need NOT appear for UPSC Exam.</p>

      <p>The certificates you earn as a JD (Junior Division) and SD (Senior Division) Cadet in school and college prove to be a massive help whilst getting into the NDA as well as into government related jobs</p>

      <p>Certificates are only good if you know to express what you have learnt while earning them. And trust me, in life you&#39;ll never fall short of words while speaking of the values and experiences you will have gained from joining the NCC; be it among friends or at an interview</p>

      <h3>Details of the Convener:</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Name of the Convener:</h4>
        <p style={{ marginLeft: '1rem' }}>Lt. KPT Vijaya Bhaskar, ANO</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Department:</h4>
        <p style={{ marginLeft: '1rem' }}>Department of Chemistry</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Designation:</h4>
        <p style={{ marginLeft: '1rem' }}>Asst. Professor.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Phone:</h4>
        <p style={{ marginLeft: '1rem' }}>7330958063</p>
      </div>

      <h3>List of Members in the Cell:</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3} align="center">NCC COMMITTEE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
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

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Click Here For Events</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div id="dem" className="collapse">
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2020-2021</h2>
            <ul className="kbn_bulletpoints">
              <li>
                <a href="">NCC Annual Inspection by 17 (A) Bn, Vijayawada on 8th & 9th March, 2021</a>
              </li>
              <li> <a href="">Weapon Training for 3rd year NCC Cadets on 23rd February, 2021 at Andhra Loyola College, Vijayawada.</a>
              </li>
              <li><a href="">NCC Cadre Camp on 22nd February, 2021.</a>
              </li>
              <li><a href="">NCC Selections on 18th & 20th February, 2021</a>
              </li>
              <li> <a href="">Awareness Programme on Revamped Gallantry Awards Portal to the NCC Cadets on 09th February, 2021</a>
              </li>

            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2019-2020</h2>

            <ul className="kbn_bulletpoints">
              <li><a href="/attachments/nccevents/2019-20/1-Yoga Day Celebrations -21.6.2019.pdf" target="_blank">Yoga Day Celebrations on 21st June, 2019.</a></li>
              <li><a href="/attachments/nccevents/2019-20/2-Mega Pollution Pledge-1.7.2019.pdf" target="_blank">Mega Pollution Awareness Drive Pledge organized by NCC on 1st July, 2019.</a></li>
              <li><a href="/attachments/nccevents/2019-20/3-AIR POLLUTION PRGM-2.7.2019.pdf" target="_blank">Awareness Program & Rally on “Air Pollution” organized by NCC on 2nd July, 2019. Chief Guest: Dr. Iqbal Health Officer, Vijayawada Municipal Corporation, Vijayawada.</a></li>
              <li><a href="/attachments/nccevents/2019-20/4-NCC SELECTIONS-17.7.2019.pdf" target="_blank">NCC Selections on 17th July, 2019</a></li>
              <li><a href="/attachments/nccevents/2019-20/5-Kargil Vijay Dwas-26.7.2019.pdf" target="_blank">Kargil Vijay Diwas on 26th July, 2019</a></li>
              <li><a href="/attachments/nccevents/2019-20/6-Independence Day - 15.8.2019.pdf" target="_blank">Independence Day Celebrations on 15th August, 2019</a></li>
              <li><a href="/attachments/nccevents/2019-20/7-SWACHHTA PAKHWADA RALLY-19&20.8.2019.pdf" target="_blank">7Participated in “Swachta Pakhwada Pan India Cycle Rally” from 19th to 20th August, 2019 organised by 4(A) Girls BN, Vijayawada.</a></li>
              <li><a href="/attachments/nccevents/2019-20/8-INT.DAY OF OLDER PERSONS-1.10.2019.pdf" target="_blank">Visit to Old Age homes & Rally in view of International Day of Older Persons on 1st October, 2019  </a></li>
              <li><a href="/attachments/nccevents/2019-20/9-SARDAR VALLABHBHAI PATEL BIRTH ANNIVERSARY - 31.10.2019.pdf" target="_blank">Awareness Programme in view of Sardar Vallabhbhai Patel Birth Anniversary organized by National Cadet Corps on 31st October, 2019.</a></li>
              <li><a href="/attachments/nccevents/2019-20/10-COMMUNAL HARMONY-2019-20.pdf" target="_blank">Communal Harmony from 19th to 25th November, 2019 </a></li>
              <li><a href="/attachments/nccevents/2019-20/11-A Mega Blood Donation Camp was organized by STEP.pdf" target="_blank">Mega Blood Donation Camp in association with STEP, KRISHI, Vijayawada on 27th November, 2019.</a></li>
              <li><a href="#" >Rally in view of World AIDS Day on 30th November, 2019. 2019</a></li>
              <li><a href="/attachments/nccevents/2019-20/13-FLAG DAY - 7.12.2019.pdf" target="_blank">Armed Forces Flag Day on 7th December, 2019 </a></li>
              <li><a href="/attachments/nccevents/2019-20/14-SWACHH BHARATH - 11.12.2019.pdf" target="_blank">Swatch Bharath Programme on 11th December, 2019</a></li>
              <li><a href="/attachments/nccevents/2019-20/15-VISIT OF ARMY STAFF.pdf" target="_blank">Visit & Inspection by Army Staff on 24th & 25th January, 2020.</a></li>
              <li><a href="/attachments/nccevents/2019-20/16-71st Republic Day Celebrations.pdf" target="_blank">71st Republic Day Celebrations on 26th January, 2020</a></li>
              <li><a href="/attachments/nccevents/2019-20/17-INSTITUTIONAL TRAINING.pdf" target="_blank">PI Staff Institutional Training Classes in January, 2020.</a></li>
              <li><a href="/attachments/nccevents/2019-20/18-WORLD CANCER DAY.pdf" target="_blank">World Cancer Day on 4th February, 2020.</a></li>
            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2018-2019</h2>

            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/14-18.2.2019.pdf" target="_blank">Candle March to condemn Pulwama Attack Soldiers on 18<sup>th</sup> February, 2019</a></li>
              <li><a href="attachments/nccevents/13-26.1.2019.pdf" target="_blank">Republic Day Celebrations on 26<sup>th</sup> January, 2019</a></li>
              <li><a href="attachments/nccevents/12-8.1.2019.pdf" target="_blank">Peer Team members Inspection Guard of honour by NCC cadets on 8<sup>th</sup> January, 2019</a></li>
              <li><a href="attachments/nccevents/11-7.12.2018.pdf" target="_blank">Armed Forces Flag Day – 2018 on 7<sup>th</sup> December, 2018</a></li>
              <li><a href="attachments/nccevents/10-26.11.2018.pdf" target="_blank">Swatch Bharath Abhiyan - Clean and green programme on 26<sup>th</sup> November, 2018</a></li>
              <li><a href="attachments/nccevents/9-3.11.2018.pdf" target="_blank">Swasth Bharath Yatra Rally on 3<sup>rd</sup> November, 2018</a></li>
              <li><a href="attachments/nccevents/8-11.10.2018.pdf" target="_blank">International Day of Girl Child Programme on 11<sup>th</sup> October, 2018</a></li>
              <li><a href="attachments/nccevents/7-2.10.2018.pdf" target="_blank"> “Sadhbhavana Rally” In view of Gandhi Jayanthi on 2<sup>nd</sup> October, 2018 </a></li>
              <li><a href="attachments/nccevents/6-15.8.2018.pdf" target="_blank">Independence Day Celebrations – 2018 on 15<sup>th</sup> August, 2018</a></li>
              <li><a href="attachments/nccevents/5-5.8.2018.pdf" target="_blank">Free Medical Camp in association with Vidya Bharathi on 5<sup>th</sup> August, 2018</a></li>
              <li><a href="attachments/nccevents/4-26.7.2018.pdf" target="_blank">Kargil Vijay Diwas on 26<sup>th</sup> July, 2018</a></li>
              <li><a href="attachments/nccevents/3-9.7.2018.pdf" target="_blank">NCC Selections on 9<sup>th</sup> July, 2018</a></li>
              <li><a href="attachments/nccevents/2-26.6.2018.pdf" target="_blank">International Day against drug abuse and illicit trafficking on 26<sup>th</sup> June, 2018	</a></li>
              <li><a href="attachments/nccevents/1-21.6.2018.pdf" target="_blank">International Day of Yoga on 21<sup>st</sup> June, 2018

              </a></li>
            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2017-2018</h2>
            <ul className="kbn_bulletpoints">

              <li><a href="attachments/nccevents/1-26.1.2018.pdf" target="_blank">Republic Day Celebrations on 26th January, 2018.</a></li>
              <li><a href="attachments/nccevents/2-12.1.2018.pdf" target="_blank">Awareness Programme on “Skill Development” in view of Swami Vivekananda Birth Anniversary (National Youth Day) on 12th January, 2018.</a></li>
              <li><a href="attachments/nccevents/3-19.12.2017.pdf" target="_blank">Awareness Programme on “Swatch Sarvekshan” on 19th December, 2017.</a></li>
              <li><a href="attachments/nccevents/4-12.12.2017.pdf" target="_blank">Swatch Bharath Abhiyan (KBN College Campus Clean & Green Programme)</a></li>
              <li><a href="attachments/nccevents/5-2.12.2017.pdf" target="_blank">National Pollution Prevention Day in association with AP Pollution Control Board on 2nd December, 2017.</a></li>
              <li><a href="attachments/nccevents/6-1-12.2017.pdf" target="_blank">Observed & celebrated World AIDS Day on 1st December, 2017. </a></li>
              <li><a href="attachments/nccevents/7-25.11.2017.pdf" target="_blank">NCC Day Celebrations on 25th November, 2017.</a></li>
              <li><a href="attachments/nccevents/8-19-25.11.2017.pdf" target="_blank">Communal Harmony campaign week from 19th – 25th November, 2017. </a></li>
              <li><a href="attachments/nccevents/9-6.11.17.pdf" target="_blank">Blood Donation Camp was organized in view of 53rd College Foundation Day Celebrations on 6th November, 2017.</a></li>
              <li><a href="attachments/nccevents/10-15.8.17.pdf" target="_blank">Independence Day Celebrations at KBN College on 15th August, 2017.</a></li>
              <li><a href="attachments/nccevents/11-21.6.2017.pdf" target="_blank">Yoga Day Celebrations on 21st June, 2017 at A1 Convention Hall, Vijayawada.
              </a></li>
            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2016-2017</h2>
            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/12.pdf" target="_blank">SUO P. Balaji & JUO B. Prem Naga Nitish participated in RDC – 2017 at New Delhi and SUO P. Balaji selected as Best NCC Cadet in the Kakinada Group.</a></li>
              <li><a href="attachments/nccevents/13-10-12.2.2017.pdf" target="_blank">NCC Cadets were extended their services in National Women’s Parliament at Pavitra Sanghamam (Ibrahimpatnam), Vijayawada from 10th to 12th February, 2017.</a></li>
              <li><a href="attachments/nccevents/14-26.1.2017.pdf" target="_blank">Republic Day Celebrations on 26th January, 2017.</a></li>
              <li><a href="attachments/nccevents/15-12.1.2017.pdf" target="_blank">	Awareness Programme on “Digital Transaction & E - Payment” in view of Swami Vivekananda Birth Anniversary (National Youth Day) on 12th January, 2017.</a></li>
              <li><a href="attachments/nccevents/16-2.12.2016.pdf" target="_blank">National Pollution Prevention Day in association with AP Pollution Control Board on 2nd December, 2016.</a></li>
              <li><a href="attachments/nccevents/17-1.12.2016.pdf" target="_blank">World AIDS Day on 1st December, 2016. </a></li>
              <li><a href="attachments/nccevents/18-27.11.2016.pdf" target="_blank">NCC Day Celebrations on 27th November, 2016.</a></li>
              <li><a href="attachments/nccevents/19-6.11.16.pdf" target="_blank">Blood Donation Camp was organized in view of 52nd College Foundation Day Celebrations on 6th November, 2016.</a></li>
              <li><a href="attachments/nccevents/20-2.10.2016.pdf" target="_blank">All the Cadets participated in Sadhbhavana Yatra, on the occasion of Gandhi Jayanthi, this Sadhbhavana Yatra started from KBN NCC Office to Gandhi Hill on 2nd October, 2016.</a></li>
              <li><a href="attachments/nccevents/21-21.9.2016.pdf" target="_blank">Condolences to Martyr’s on 21st September, 2016 </a></li>
              <li><a href="attachments/nccevents/" target="_blank">	NCC Cadets of our Unit were engaged enthusiastically in the celebrations of Krishna Pushkaralu. Our NCC Cadets served water sachets to the thirsty, maintained queues, directed the pilgrims and people in all aspects. This huge responsibility was taking from 12th to 24th August, 2016.</a></li>
              <li><a href="attachments/nccevents/23-15.8.2016.pdf" target="_blank">Independence Day Celebrations at KBN College on 15th August, 2016.</a></li>
              <li><a href="attachments/nccevents/24-21.6.2016.pdf" target="_blank">International Yoga Day on 21st June, 2016.</a></li>

            </ul>

            <h2 className="dept_sidehdng">ACADEMIC YEAR 2015-2016</h2>
            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/25-19-21.2.2016%20(2).pdf" target="_blank">NCC Cadets Services extended their service in International Seminar on “Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development” from 19th – 21st February, 2016.</a></li>
              <li><a href="attachments/nccevents/26-26.1.2016.pdf" target="_blank">	Republic Day Celebrations on 26th January, 2016.</a></li>
              <li><a href="attachments/nccevents/27-1.12.2015.pdf" target="_blank">World Aids Day on 1st December, 2015.</a></li>
              <li><a href="attachments/nccevents/28-22.11.2015.pdf" target="_blank">NCC Day Celebrations on 22nd November, 2015</a></li>
              <li><a href="attachments/nccevents/29-6.11.2015.pdf" target="_blank">	Blood donation Camp in view of KBN College Foundation Day on 6th November, 2015</a></li>
              <li><a href="attachments/nccevents/30-1.11.2015.pdf" target="_blank">Swachh Bharath Abhiyan on 1st November, 2015.</a></li>
              <li><a href="attachments/nccevents/31-15.8.2015.pdf" target="_blank">Independence Day celebrations on 15th August, 2015</a></li>

            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2014-2015</h2>
            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/32-26.1.2015.pdf" target="_blank">Republic Day Celebrations on 26th January, 2015.</a></li>
              <li><a href="attachments/nccevents/33-1.12.2014.pdf" target="_blank">World Aids Day on 1st December, 2014</a></li>
              <li><a href="attachments/nccevents/34-6.11.2014.pdf" target="_blank">Blood donation Camp KBN College Foundation Day on 6th November, 2014</a></li>
              <li><a href="attachments/nccevents/35-15.8.2014.pdf" target="_blank">Independence Day celebrations on 15th August, 2014.</a></li>

            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2013-2014</h2>
            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/36-26.1.2014.pdf" target="_blank">Republic Day Celebrations on 26th January, 2014.</a></li>
              <li><a href="attachments/nccevents/37-24.11.2013.pdf" target="_blank">Communal Harmony Week on 24th November, 2013</a></li>
              <li><a href="attachments/nccevents/38-6.11.2013.pdf" target="_blank">Blood donation Camp KBN College Foundation Day on 6th November, 2013</a></li>
              <li><a href="attachments/nccevents/39-7.9.2013.pdf" target="_blank">International Literacy Day on 7th September, 2013</a></li>
              <li><a href="attachments/nccevents/40-15.8.2013.pdf" target="_blank">Independence Day celebrations on 15th August, 2013.</a></li>
            </ul>
            <h2 className="dept_sidehdng">ACADEMIC YEAR 2012-2013</h2>
            <ul className="kbn_bulletpoints">
              <li><a href="attachments/nccevents/41-26.1.2013.pdf" target="_blank">Republic Day Celebrations on 26th January, 2013.</a></li>
              <li><a href="attachments/nccevents/42-24.11.2012.pdf" target="_blank">Communal Harmony Week on 24th November, 2012</a></li>
              <li><a href="attachments/nccevents/43-6.11.12.pdf" target="_blank">Blood donation Camp KBN College Foundation Day on 6th November, 2012</a></li>
              <li><a href="attachments/nccevents/44-15.8.12.pdf" target="_blank">Independence Day celebrations on 15th August, 2012</a></li>
              <li><a href="attachments/nccevents/44-15.8.12.pdf" target="_blank">Independence Day celebrations on 15th August, 2012</a></li>

            </ul>
          </div>

        </AccordionDetails>
      </Accordion>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">S.NO</StyledTableCell>
              <StyledTableCell align="left">Name of Activitiy / Camp</StyledTableCell>
              <StyledTableCell align="left">From</StyledTableCell>
              <StyledTableCell align="left">To</StyledTableCell>
              <StyledTableCell align="left">No.of Cadets Participated</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoTable.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">{row?.from}</StyledTableCell>
                <StyledTableCell align="left">{row?.to}</StyledTableCell>
                <StyledTableCell align="left">{row?.participated}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default NCCComponent;
