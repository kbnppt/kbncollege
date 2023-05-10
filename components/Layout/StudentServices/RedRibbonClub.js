import React from 'react';
import { Divider } from "@material-ui/core"
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
import {getRequiredImgs} from '../../Api/index'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "darkblue",
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
  },
}))(TableRow);

function createData(num, name, desg) {
  return { num, name, desg };
}

const rows = [
  createData(1, "Dr. V. Narayana Rao", "Principal –Chairman"),
  createData(2, "Sri P. L. Ramesh", "Vice-Principal –Vice-Chairman"),
  createData(3, "Sri Vijayababu Tekkem", "Vice-Principal –Vice-Chairman"),
  createData(4, "Dr. M. V. Srinivasa Rao", "Lecturer in Commerce, Convenor"),
  createData(5, "Sri N. Sambasiva Rao", "Lecturer in Commerce, Member"),
  createData(6, "Sri D. Pavan Kumar", "Lecturer in Commerce, Member"),
  createData(7, "Sri VT Ram Pawan Kumar", "Lecturer in Computer Science, Member"),
  createData(8, "Mr. S. Sri Gopi", "II B.Com. (Comp.), Student Member"),
  createData(9, "Ms. P. Subhadra", "III B.Com. (T.P), Student Member"),
  createData(10, "Mr. P. Venkata Naik", "II B.Sc. (IoT), Student Member"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableHead: {
    fontWeight: "bold",
    backgroundColor: "darkblue",

  }
});

function createData2(date, participants, units, collab) {
  return { date, participants, units, collab };
}

const dates = [
  createData2("23/03/2021", 96, 96, "Rotary Red Cross Blood Bank"),
  createData2("27/11/2019", 800, 500, "Indian Red Cross Society"),
  createData2("06/11/2019", 348, 313, "Rotary Red Cross Blood Bank"),
  createData2("03/08/2019", 58, 52, "Indian Red Cross Society"),
  createData2("4/10/2018", 115, 102, "Red Cross Blood Bank"),
  createData2("6/11/2018", 84, 70, "Rotary Red Cross Blood Bank"),
  createData2("19/01/2018", 77, 62, "Vasavi Club"),
  createData2("06/11/2017", 103, 90, "Rotary Red Cross Blood Bank"),
  createData2("18/7/2017", 68, 60, "Rotary Red Cross Blood Bank"),
  createData2("15/03/2017", 47, 33, "Capital Blood Bank"),
  createData2("06/11/2016", 54, 48, "Rotary Red Cross Blood bank"),
  createData2("19/10/2016", 32, 29, "Vijayasri Blood Bank"),
  createData2("06/11/2015", 205, 108, "Rotary Red Cross Blood Bank"),
  createData2("01/08/2015", 38, 28, "Rotary Red Cross Blood Bank"),
  createData2("06/11/2014", 146, 114, "Rotary Red Cross Blood Bank"),
  createData2("18/10/2014", 147, 135, "Vijayasri Blood Bank"),
  createData2("30/07/2014", 42, 36, "Government General Hospital Blood Bank"),
  createData2("06/11/2013", 90, 65, "Rotary Red Cross Blood Bank"),
  createData2("06/11/2012", 98, 96, "Rotary Red Cross Blood Bank"),
  createData2("25/07/2012", 43, 35, "Rotary Red Cross Blood Bank")

];

const RedRibbonClub = () => {

  const [apidata,setApiData] = React.useState([])

  const initialLoad = async() =>{
      let govt_folderId = '1Uq5Gk4TxNMq0XGK-XXd7MLwy6RUUTx0M';
      let data = await getRequiredImgs(govt_folderId);
      setApiData(data?.files)
  }


  React.useEffect(()=>{
      initialLoad()
  },[])


  const getImgData = (data) =>{
      let value = data?.split('%20')?.join(' ');
      let filterValue = apidata?.find((e)=>e?.name == value);
      if(filterValue){
          return filterValue?.id
      }
      return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <h2>Red Ribbon Club</h2>
      <div style={{ display: "flex" }}>
        <p style={{ padding: "5px", width: "155px", }}><strong>Name of the Cell:</strong></p><p style={{ padding: "5px", width: "180px", color: "brown", }}>RED RIBBON CLUB</p>
      </div>
      <Divider />
      <div style={{ display: "flex" }}>
        <p style={{ padding: "5px", width: "auto", }}><strong>Year of Establishment:</strong></p><p style={{ padding: "5px", width: "180px", }}>2012</p>
      </div>
      <Divider />
      <div>
        <p><strong>INTRODUCTION</strong></p>
        <p>Red Ribbon is the international symbol of HIV and AIDS awareness. It is being worn by increasing number of people around by the world to demonstrate their care and concern about HIV and AIDS – for those who are living with HIV, for those who are ill, for those who have died and for those who care for and support those directly affected.</p>
        <p><strong>PURPOSE OF RED RIBBON CLUB</strong></p>
        <p>
          Mainstreaming of HIV & AIDS and ensuring safe blood are major activities to control the spread of HIV & AIDS in the country. Over 1 billion youth (ages 15-24), worldwide, some 10 million youth are living with HIV: Every day, an estimated 6,000 youth are infected with the virus. Out of 2.47 million estimated population infected by HIV in India, 88.7% are in the age group of 15-49 years. In views of this, Ministry of Health & Family Welfare, Govt. of India has proposed to establish a network with universities and educational institutions to generate awareness regarding HIV & AIDS and to promote Voluntary Blood Donation to ensure safe blood and implement preventive programmes on HIV & AIDS.</p>
        <p>Under the NACP III youth have been identified as a vulnerable group requiring special attention. Recognizing the heterogeneity of the youth NACP III aims to promote Red Ribbon Clubs to cover youth at risk to HIV both in campuses as well as in community.</p>

        <p><strong>KBN COLLEGE RED RIBBON CLUB</strong></p>
        <p>Under National AIDS Control Programme (NACP), the Red Ribbon Club in the institution was established in the year 2012. The club conducts the regular activities to encourage Voluntary Blood Donation and increase Awareness on AIDS and its related issues.
          The Students have satisfaction beyond any scale that they are able to serve the society. Patients suffering from chronic blood deficiency, accidents, undergoing critical surgery are provided with blood through the KBN Help Line. Every year the people approaching for blood are able to get the benefit ‘free of cost’. </p>
      </div>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >click here for more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Objectives:</h2>
            <ul >
              <li>Educate youth with correct, concise and adequate information and heighten their level of awareness about HIV, AIDS, STI and other related issues (thus eliminate myths and misconceptions).</li>
              <li>Enable youth to identify and understand situations of exploitation and abuse.</li>
              <li>Sensitize the youth regarding care and support needs of people affected with HIV, AIDS and instil in them the spirit to reduce the stigma and discrimination against them.</li>
              <li>Create and train among the youth a cadre of peer educators for spreading awareness about HIV-AIDs and its prevention in the community.</li>
              <li>To encourage blood donations</li>
              <li>To serve as forums for students to participate in the fight against HIV/AIDS </li>
            </ul>
            <h2>Additional function:</h2>
            <p>The RRC promotes access to information on healthy life and voluntary blood donation. The Red Ribbon Club is a voluntary on-campus intervention program for students. The programs organized by RRC addresses the knowledge, attitude and behaviour of the youths in the interrelated areas of Voluntary Blood Donation like HIV & AIDS as demanded by their age, environment, and life style.</p>
            <h2>Activities in Our College </h2>
            <ul >
              <li>By involving the members of Red Ribbon Club of our college, we are conducting AIDS/HIV Awareness programmes, Cultural Events and many other activities like  conducting rallies, competitions for the benefit of our students and also for the general public and in our adopted villages by inviting Doctors and AIDS affected people. </li>
              <li>Every year we are organizing Blood Group Identification and Test camp for our college students and also for the Government schools in and around Vijayawada.</li>
              <li>We organize Blood Donation Camps by involving Government Hospital Blood Bank and other Non- Governmental Organisations. On an average, we donate at least 125 units of blood every year from our volunteers through KBN HELP LINE. </li>
            </ul>

          </Typography>

        </AccordionDetails>
      </Accordion>
      <h2>RED RIBBON CLUB COMMITTEE</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead className={classes.tableHead}>
            <TableCell align="center" style={{ color: "white", }} colSpan={5} >
              RED RIBBON CLUB
            </TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.num}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.desg}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2>KBN HELP LINE - DONATE BLOOD AND SAVE HUMAN LIFE</h2>
      <p>
        KBN College is situated in an urban locality surrounded by a number of villages which are largely inhabited by SC, ST, OBC and socially and economically backward communities. They face great difficulty while arranging blood at the time of emergency. In collaboration with the Rotary Red Cross Blood Bank, Vijayasri Blood Bank, Government General Hospital Blood Bank and Capital Blood Bank, the College organises blood donation camps under the aegis of NSS, NCC and Red Ribbon Club.  ‘Donate Blood- Save Life’ is the motto used to encourage volunteers to donate blood. This process enabled us to connect with the Red Cross Blood Bank and other Blood banks in Vijayawada and work in unison with them.
      </p>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >CLICK HERE FOR MORE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Objectives:</h2>
            <ul >
              <li>To save lives of people in critical condition by making the required blood group readily available in the Krishna District Area.</li>
              <li>To ensure the instant and immediate availability of the required blood group 24x7, throughout the year.</li>
              <li>To create, update and maintain a Directory of Voluntary Donors so that the required blood is available on request immediately.</li>
              <li>To generate awareness on Blood Donation and its significance in saving lives during emergencies particularly during obstetric emergencies and accidents.</li>
              <li>To motivate students to donate blood voluntarily and to maintain a permanent well-indexed record of voluntary blood donors.</li>
              <li>To educate and create awareness in the public on the beneficial aspects of blood donation and the harmful effect of collecting blood from paid donors.</li>
              <li>To actively encourage voluntary blood donation and gradually eliminate professional blood donors.</li>
            </ul>

            <h2>KBN HELP LINE PRACTICE:</h2>
            <p>
              Blood donation is an ennobling act and very important need of our society. On our College Foundation Day every year, the NSS, NCC and Red Ribbon Club of our college jointly conduct Blood Donation Camps in collaboration with Rotary Red Cross Blood Bank, Vijayasri Blood Bank, Government General Hospital Blood Bank and Capital Blood Bank to collect blood from volunteers and make it available at all times, wherever and whenever it is needed. Awareness programmes like seminars, invited talks on the importance and need of donating blood is created. Every year about 50 to 100 units of blood is collected in the camp. Patients suffering from chronic blood deficiency, accidents, those undergoing critical surgeries are provided with blood through the KBN Help Line. Every year people who approach in need of blood, are able to get the benefit of blood donated freely. This practice has enabled the students to overcome the hesitation and wrong notion about blood donation. Many of them adopted it as a healthy practice now. The RED RIBBON CLUB of the College maintains the Directory of Voluntary student blood donors and the units of blood donated to different hospitals.
              Purna Cardiac Hospital, Y.V. Rao Cardiac Hospital, Dr, Ramesh Cardiac Centre and Pallem Peddeswara Rao Heart Care are some of the main beneficiaries of blood procured from voluntary Blood Donors. Through this service, we could inculcate moral values and sense of social responsibilities among the students. Initially a few number of hospitals were provided with the blood. Later, over years the number of hospitals has increased as more and more students volunteered to donate blood.
            </p>


          </Typography>

        </AccordionDetails>
      </Accordion>

      <h2>Number of Blood Donation Camps held:</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="left">No.Of.Participants</StyledTableCell>
              <StyledTableCell align="left">No.Of Units Blood Collected</StyledTableCell>
              <StyledTableCell align="left">In Collaboration with</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {dates.map((row) => (
              <StyledTableRow key={row.date}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="left">{row.participants}</StyledTableCell>
                <StyledTableCell align="left">{row.units}</StyledTableCell>
                <StyledTableCell align="left">{row.collab}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ul >
        <li><a href="attachments/DONATION%20OF%20BLOOD%20BY%20STUDENT%20DONORS.pdf" target="_blank">Dates of Donation of Blood by KBN Students</a></li>
        <br />
        <li><a href="attachments/BLOOD%20DONATION%20FORMS.pdf" target="_blank">Click here for Blood Donation Forms</a></li>

      </ul>
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
              <li><a href={`https://drive.google.com/uc?id=${getImgData("1-AIDS AWARENESS PROGRAMME-23.1.2020.pdf")}`} target="_blank">AIDS Awareness Programme on 28th January, 2020.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("2-AIDS AWARENESS RALLY-1.11.pdf")}`} target="_blank">AIDS Awareness Rally in view of World Aids Day on 30th November, 2019.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("3-BLOOD DONATION IN VIEW OF COLLEGE FOUNDATION DAY.pdf")}`} target="_blank">Blood Donation Camp (In view of 55th College Foundation Day) on 6th November, 2019.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("4-BLOOD DONATION CAMP - GOVERNOR'S BIRTHDAY.pdf")}`} target="_blank">Blood Donation Camp in view of Governor’s Birthday Celebrations.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("5-BLOOD GROUPING PHOTOS.pdf")}`} target="_blank">Blood Grouping to First Year Degree students from 22nd – 26th July, 2019.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("1-ALERTING PROGRAMME -15.12.2018.pdf")}`} target="_blank">Alerting Programme to help the Phethai Cyclone affected people on 15th December,2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("2-1.12.2018-AIDS AWARENESS RALLY.pdf")}`} target="_blank">AIDS Awareness Rally on 1st December, 2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("3-6.11.2018.pdf")}`} target="_blank">Blood Donation Camp in view of College Foundation Day on 6th November,2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("4-4-10-2018-Mega Blood Donation Camp organized by Red Ribbon Club.pdf")}`} target="_blank">Mega Blood Donation Camp on 4th October, 2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("5-11.9.2018-World Suicide prevention day.pdf")}`} target="_blank">Awareness Programme in view of World Suicide Prevention Day on 11th September,2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("6-8.9.2018-World Literacy Day.pdf")}`} target="_blank">Awareness on World Literacy Day  on 8th September,2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("7-29.8.2018-FUND RISING PROGRAMME.pdf")}`} target="_blank">Find Rising Programme to the victims of the Kerala Flood Effected People on 29th August,2018.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("8-11-14.7.2018.pdf")}`} target="_blank">Blood Grouping to I & II Year Degree Students of KBNC on 11th – 14th July,2018 in association with Department of Zoology.</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("1-19.1.2018.pdf")}`} target="_blank">Blood Donation Camp on 19th January, 2018	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("2-1.12.2017.pdf")}`} target="_blank">AIDS Awareness Rally & Awareness Programme in view of World AIDS Day on 1st December, 2017</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("3-6.11.2017.pdf")}`} target="_blank">Blood Donation Camp in view of 53rd KBN College Foundation Day on 6th November, 2017.	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("4-18.07.2017.pdf")}`} target="_blank">Blood Donation Camp on 18th July, 2017	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("5-15.3.2017.pdf")}`} target="_blank">Blood Donation Camp on 15th March, 2017</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("6-1.12.2016.pdf")}`} target="_blank">AIDS Awareness Programme in view of World AIDS Day on 1st December, 2016</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("7-6.11.2016.pdf")}`} target="_blank">Blood Donation Camp in view of 52nd KBN College Foundation Day on 6th November, 2016.	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("8-19.10.2016.pdf")}`} target="_blank">Blood Donation Camp on 19th October, 2016	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("9-1.12.2015.pdf")}`} target="_blank">AIDS Awareness Programme in view of World AIDS Day on 1st December, 2015	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("10-6.11.2015.pdf")}`} target="_blank">Blood Donation Camp in view of 51st KBN College Foundation Day on 6th November, 2015.	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("11-1.8.2015.pdf")}`} target="_blank">Blood Donation Camp on 1st August, 2015	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("12-1.12.2014.pdf")}`} target="_blank">AIDS Awareness Programme in view of World AIDS Day on 1st December, 2014	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("13-6.11.2014.pdf")}`} target="_blank">Blood Donation Camp in view of 50th KBN College Foundation Day on 6th November, 2014.	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("14-18.10.2014.pdf")}`} target="_blank">Blood Donation Camp on 18th October, 2014	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("15-30.7.2014.pdf")}`} target="_blank">Blood Donation Camp on 30th July, 2014</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("16-1.12.2013.pdf")}`} target="_blank">AIDS Awareness Programme in view of World AIDS Day on 1st December, 2013	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("17-6.11.2013.pdf")}`} target="_blank">Blood Donation Camp in view of 49th KBN College Foundation Day on 6th November, 2013.	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("18-6.11.2012.pdf")}`} target="_blank">Blood Donation Camp in view of 49th KBN College Foundation Day on 6th November, 2012	</a></li>
              <li><a href={`https://drive.google.com/uc?id=${getImgData("19-25.7.12.pdf")}`} target="_blank">Blood Donation Camp on 25th July, 2012.	</a></li>
            </ul>
          </Typography>

        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default RedRibbonClub;
