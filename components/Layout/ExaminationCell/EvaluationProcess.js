import React from 'react';
import styles from './excamination.module.css';

const EvaluationProcess = () => {
    return (
        <div>
            <h2>EVALUATION PROCESS
            </h2>
            <article>The college follows evaluation system based on Continuous Internal Assessment (CIA) and Semester-End Examination (SEE). All the students have to pay the prescribed fee for both theory as well as practical examinations. No student will be allowed to take examination without the payment of this fee.</article>
            <h2>THEORY </h2>
            <article>
                The 100 marks allotted for each theory paper in a semester are distributed as per 25:75 secured in CIA and SEE respectively.
            </article>
            <h2>CIA </h2>
            <article>
                It consists of tests, assignments and regular attendance during the semester. 25 marks allotted for CIA are distributed as follows.
            </article>
            <table className={styles.tableMain} align="center" >
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} scope="col">SNO</th>
                        <th style={{ width: "30%" }} scope="col">CATEGORY</th>
                        <th style={{ width: "30%" }} scope="col">MARKS</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: "40%" }} scope="row">1</td>
                        <td>Mid_Test_1</td>
                        <td>15</td>

                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>Mid_Test_2</td>
                        <td>15</td>

                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td >Assignment</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td >Attendance</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td colSpan="2" >total</td>
                        <td >25(CIA)</td>


                    </tr>

                </tbody>
            </table>

            <h3>Note</h3>
            <p style={{ background: 'yellow' }}>The Average Marks For Both Mid Tests Are Considered For 15 MARKS</p>
            <h3>Note</h3>
            <p style={{ background: 'yellow' }}>CIA - The Students Who Failed / Absent For CIA Will Appear For Re-Exam Before The SEE. They Have To Approach The Respective HODs For Appearing For The Examination.</p>

            <h3>MID TESTS</h3>
            <p>
                Each Mid Test Is Held Approximately After 40 Or 45 Days Of Instruction. The Mid Test Will Be Conducted For 30 Marks And For 1½ Hour Duration. Two Tests Will Be Conducted Per Day. The Students Must Preserve The Mid Test Answer Scripts Of Each Semester Until The Marks Statements Are Issued.
            </p>
            <h3>
                ONLINE INTERNAL EXAM
            </h3>
            <p>
                Online Exam Will Be Conducted After 40 Or 45 Days Of First Mid Test Examination Of Each Semester In The Entire Syllabus For 30 Marks And For 30 Minute Duration.
            </p>
            <h3>
                RE-MID TEST
            </h3>
            <p>
                Re-Mid Test Will Be Conducted At The End Of The Semester In The Entire Syllabus, Only To Those Students Who Had Failed In CIA I.E. For Those Who Did Not Obtain 10 Out Of 25 Marks. They Will Be Given Permission Only After Paying The Necessary Re-Mid Test Fee.
            </p>
            <h3>
                PRACTICALS
            </h3>
            <p>
                Practical Examinations Are Held At The End Of Each Semester I.E. Odd-Sem And Even-Sem In All Science Subjects. No Supplementary Examination Will Be Conducted. Students Will Be Divided Into Batches For Practical Examinations. Each Batch Has To Take The Examination On The Specified Dates As Per The Schedule. Out Of 50 Marks 25 Is The Pass Mark (50%).
            </p>
            <p>
                Student Should Have At Least 90 Percent Attendance In Laboratory Work During The Sem. Every Student Should Submit A Duly Certified Record By Their Respective HoD, At The Time Of The Practical Exam. If A Student Fails To Submit The Record He/She Loses 10 Marks Out Of The 50 Marks.
            </p>
            <h3>
                CHOICE BASED CREDIT SYSTEM
            </h3>
            <h4>
                K.B.N.College(Autonomous)Has Started Implementing Choice Based Credit System For The UG Programmes From The Academic Year 2015-16
            </h4>
            <p>
                <b>Credit :</b> A Course Credit Is A Unit That Gives Weightage To The Value, Level Or Time Requirements Of The Academic Subject. One Credit NormallyRepresents 15 To 20 Hours Of Formal Lectures Or Equivalent. Most Of The Subjects Are Valued At Three Credits Every Semester.
            </p>
            <p>
                <b>Credits Attempted: </b>
                The Number Of Attempted Credits Is The Total Number Of Credits That Have Been Registered For And Are Used To Calculate The CGPA. Each Degree Program Contains A Minimum Of 130 And Maximum Of 140 Credits.
            </p>
            <h3>
                Course Is Divided Into The Following Categories.
            </h3>
            <ul>
                <li>Core Courses</li>
                <li>Core Course Practical's</li>
                <li>AbilityEnhancingCompulsoryCourses</li>
                <li>Foundation Courses</li>
            </ul>
            <h3>Grades And Its Numerical Values:</h3>
            <p>
                Grades In The Realm Of Education Are Standardized Measurements Of Varying Levels Of Comprehension Within A Subject Area. Grades Can Be Assigned In The Letters (For Example O,A,B,C,D And F). Each Letter Grade Has A Specific Numeric Value Assigned. Grade Will Be Awarded On The Basis Of Marks Secured On A 10 Point Scale.
            </p>
            <h3>
                Grade Point:
            </h3>
            <p>
                The Grade Point Represents Student’s Performance In A Subject. To Determine Grade Points, The Number Of Credits For The Subject Is Multiplied By The Numerical Value Of The Letter Grade.
            </p>
            <h3>
                GRADE POINTS DIVISION: (2019-22 Batch Onwards)
            </h3>
            <h4>
                Conversion Of Marks Into Grade Points & Letter Grade
            </h4>
            <table className={styles.tableMain}>
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} scope="col">SNO</th>
                        <th style={{ width: "30%" }} scope="col">Range of Marks</th>
                        <th style={{ width: "30%" }} scope="col">Grade Points</th>
                        <th style={{ width: "20%" }} scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>90-100</td>
                        <td>9.0-10.0</td>
                        <td>O</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>80-89</td>
                        <td>8.0-8.9</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td >70-79</td>
                        <td>7.0-7.9</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td >60-69</td>
                        <td>6.0-6.9</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td scope="row">5</td>
                        <td >50-59</td>
                        <td>5.0-5.9</td>
                        <td>D</td>

                    </tr>
                    <tr>
                        <td scope="row">6</td>
                        <td >40-49</td>
                        <td>4.0-4.9</td>
                        <td>E</td>

                    </tr>
                    <tr>
                        <td scope="row">7</td>
                        <td >Below 40</td>
                        <td>0</td>
                        <td>F(FAIL)</td>

                    </tr>
                    <tr>
                        <td scope="row">8</td>
                        <td >Absent</td>
                        <td>0</td>
                        <td>AB</td>

                    </tr>
                </tbody>
            </table>

            <article>
                <li>	Class will be given for Core Course and AECC separately</li>
                <li>SGPA (Semester Grade Point Average) & CGPA (Cumulative Grade Point Average) will be calculated only for Core Courses</li>
                <li>	SGPA = Σ(C*GP)/ΣC</li>
                <b>CGPA = ΣSGPA/6 (at the end of VI sem)</b>
                <ul><li>	C is the Credits of the subject</li>
                    <li>	GP is the Grade Points of the subjects</li>
                    <li>	Passed after 3rd  year or VI semester, he/she will be awarded 'C’ grade and 3rd class </li>
                </ul>
            </article>
            <h3>OVERALL PERFORMANCE (Conversion Of CGPA To Grade And Classification Of Final Result)</h3>

            <table className={styles.tableMain} >
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} scope="col">SNO</th>
                        <th style={{ width: "30%" }} scope="col">Range of CGPA</th>
                        <th style={{ width: "20%" }} scope="col">Grade</th>
                        <th style={{ width: "30%" }} scope="col">final Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>9.00 to 10.0</td>
                        <td>'O'</td>
                        <td>Distinction</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>8.00 to 9.0</td>
                        <td>'A'</td>
                        <td>First Class</td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td >7.00 to 8.0</td>
                        <td>'B'</td>
                        <td>Second Class</td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td >6.00 to 7.0</td>
                        <td>'C'</td>
                        <td>Third Class</td>
                    </tr>
                    <tr>
                        <td scope="row">5</td>
                        <td >Less than 5.0</td>
                        <td>'F'</td>
                        <td>Re-appear</td>

                    </tr>
                </tbody>
            </table>
            <h4>Note: CGPA Multiplied By 10 Gives The Aggregate % Of Marks Obtained By The Candidate.</h4>

            <h3>DECLARATION OF RESULTS:</h3>
            <p>All The Valued Answer Scripts Are Scrutinized At The Controller Of Examinations Office Before The Declaration Of Results To Ensure Fairness In Evaluation. After Deliberations At The Awards Committee Meeting, Results Will Be Declared.</p>

            <h3>APPEALS:</h3>
            <article>
                <b>CIA Valuation & Rectification : </b> Students who have any grievances about the Mid Test and in the tabulation of CIA marks may be brought to the notice of the Principal and Controller of Exams respectively within 24 hours for settling the matter
            </article>
            <h3>REVALUATION:</h3>
            <p>
                A Candidate May Also Apply For Revaluation Of Any Paper In Any Subject Within One Week Of The Declaration Of Results And May Obtain Photo Copies Of Answer Scripts After Paying Prescribed Fee Within One Week Of The Declaration Of The Results.
            </p>
            <p>
                If The Difference Is More Than 20% Or 15 Marks, The Answer- Script Will Be Sent For A Third Valuation. The Average Of The Second And Third Valuation Marks Or The Average Of The First And Third Valuation Marks (Whichever Is Maximum) Will Be Considered As The Final Marks Of The Candidate.
            </p>
            <h4>
                Note: Any Pass After The Stipulated Limit Will Be Treated As Third Class, Irrespective Of The Percentage Of Marks Scored.It Will Be Indicated By An(*)In The Cumulative Marks Statement.
            </h4>
            <h3>
                MEMORANDUM OF MARKS:
            </h3>
            <p>
                Semester-Wise Marks Memoranda Will Be Issued To All The Registered Candidates As And When They Are Ready. Students Who Are On Leave On The Day Of Issue Of Memoranda Of Marks Have To Collect Them Immediately After Their Return. The Authorities Concerned Are Not Obliged To Give Memoranda Of Marks After 90 Days From The Date Of Issue. Cumulative Marks Statements Are Issued To Successful Candidates At The End Of The Course On Payment Of The Prescribed Fee.
            </p>
            <p>
                Students Are Expected To Preserve All Their Memoranda Of Marks For Future Reference. It May Be Noted That No Duplicate Marks Memoranda Will Be Issued As A Routine. In Case Of Loss Or Damage, Duplicate Memoranda Will Be Issued After Completing The Required Legal Formalities And Paying The Prescribed Fee.
            </p>
        </div>
    )
}

export default EvaluationProcess;