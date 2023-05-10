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
  createTable1(4, 'Sri V. Suresh', 'Lecturer in Computers, Member'),
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

const DramaticAssociation = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h2>Dramatic Association</h2>
      <p>
        The Dramatic Association of KBN College strives to train students in various Fine Arts and improve their expressive ability. The association was inaugurated by the veteran hero of Telugu celluloid, Dada Saheb Phalki Awardee Padma Bhushan Dr. Akkineni Nageswara Rao in 1965. Since then the association trained many students in fine arts who established themselves as renounned Cinema, Television and Theatre Artists, Writers and Directors. Every year our students have been participating in the Inter Collegiate Youth Festivals conducted by the Univeristy and won Chamnpionships in various competitions. They have been selected to represent the affiliated university in the South Zone Inter University Youth Festival Competitions.
      </p>
      <p><strong>KALANIKETHAN: </strong>
        To promote fine arts and cultural activities the college Management constructed an open air auditorium- KALANIKETHAN in 1970. It was inaugurated by Home Minister of Andhra Pradesh Sri. Jalagam Vengal Rao. Since then the Dramatic Association not only trained students in fine arts but also invited renounned artists of various forms of art. The Dramatic association has been striving for the promotion and development of fine arts with Kalaniketan as the stage for its performance.</p>
      <h3>List of Members in the Cell:</h3>

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Click here for more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div id="demob" className="collapse">
              <p><b>Goal:</b>
                The Indian culture finds excellent expression in its various art forms. The protection of the various art forms which constitute the soul of Indian Culture is through their promotion. The Dramatic Association works in this direction by introducing the students to various art forms and perfecting their skills and performance. Students are encouraged mainly in Folk art forms, theatre classical, light classical and folk music.  Effective communication skills are the key to success in the present day world. We believe that a student who excels in arts can also achieve excellence in effective communication. The Dramatic Association enables students to excel in carrers through the training given in fine arts. The Association enabling them to develop as proud citizen of India.</p>

              <p><b>Social Service:</b>
                The Dramatic Association takes an active part in social service activities too. In 1970 when the District was affected by a fierce cyclonic storm, the Dramatic association presented various plays and dramas along with famous artists and collected funds. It also arranged a Musical Night with Padmasri Ghantasala Venkateswara Rao and utilised the funds for  flood effected regions.</p>
              <p><b>Artists from the College:</b>
                Our old student’s chose their careers as famous cinema, television and theatre artists and spread the name and fame of the college far and wide. Sri. Mudili Sanjeevi is a famous theatre and film writer, actor and director. Sri Indra Neel Varma (Rajesh) is a famous T. V.   Artist and Sudigiali Sudheer (Jabardasth) is a famous stand-up comedian and Sri M.S. Chowdhary is a famous Director in theatre. Thus our students are excelling in the field of arts and contributing greatly to the promotion of Indian culture.
                The achievements and victories of KBN college Dramatic association give immense pleasure and pride to the College. Our students brought laurels to the college and spread its fame far and wide in the State with their outstanding and excellent skills and talents.  The Dramatic Association trains the students to tone up their skills and bring out their hidden talents.  It identifies and encourages students to participate in various cultural activities, competitions and events which provide an excellent opportunity for expression of ideas and strengthens their confidence.</p>
              <p>Details of the Convenor:
                V. Seshagiri Rao- Convener
                Department of Commerce
                Mobile: 9705347432
                Mail id: vsrsakshi@gmail.com</p>
              <h2>List of the Members</h2>
              <pre>
                Name					Designation
                Sri. E. Vara Prasad	Principal – FAC & Chairman
                Sri J. Panduranga Rao	Vice – Chairman
                Sri V. Seshagiri Rao	Lecturer, Dept. of Commerce, Convener
                Sri R. Jithendra Kumar	Lecturer Department of Telugu, Member
                Sri V. Suresh	Lecturer Department of Computers, Member

              </pre>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div id="demoa" className="collapse">
              <h2>ACADEMIC YEAR 2017-2018</h2>
              <ul className="kbn_bulletpoints">

                <li><a href="attachments/dramatic/1.pdf" target="_blank">Our college Dramatic Students participated in Nandi Natakosthavam – 2018 organized by Government of Andhra Pradesh on 2nd February to 10th March, 2018.</a></li>
                <li><a href="attachments/dramatic/2.pdf" target="_blank">Our college Dramatic Students participated in South Indian Inter University Competitions organized by Hindusthan University, Tamilnadu from 18th -22nd December, 2017.</a></li>
                <li><a href="attachments/dramatic/3.pdf" target="_blank">Our college Dramatic Students participated and won II Place (Overall Championship) in Krishna Tarang organized by Krishna University, Machilipatnam from 4th to 6th December, 2017.</a></li>
                <li><a href="attachments/dramatic/4.pdf" target="_blank">S. Jaya Sri Latha, II CBZ participated Rain Dance in Guinness World Records, India & Asia Book of Records held at Saveetha University, Thandalam, Chennai on 2nd December, 2017.</a></li>
                <li><a href="attachments/dramatic/5.pdf" target="_blank">Our college Dramatic Students participated in 53rd College Foundation Day Celebrations on 3rd March, 2018.</a></li>
              </ul>
              <h2>ACADEMIC YEAR 2016-2017</h2>
              <ul className="kbn_bulletpoints">
                <li><a href="attachments/dramatic/6.pdf" target="_blank">Our college Dramatic Students participated in 32nd All India Inter University National Youth Festival organized by Shivaji University, Maharashtra 10-14th February, 2017.</a></li>
                <li><a href="attachments/dramatic/7.pdf" target="_blank">Our college Dramatic Students participated in South Indian Inter University Competitions organized by Bangalore University, Karnataka from 16th -20th December, 2016.
                </a></li>
                <li><a href="attachments/dramatic/8.pdf" target="_blank">Our college Dramatic Students participated and won II Place (Overall Championship) in Krishna Tarang organized by Krishna University, Machilipatnam from 26th to 28th November, 2016.</a></li>
                <li><a href="attachments/dramatic/9.pdf" target="_blank">Our college Dramatic Students participated in 52nd College Foundation Day Celebrations on 11th March, 2017.</a></li>
              </ul>
              <h2>ACADEMIC YEAR 2015-2016</h2>
              <ul className="kbn_bulletpoints">
                <li><a href="attachments/dramatic/10.pdf" target="_blank">Our college Dramatic Students participated and won I Place (Overall Championship) in Krishna Tarang organized by Krishna University, Machilipatnam from 3rd to 5th January, 2016.</a></li>
                <li><a href="attachments/dramatic/11.pdf" target="_blank">Our college Dramatic Students participated in South Indian Inter University Competitions organized by Mangalore University, Karnataka from 18th -22th January, 2016.</a></li>
                <li><a href="attachments/dramatic/12.pdf" target="_blank">Our college Dramatic Students participated in 51st College Foundation Day Celebrations on 11th March, 2017.</a></li>
              </ul>
              <h2>ACADEMIC YEAR 2014-2015</h2>
              <ul>
                <li><a href="attachments/dramatic/13.pdf" target="_blank">Students participated in Indian Group Singing, Classical Solo Singing, Skit performance in the South Indian Inter University Competitions organized by Tumakur University, Karnataka from 8th to 12th December, 2014.</a></li>
                <li><a href="attachments/dramatic/14.pdf" target="_blank">Our college Dramatic Students participated and won II Place (Overall Championship) in Krishna Tarang organized by Krishna University, Machilipatnam from 7th to 9th December, 2013.</a></li>
                <li><a href="attachments/dramatic/15.pdf" target="_blank">Dramatic Students participated in 50th Annual Day Celebrations on 28th February, 2015.</a></li>
                <li><a href="attachments/dramatic/16.pdf" target="_blank"></a></li>
              </ul>
              <h2>ACADEMIC YEAR 2013-2014</h2>

              <ul><li><a href="attachments/dramatic/16.pdf" target="_blank">Krishna Tarang – I Place (Over all championship) on 7th December, 2013 organized by Krishna University, Machilipatnam.</a></li>
                <li><a href="attachments/dramatic/17.pdf" target="_blank">Our college Dramatic Students participated in Folk Dance, Western Group Dance, Spot Painting, Rangoli, Group Song in the event Fest of Youth organized by Noble College, Machilipatnam.</a></li>
                <li><a href="attachments/dramatic/18.pdf" target="_blank">Our college Dramatic Students participated in 49th College Annual Day Celebrations on 10th March, 2014.</a></li>
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3} align="center">DRAMATIC ASSOCIATION</StyledTableCell>
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
    </div>);
};

export default DramaticAssociation;
