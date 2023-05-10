import React from 'react'
import { makeStyles, withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: '#2f6fe7',
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
            // backgroundColor: '#eee8aa',
            backgroundColor: 'white'
            // color: theme.palette.common.white,

        },
        '&:nth-of-type(even)': {
            // backgroundColor: '#07358a',
            backgroundColor: 'white'

            // color: theme.palette.common.white,

        }
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const yearRanking = [
    createData('1', ['The Candidate Found In Possession Of Any Material Relevant To The Subject Of Examination ( Even In A Coded Form),Written, Typed Or Printed Or Matter Relevant To The Subject On Clothes Worn Or Possessed On Any Part Of The Body Or Pad Or Hall Ticket Or Vanity Bag Or Purse Or Any Other Instrument Normally Permitted Into Examination Hall.','',''], 'Expulsion From The Examination Hall, Cancellation Of Performance Of Candidate In That Paper And The Consequent Papers Of The Particular Semester'),
    createData('2', ['Matter Written On A Desk Or Nearby Wall Established To Be In The Handwriting Of The Candidate In The Examination Hall(With Sufficient Evidence). Even If The Matter Is In Somebody Else’s Handwriting, Taking Into Account The Nearness And Circumstantial Evidence That Invigilating Staff Is Empowered To Book The Case, However, Substantiating The Action Taken.','',''], 'Expulsion From The Examination Hall, Cancellation Of Performance Of Candidate In That Paper And The Consequent Papers Of The Particular Semester'),
    createData('3', ['Possession Of Calculator /Organizer /Cell Phone Where Use Is Prohibited','',''], 'Expulsion From The Examination Hall And Cancellation Of Performance Of The Candidate In The Paper Concerned'),
    createData('4', ['Destruction Or Suppression Of Evidence In Anyway Like Swallowing, Tearing Or Throwing Out.','',''], 'Expulsion From The Hall, Cancellation Of Performance In All Papers Of The Current Examination And Disqualification From Appearing Subsequent Semester End Examinations. Lighter Action May Be Imposed When The Attempt For Destruction Or Suppression Of Evidence Is Not Clearly Established.'),
    createData('5', ['A Candidate Found Copying Or Has Copied From The Forbidden Material Or Is Found Assisting /Helping Any One In Copying Or Has Been Copying From Another.( The Copied Portion In The Answer Book Is To Be Marked And Signed By The Invigilator And The Chief Superintendent).','',''], 'Expulsion From The Exam Hall, Cancellation Of The Particular Paper And Disallowance To Write The Subsequent Papers'),
    createData('6', ['If The Rendering Of Assistance Is Through Transfer Or Exchange Of Answer Book/Additional Book, Both Candidates Are To Be Punished Whether Copying Has Taken Place Or Not.','',''], 'Expulsion Of Both Candidates From The Hall, Cancellation Of Their Performance At The Current Exams, Besides Disqualification From Appearing The Subsequent Papers Of Semester End Examinations.'),
    createData('7', ['Expulsion Of Both Candidates From The Hall, Cancellation Of Their Performance At The Current Exams, Besides Disqualification From Appearing The Subsequent Papers Of Semester End Examinations.Exchange Of Roll Numbers On The Answer Scripts','',''], 'Expulsion From The Hall And Debarring From The Rest Of The Exams. Cancellation Of Performance At The Current Exam And Disqualification From Appearing Any Other Exams For 2 Years And Debarring From The College For 2 Years.'),
    createData('8', ['Insertion Of Main Or Additional Book Detected During Examination Time /Valuation.','',''], 'Debarring From The Rest Of Current Examinations.'),
    createData('9', ['Forbidden Material Found In The Answer Book During Valuation Whether Used Or Not.','',''], 'Cancellation Of The Performance Of All Papers Of The Candidate At The Current Examinations.'),
    createData([10,''], ['Consulting Books Or Papers Or Persons Outside The Hall Before Handing Over The Paper(Eg: Going On The Plea Of Easing Oneself Etc.','',''], 'Expulsion From Hall, Debarring From The Rest Of The Current Exams.'),
    createData([11,''], ['Candidates Writing Irrelevant Matter Or Mark Making Or Writing Names /Initials Regd. No, On The Additional Books Etc. Making Requests To Award Pass Marks Etc. Detected During Valuation.','',''], 'Cancellation Of The Performance Of The Paper Concerned'),
    createData([12,''], ['Influencing Examiner / Examination Personnel Directly Or Through Agents To Get Undue Benefit.','',''], 'Cancellation Of The Performance Of The Paper Concerned'),
    createData([13,''], ['Taking Away The Answer Booklet (Even If It Is Returned Later) Or Leaving The Hall Without Handing Over The Answer Script Or Tearing Away The Answer Booklet Or Part Of It','',''], 'Expulsion From The Hall, Cancellation Of The Performance In All Papers Of Current Exams And Disqualification From Appearing Subsequent Sem End Exams.'),
    createData([14,''], ['Abuses, Threats, Disrespectfully Treating The Invigilating And Supervising Staff Within Premises Or Outside','',''], 'Expulsion From The Hall, Debarring From The Rest Of Exams And Disqualification From Appearing Any Of The Exams For 1 Or 2 Years Depending On The Nature Of The Misconduct.'),
    createData([15,''], ['Physical Assault On Examination Personnel Or Supervising Staff','',''], 'Cancellation Of Performance In All Papers Of Current Examinations , Debarring From Appearing Any Of The Exams In Future. Police Complaint May Be Lodged.'),
    createData([16,''], ['Instigation To Boycott Examination','',''], 'Cancellation Of Performance Of All Papers At The Current Session.'),
    createData([17,''], ['Presentation Of Records Of Another Candidate At The Practical Examination','',''], 'Cancellation Of Performance Of All The Papers At The Current Examinations (Theory And Practical)'),
    createData([18,''], ['A Candidate Found Guilty For More Than One Time At The Current Or Earlier Examinations','',''], 'Cancellation Of Performance Of All Papers At The Current Examinations. Disqualification From Appearing Subsequent Semester-End Examinations. He/She Shall Not Be Promoted To Subsequent Class.'),
    createData([19,''], ['Involvement Of Any Staff Member In The Leakage Of Question Paper Or Meddling With Answer Books, Selling Or Giving Examination Stationery For Use Outside The Hall Or Assisting The Candidate In The Examination Hall, Or Instigating One Student To Help Others.','',''], 'Recommending Suspension From Service And Disciplinary Action Depending On The Seriousness Of The Offence.'),
    createData([20,''], ['Obstruction Of The Examination Personnel Or Squad From Doing Their Duty By Any Employee At The Exam Center.','',''], 'Recommending Loss Of Increment With Entry In The Service Register Of The Person Causing Obstruction.'),
    createData([21,''], ['Other Malpractices, If Any, Not Covered Above.','',''], 'The Malpractice Enquiry Committee Is To Make Specific Recommendations Taking Into Account, The Circumstantial Evidence And The Gravity Of Offence.'),
    createData([22,'A'], ['INTERNAL ASSESSMENT TESTS ',' INTERNAL ASSESSMENT TESTS ','Copying,Destruction Of Evidence'], 'Expulsion From The Examination Hall Debarring From Taking The Rest Of The Current Tests, Cancellation Of Performance Of All The Papers Of The Current Internal Assessment Tests.'),
    createData(['','B'], ['All Other Offences','',''], 'Expulsion From The Examination Hall, Debarring From The Rest Of Tests During The Semester, Cancellation Of Performance In All The Internal Assessment Tests Of The Current Semester.'),

];

const useStyles = makeStyles({
  ugHeading: {
      fontSize: '28px',
      color: '#003494',
      textAlign:'center'
  },
  malPracticeContent:{
	  fontSize:'16px',
	//   fontFamily:'sans-serif'
  }
})



const MalPapers = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.ugHeading}>MALPRACTICE</h2>
	  <p className={classes.malPracticeContent}>
	  The Principal Shall Refer The Cases Of Malpractices In Internal Assessment Tests And Semester End Examinations, To A Malpractice Enquiry Committee, Constituted By Him/Her For The Purpose. Such Committee Shall Follow The Approved Scales Of Punishment, Which Are Given Below. The Principal Shall Take The Necessary Action Against The Erring Students Basing On The Recommendations Of The Committee. Any Action On The Part Of Candidate At Any Examination Trying To Get Undue Advantage In The Performance At Examinations Or Trying To Help Another, Or Devise The Same Through Unfair Means Is Punishable According To The Provisions Contained Here Under.
	  </p>
	  <p className={classes.malPracticeContent}>
	  The Involvement Of The Staff, Who Are In Charge Of Conducting Examinations, Valuing Examinations Papers And Preparing, Keeping Records And Documents Relating To The Examinations In Such Acts (Inclusive Of Providing Incorrect Or Misleading Information) That Infringe Upon The Courses Of Natural Justice To One And All Concerned At The Examinations Shall Be Viewed Seriously And Recommended For Award Of Appropriate Punishment After Thorough Enquiry.
	  </p>
	  	<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell style={{ fontSize: '18px', borderRight: '1px solid #e2e2e2' }} colSpan={0}>#</StyledTableCell>
						<StyledTableCell colSpan={1} style={{ fontSize: '18px', borderRight: '1px solid #e2e2e2' }}>Nature Of Offence(Semester-End Examinations)</StyledTableCell>
						<StyledTableCell colSpan={2} style={{ fontSize: '18px' }}>Scale Of Punishment</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{yearRanking.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell style={{ fontSize: '16px', borderRight: '1px solid #e2e2e2' }} colSpan={0}>
								<div>{row.sno[0]}</div>
								<div style={{fontWeight:'bold',paddingTop:'5px'}}>{row.sno[1]}</div>
							</StyledTableCell>
							<StyledTableCell align="left" style={{ fontSize: '16px', borderRight: '1px solid #e2e2e2' }} colSpan={0}>
								<div>{row?.name[0]}</div>
								<div>{row?.name[1]}</div>
								<div >{row?.name[2]}</div>
							</StyledTableCell>
							<StyledTableCell align="left" style={{ fontSize: '16px' }} colSpan={4}>
								<div style={{ paddingBottom: '7px' }}>{row?.designation}</div>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
            </Table>
        </TableContainer>
		<h2 style={{backgroundColor:'yellow',width:'9%'}}>NOTE</h2>
		<p className={classes.malPracticeContent}>
			In Respect Of The Internal Assessment Tests Depending Upon The Nature And Gravity Of The Offence The Malpractice Enquiry Committee Can Impose The Punishment
		</p>
		<p className={classes.malPracticeContent}>
			In All Cases, The Candidate Or The Candidates Involved Shall Be Sent Out Of The Hall Forthwith And Kept Out From Writing The Paper On The Day But Before The Candidate Or Candidates Actually Leaves Or Leave Premises, His/Her Or Their Explanation Shall Be Taken In Writing And Forwarded To The Controller Of Examinations Along With The Report Setting Forth In Detail All The Material Evidence. The Address To Which Further Communications Are To Be Made Is To Be Obtained From The Candidate.
		</p>
		<p className={classes.malPracticeContent}>
			In Case The Candidate Refuses To Give A Statement He/She Is Not To Be Forced To Do So, Only The Fact Of Her Refusal Shall Be Reported By Squad Member/Invigilator Duly Endorsed By Chief Superintendent.
		</p>
		<p className={classes.malPracticeContent}>
			It Is Often Complained That Other Candidates In The Hall Have Thrown The Incriminating Material Onto Innocent Candidates Or To Their Nearby Places On Sensing The Approach Of Supervising Staff Or Squad. In Such Cases, The Person Booking The Case Has To Declare If He/She Has Clearly Seen While The Alleged Candidate Is Throwing It Out To Fall Within The Hall Or Outside Or If She Is Suspecting On The Basis Of Tally Of Handwriting Although He/She Could Not Identify Who Has Actually Thrown It Out. In The Case Of Typed/Printed Matter Where It Is Difficult To Establish The Identity Of The Person Responsible For Its Origin, And Also Material Found In The Verandah When The Act Of Throwing Out From The Hall Is Not Clearly Seen, The Benefit Of Doubt Should Be Passed On To The Candidate. However, When The Forbidden Material Is Found In The Desk Or In The Folds Of Answer Book Or Question Paper, Or On The Body Or Clothes Of The Candidate, The Case May Be Processed In The Normal Way, Considering The Concealing Not Amounting To An Act Of Suppression Of Evidence.
		</p>
		<p className={classes.malPracticeContent}>
			Wherever It Is Possible To Send The Articles Carrying The Forbidden Material Eg. Handkerchief, Pad, Hall Ticket Etc., They May Be Produced As Exhibits Before The Committee. The Invigilator/Squad Member Who Detected The Case Shall Give In Writing A Full Description Of The Forbidden Material (Size, Place Where Written Etc) And Countersigned By Chief Superintendent.
		</p>
		<p className={classes.malPracticeContent}>
			The Signature Of The Candidate Shall Also Be Taken On The Transcription Paper Or Papers Describing The Material When Transcription Could Not Be Done. The Chief Superintendent/Squad Member/Invigilator Should Include In His/Her Remarks Why The Transcription Could Not Be Done In Such An Event. If The Committee Comes To The Conclusion Basing On Circumstantial Evidence That A Person Has Resorted To Malpractice Despite Some Procedural Lapses In Reporting By The Concerned Supervising Staff, The Case Is To Be Decided According To The Rules Prescribed Above.
		</p>
    </div>
  )
}

export default MalPapers