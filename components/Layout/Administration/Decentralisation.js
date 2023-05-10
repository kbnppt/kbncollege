import React from 'react';
import TableComponent from './Tables/DecentralisationTables';

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const planning = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry'),
    createData(5, 'Dr. GVSRNSA Sastry', 'Head, Dept. of Commerce'),
    createData(6, 'Sri P. Ravindra', 'Head, Dept. of Computer Science'),
    createData(7, 'Sri Ch. Nagabhushanam', 'Head, Dept. of Physics – Electronics'),
    createData(8, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics'),
    createData(9, 'Dr. H. Narendra Kumar', 'Head, Dept. of English'),
    createData(10, 'Sri S. Sivaiah Nayak', 'Head, Dept. of Telugu'),
    createData(11, 'Smt. J. Janaki', 'Head, Dept. of Hindi'),
    createData(12, 'Sri Sk. Ismaiel Ali Basha', 'Head, Dept. of Botany'),
    createData(13, 'Dr. Sk. Chand Basha', 'Head, Dept. of Zoology'),
    createData(14, 'Sri N. Sambasiva Rao', 'Incharge, HVPE')
];

const admission = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri J. Panduranga Rao', 'Lecturer in Physics, Member'),
    createData(5, 'Dr. T. Bhagya Kumar', 'Lecturer in Chemistry, Member'),
    createData(6, 'Sri V. Suresh', 'Lecturer in Computer Science, Member'),
    createData(7, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics – Statistics, Member'),
    createData(8, 'Sri R. Uday Kumar', 'Lecturer in Electronics, Member'),
    createData(9, 'Sri S. Vasu', 'Lecturer in Computer Science, Member'),
    createData(10, 'Sri L. Vijay Kumar', 'Lecturer in Statistics, Member'),
    createData(11, 'Sri P. Vishnu Vardhan', 'Lecturer in Electronics, Memberr'),
];

const quality = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry, Co-ordinator'),
    createData(5, 'Smt. Shamim', 'Head, Dept. of M.Sc. (CS), Asst. Co-ordinator'),
    createData(6, 'Sri Ch. Ramesh Babu', 'Controller of Examinations, Member'),
    createData(7, 'Sri A. Pardhasaradhi', 'Office Superintendent, Member'),
    createData(8, 'Dr. V. Subhashini', 'Head, Dept. of Zoology, Advisory Member'),
    createData(9, 'Sri P. Ravindra', 'In-Charge-Criteria-I, Head, Dept. of Computer Science'),
    createData(10, 'Sri N. Sambasiva Rao', 'In-charge-Criteria-II, Incharge, HVPE'),
    createData(11, 'Dr. Sk. Chand Basha', 'In-charge-Criteria-III, Head, Dept. of Zoology'),
    createData(12, 'Sri V. Suresh', 'In-charge-Criteria-IV, Lecturer, Dept. of Computers'),
    createData(13, 'Sri A. Ravi Kiran', 'In-charge-Criteria-V, Lecturer, Dept. of M.Com'),
    createData(14, 'Sri B. Prabhakar', 'In-charge-Criteria-VI, Head, Depts. of MBA – M.Com'),
    createData(15, 'Smt. O. Sailaja', 'In-charge-Criteria-VII, Lecturer, Dept. of Chemistry'),
    createData(16, 'Sri T. Srinivasu', 'Secretary – Correspondent, Member'),
    createData(17, 'Sri MVR Madhu Sudhana Rao', 'MD, Manmadha Cloth Show room, Bundar Road, Member'),
    createData(18, 'Sri M. Kishore', 'Real estate and Stock Marketing, Member'),
    createData(19, 'Sri T. Chandra Sekhar', 'Director, Villain Industries, Vijayawada, Member'),
    createData(20, 'Dr. M. Sivanadh', 'Asso. Prof., Head Dept. of Chemistry, ANR College, Gudivada'),
    createData(21, 'Dr. V. Krishna Reddy', 'Prof. Associate Dean, KL University, Alumni, Member'),
    createData(22, 'Mr. M. Narendra', 'I M.Sc. (Che), Student Member'),
    createData(23, 'Ms. P.L.N. Sai Laya', 'III B.Sc. (MPC), Student Member'),
];

const examinations = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. T. Bhagya Kumar', 'Lecturer in Chemistry, Convenor'),
    createData(5, 'Smt. K. Vanama Devi', 'Lecturer in Maths, Member'),
    createData(6, 'Sri L. Vijay Kumar', 'Lecturer in Statistics, Member'),
    createData(7, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
    createData(8, 'Sri P. Vishnu Vardhan', 'Lecturer in Electronics, Member'),
];

const GRIEVANCES = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri G. Suryanarayana', 'Lecturer in Mathematics, Convenor'),
];

const EXAMINATION_GRIEVANCES = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Ch. Ramesh Babu', 'Controller of Examinations – Convenor'),
    createData(5, 'Sri B. V. Manohar Babu', 'Addl. Controller of Examinations, Member'),
    createData(6, 'Sri A. Ravi Kiran', 'Addl. Controller of Examinations, Member'),
];

const RAGGING_CELL = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. M. Venkateswara Rao', 'Lecturer in Commerce, Convenor'),
    createData(5, 'Sri V. Seshagiri Rao', 'Lecturer in Commerce, Member'),
    createData(6, 'Sri D. Hema Chandra Rao', 'Head, Dept. of Physical Education, Member'),
    createData(7, 'Sri B. Prabhakar', 'Head, Dept. of MBA & M.Com., Member'),
    createData(8, 'Smt. Shamim', 'Head, Dept. of M.Sc. (CS), Member'),
    createData(9, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics – Member'),
];

const WARD_COUNSELING = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Captain KPT Vijaya Bhaskar', 'Lecturer in Chemistry, Convenor'),
    createData(5, 'Dr. JV Chalapathi Rao', 'Lecturer in Telugu, Member'),
    createData(6, 'Sri S. Vasu', 'Lecturer in Computers, Member'),
    createData(7, 'Sri L. Vijay Kumar', 'Lecturer in Statistics, Member'),
    createData(8, 'Sri N. Hemanth Kumar', 'Lecturer in Commerce, Member'),
];

const SC_ST_CELL = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri S. Sivaiah Nayak', 'Head, Dept. of Telugu, Convenor'),
    createData(5, 'Sri Ch. Ravindranath', 'Lecturer in Commerce, Member'),
    createData(6, 'Sri B. Mohan Teja', 'Lecturer in English, Member'),
    createData(7, 'Ms. Anitha', 'III B.Com. (Comp.), Student Member'),
    createData(8, 'Mr. S. Akhil Raj', 'III BCA, Student Member'),
    createData(9, 'Ms. J. Swarna Jyothi', 'III BBA, Student Member'),
];

const OBC_CELL = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Convenor'),
    createData(5, 'Dr. M. Siva Kishore', 'Lecturer in PG Chemistry, Member'),
    createData(6, 'Sri P. Vishnu Vardhan', 'Lecturer in Electronics, Member'),
    createData(7, 'Ms. N. Durga Bhavani', 'III B.Com. (T.P), Student Member'),
    createData(8, 'Ms. G. Sai Sindhu', 'III B.Sc. (MPC), Student Member'),
    createData(9, 'Mr. Ch. Siva Rama Krishna', 'III B.Sc. (CBZ), Student Member'),
];

const INTERNAL_COMPLAINTS = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics, Convenor'),
    createData(5, 'Smt. J. Janaki', 'Head, Dept. of Hindi, Member'),
    createData(6, 'Dr. M. V. Srinivasa Rao', 'Lecturer in Commerce, Member'),
];

const KBN_COLLEGE_CONSUMER = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri A. Gopala Krishna', 'Lecturer in Commerce, Convenor'),
    createData(5, 'Sri Ch. Ravindranath', 'Lecturer in Commerce, Member'),
    createData(6, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
];

const RESEARCH_PROMOTION = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry, Convenor'),
    createData(5, 'Dr. Sk. Chand Basha', 'Head, Dept. of Zoology, Co-Convenor'),
    createData(6, 'Dr. GVSRNSA Sastry', 'Head, Dept. of Commerce – Management, Member'),
    createData(7, 'Dr. M. Venkateswara Rao', 'Lecturer in Commerce, Member'),
];

const RESULTS_COMMITTEE = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Ch. Ramesh Babu', 'Controller of Examinations – Convenor'),
    createData(5, 'Sri B. V. Manohar Babu', 'Addl. Controller of Examinations, Member'),
    createData(6, 'Sri A. Ravi Kiran', 'Addl. Controller of Examinations, Member'),
];

const ACADEMIC_PRIZES = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Ch. Nagabhushanam', 'Head, dept. of Physics – Electronics, Convenor'),
    createData(5, 'Sri G. Suryanarayana', 'Lecturer in Mathematics, Member'),];

const NIRF_AISHE = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Smt. Shamim', 'Head, Dept. of M.Sc. (CS), Member'),
    createData(5, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry, Member'),
    createData(6, 'Sri P. Ravindra', 'Head, Dept. of Computer Science, Member'),
];

const LIBRARY = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Y. Srinivasa Raju', 'Librarian - Convenor'),
    createData(5, 'Smt. V. Vijaya Lakshmi', 'Asst. Librarian, Member'),
    createData(6, 'Smt. D. Naga Lakshmi', 'Asst. Librarian, Member'),
    createData(7, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry, Member'),
    createData(8, 'Dr. GVSRNSA Sastry', 'Head, Dept. of Commerce – Management, Member'),
    createData(9, 'Sri P. Ravindra', 'Head, Dept. of Computer Science, Member'),
    createData(10, 'Sri Ch. Nagabhushanam', 'Head, Dept. of Physics – Electronics, Member'),
    createData(11, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics, Member'),
    createData(12, 'Dr. H. Narendra Kumar', 'Head, Dept. of English, Member'),
    createData(13, 'Sri S. Sivaiah Nayak', 'Head, Dept. of Telugu, Member'),
    createData(14, 'Smt. J. Janaki', 'Head, Dept. of Hindi, Member'),
    createData(15, 'Sri Sk. Ismaiel Ali Basha', 'Head, Dept. of Botany, Member'),
    createData(16, 'Dr. Sk. Chand Basha', 'Head, Dept. of Zoology, Member'),
    createData(17, 'Sri N. Sambasiva Rao', 'Incharge, HVPE, Member'),
];

const STUDIES_CENTRE = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Ms. R. Jayamma', 'Convenor'),
    createData(5, 'Smt. O. Sailaja', 'Lecturer in PG Chemistry, Co-Convenor'),
    createData(6, 'Dr. G. Krishnaveni', 'Head, Dept. of Chemistry – IQAC Coordinator, Advisory Member'),
    createData(7, 'Smt. J. Janaki', 'Head, Dept. of Hindi, Member'),
    createData(8, 'Smt. K. Vanama Devi', 'Lecturer in Mathematics, Member'),
    createData(9, 'Smt. P. Swathi', 'Lecturer in Computer Science, Member'),
    createData(10, 'Ms. P.L.N. Sai Laya', 'III B.Sc. (MPC), Student Member'),
    createData(11, 'Ms. Ch. Charu Hasini', 'I M.Sc. (Che), Student Member'),
];


const STUDENTS_COUNCIL = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. JV Chalapathi Rao', 'Lecturer in Telugu, Coordinator'),
    createData(5, 'Ms. G. Sreeja', 'II MCA, President'),
    createData(6, 'Mr. K. Venkata Sai', 'III B.Sc. (IoT), Vice-President'),
    createData(7, 'Ms. CH. Vimala', 'II B.Sc. (Anal.Che), Secretary'),
    createData(8, 'Mr. R. Vishnu Vardhan', 'III B.Sc. (MECS), Joint-Secretary'),
    createData(9, 'Mr. P. Ashwini Kumar', 'II MBA, Member'),
    createData(10, 'Mr. B. Harsha Vardhan Reddy', 'II B.Com. (T.P), Member'),
];


const ATTENDANCE_MONITORING = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Smt. D. Manoj Kumari', 'Convenor'),
];


const TIME_TABLE = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri N. Sambasiva Rao', 'Incharge, HVPE, Convenor'),
    createData(5, 'Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics, Member'),
    createData(6, 'Sri L. Vijay Kumar', 'Lecturer in Statistics, Member'),
];


const MAGAZINE = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. J.V. Chalapathi Rao', 'Lecturer in Telugu – Convenor'),
    createData(5, 'Sri Ch. Ramesh Babu', 'Controller of Examinations, Member'),
    createData(6, 'Dr. H. Narendra Kumar', 'Head, Dept. of English, Member'),
    createData(7, 'Smt. M. Janaki', 'Head, Dept. of Hindi, Member'),
    createData(8, 'Sri S. Sivaiah Nayak', 'Dept. of Telugu, Member'),
    createData(9, 'Dept. of Telugu, Member', 'Lecturer in Electronics, Memeber'),
    createData(10, 'Smt. M. Kaladevi', 'Lecturer in Computer Science, Member'),
    createData(11, 'Sri Y. Srinivasa Raju', 'Librarian, Member'),
];


const CALENDAR_HANDBOOK = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Ch. Srinivasa Reddy', 'Lecturer in Commerce – Convenor'),
    createData(5, 'Sri B. V. Manohar Babu', 'Lecturer in Commerce, Member'),
    createData(6, 'Sri B. Prabhakar', 'Head, Depts. of MBA – M.Com., Member'),
    createData(7, 'Sri N. Hemanth Kumar', 'Lecturer in Commerce, Member'),
];


const PLACEMENT_CAREER = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri B. Srinivasa Reddy', 'Placement Officer – Convenor'),
    createData(5, 'Sri S. Venkatesh', 'Director, PG Courses, Member'),
    createData(6, 'Sri VT Ram Pawan Kumar', 'Lecturer in Computer Science, Member'),
];

const NSS = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri V. Seshagiri Rao', 'Lecturer in Commerce, Program Officer Unit–I Convenor'),
    createData(5, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Program Officer Unit – II Convenor'),
    createData(6, 'Sri J. Panduranga Rao', 'Lecturer in Physics, Program Officer Unit – III Convenor'),
    createData(7, 'Smt. K. Bangaru Lakshmi', 'Lecturer in Computer Science, Member'),
    createData(8, 'Smt. M. Kaladevi', 'Lecturer in Computer Science, Member'),
    createData(9, 'Mr. Sk. Basha', 'III B.Sc. (Data Science), Student Member'),
    createData(10, 'Ms. Niharika', 'II BBA, Student Member'),
    createData(11, 'Ms. K. Bindu', 'II B.Com. (Gen), Student Member'),
    createData(12, 'Mr. Shankar', 'II B.Com. (Gen), Student Member'),
];

const RED_RIBBON = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. M. V. Srinivasa Rao', 'Lecturer in Commerce, Convenor'),
    createData(5, 'Sri N. Sambasiva Rao', 'Lecturer in Commerce, Member'),
    createData(6, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
    createData(7, 'Sri VT Ram Pawan Kumar', 'Lecturer in Computer Science, Member'),
    createData(8, 'Mr. S. Sri Gopi', 'II B.Com. (Comp.), Student Member'),
    createData(9, 'Ms. P. Subhadra', 'III B.Com. (T.P), Student Member'),
    createData(10, 'Mr. P. Venkata Naik', 'II B.Sc. (IoT), Student Member'),
];

const NCC = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
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

const OLD_STUDENTS_ASSOCIATION = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri D. Hema Chandra Rao', 'Physical Director, Convenor'),
    createData(5, 'Sri J. Panduranga Rao', 'Lecturer in Physics, Member'),
    createData(6, 'Sri V. Seshagiri Rao', 'Lecturer in Commerce, Member'),
    createData(7, 'Sri B. Srinivasa Reddy', 'Placement Officer, Member'),
    createData(8, 'Sri V. Suresh', 'Lecturer in Computer Science, Member'),
    createData(9, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
    createData(10, 'Sri V. T. Ram Pawan Kumar', 'Lecturer in Computer Science, Member'),
    createData(11, 'Smt. O. Sailaja', 'Lecturer in PG Chemistry, Member'),
    createData(12, 'Sri S. Harinadh Babu', 'Lecturer in Physics, Member'),
];

const DEBATING_QUIZ = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Ms. S. Santha Kumari', 'Lecturer in English, Convenor'),
    createData(5, 'Dr. JV Chalapathi Rao', 'Lecturer in Telugu, Member'),
    createData(6, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
    createData(7, 'Smt. J. Janaki', 'Head, Dept. of Hindi, Member'),
    createData(8, 'Dr. H. Narendra Kumar', 'Head, Dept. of English, Member'),
    createData(9, 'Dr. Sk. Chand Basha', 'Head, Dept. of Zoology, Member'),
    createData(10, 'Mr. Surya', 'III B.Sc. (MSCS), Student Member'),
    createData(11, 'Mr. Siva Rama Krishna', 'III B.Sc. (MSCS), Student Member'),
    createData(12, 'Mr. Shushanth', 'II B.Sc. (DS), Student Member'),
    createData(13, 'Mr. Guna Shekhar', 'II B.Sc. (DS), Student Member'),
    createData(14, 'Ms. Anu Priya', 'II B.Sc. (MSCS), Student Member'),
];

const SPORTS_GAMES = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri D. Hema Chandra Rao', 'Physical Director, Convenor'),
    createData(5, 'Sri N. Sambasiva Rao', 'In-charge, HVPE, Member'),
    createData(6, 'Sri L. Vijay Kumar', 'Lecturer in Statistics, Member'),
    createData(7, 'Smt. O. Sailaja', 'Lecturer in PG Chemistry, Member'),
    createData(8, 'Sri P. Vishnu Vardhan', 'Lecturer in Electronics, Member'),
    createData(9, 'Mr. P. Bharath Kumar', 'II B.Com. (T.P), Student Member'),
    createData(10, 'Ms. G. Manasa', 'II B.Sc. (MSCS), Student Member'),
];

const AUDIO_VISUAL = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri J. Panduranga Rao', 'Lecturer in Physics, Convenor'),
    createData(5, 'Sri R. Uday Kumar', 'Lecturer in Electronics, Member'),
];

const ECO_CLUB = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri Sk. Ismaiel Ali Basha', 'Head, Dept. of Botany, Convenor'),
    createData(5, 'Dr. Sk. Chand Basha', 'Head, Dept. of Zoology, Member'),
    createData(6, 'Dr. T. Bhagya Kumar', 'Lecturer in Chemistry, Member'),
    createData(7, 'Mr. M. Dinesh', 'III B.Sc. (CBZ), Student Member'),
    createData(8, 'Ms. T. Durga Siva Sree', 'III B.Sc. (CBZ), Student Member'),
    createData(9, 'Mr. P. Durga Ganesh', 'II B.Sc. (CBZ), Student Member'),
    createData(10, 'Ms. K. Hemalatha', 'II B.Sc. (CBZ), Student Member'),
];

const MANA_TV = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Sri S. Vasu', 'Lecturer in Computers, Convenor'),
    createData(5, 'Ms. Sk. Asiya Begum', 'Lecturer in Computers, Member'),
];

const UNNAT_BHARAT_ABHIYAN = [
    createData(1, 'Dr. V. Narayana Rao', 'Principal – Chairman'),
    createData(2, 'Sri P. L. Ramesh', 'Vice-Principal – Vice – Chairman'),
    createData(3, 'Sri Vijayababu Tekkem', 'Vice-Principal – Vice – Chairman'),
    createData(4, 'Dr. M. V. Srinivasa Rao', 'Lecturer in Commerce, Co-ordinator'),
    createData(5, 'Sri D. Hema Chandra Rao', 'Head, Dept. of Physical Education, Member'),
    createData(6, 'Sri N. Sambasiva Rao', 'In-charge, HVPE, Member'),
    createData(7, 'Sri D. Pavan Kumar', 'Lecturer in Commerce, Member'),
    createData(8, 'Mr. R. Mani Babu', 'III B.Sc. (MPC), Student Member'),
    createData(9, 'Ms. K. Hima Sree', 'III B.Com. (T.P), Student Member'),
];

// createData(, '', ''),

const Decentralisation = () => {

    return (
        <div>
            <h3>PLANNING, EVALUATION & STANDING COMMITTEE</h3>
            <TableComponent data={planning} />

            <h4>ADMISSION COMMITTEE</h4>
            <TableComponent data={admission} />

            <h4>INTERNAL QUALITY ASSURANCE CELL</h4>
            <TableComponent data={quality} />

            <h4>EXAMINATION COMMITTEE</h4>
            <TableComponent data={examinations} />

            <h4>GRIEVANCES – REDRESSAL CELL</h4>
            <TableComponent data={GRIEVANCES} />

            <h4>EXAMINATION GRIEVANCES COMMITTEE</h4>
            <TableComponent data={EXAMINATION_GRIEVANCES} />

            <h4>ANTI-RAGGING CELL</h4>
            <TableComponent data={RAGGING_CELL} />

            <h4>WARD COUNSELING COMMITTEE</h4>
            <TableComponent data={WARD_COUNSELING} />

            <h4>SC – ST CELL COMMITTEE</h4>
            <TableComponent data={SC_ST_CELL} />

            <h4>OBC CELL</h4>
            <TableComponent data={OBC_CELL} />

            <h4>INTERNAL COMPLAINTS COMMITTEE</h4>
            <TableComponent data={INTERNAL_COMPLAINTS} />

            <h4>KBN COLLEGE CONSUMER CLUB</h4>
            <TableComponent data={KBN_COLLEGE_CONSUMER} />

            <h4>RESEARCH PROMOTION – MONITORING CELL</h4>
            <TableComponent data={RESEARCH_PROMOTION} />

            <h4>RESULTS COMMITTEE</h4>
            <TableComponent data={RESULTS_COMMITTEE} />

            <h4>ACADEMIC PRIZES COMMITTEE</h4>
            <TableComponent data={ACADEMIC_PRIZES} />

            <h4>NIRF – AISHE COMMITTEE</h4>
            <TableComponent data={NIRF_AISHE} />

            <h4>LIBRARY COMMITTEE</h4>
            <TableComponent data={LIBRARY} />

            <h4>UGC - WOMEN’S STUDIES CENTRE</h4>
            <TableComponent data={STUDIES_CENTRE} />

            <h4>STUDENTS COUNCIL</h4>
            <TableComponent data={STUDENTS_COUNCIL} />

            <h4>ATTENDANCE – MONITORING CELL</h4>
            <TableComponent data={ATTENDANCE_MONITORING} />

            <h4>TIME-TABLE COMMITTEE</h4>
            <TableComponent data={TIME_TABLE} />

            <h4>MAGAZINE COMMITTEE</h4>
            <TableComponent data={MAGAZINE} />

            <h4>CALENDAR – HANDBOOK COMMITTEE</h4>
            <TableComponent data={CALENDAR_HANDBOOK} />

            <h4>PLACEMENT – CAREER GUIDANCE CELL</h4>
            <TableComponent data={PLACEMENT_CAREER} />

            <h4>NSS COMMITTEE</h4>
            <TableComponent data={NSS} />

            <h4>RED RIBBON CLUB</h4>
            <TableComponent data={RED_RIBBON} />

            <h4>NCC COMMITTEE</h4>
            <TableComponent data={NCC} />

            <h4>KBN COLLEGE OLD STUDENTS ASSOCIATION (KOSA) COMMITTEE</h4>
            <TableComponent data={OLD_STUDENTS_ASSOCIATION} />

            <h4>DEBATING – QUIZ CLUB</h4>
            <TableComponent data={DEBATING_QUIZ} />

            <h4>SPORTS – GAMES COMMITTEE</h4>
            <TableComponent data={SPORTS_GAMES} />

            <h4>AUDIO VISUAL COMMITTEE</h4>
            <TableComponent data={AUDIO_VISUAL} />

            <h4>ECO-CLUB COMMITTEE</h4>
            <TableComponent data={ECO_CLUB} />

            <h4>MANA TV COMMITTEE</h4>
            <TableComponent data={MANA_TV} />

            <h4>UNNAT BHARAT ABHIYAN (UBN) COMMITTEE</h4>
            <TableComponent data={UNNAT_BHARAT_ABHIYAN} />

        </div>
    );
};

export default Decentralisation;
