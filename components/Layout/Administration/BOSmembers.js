import React from 'react';
import TableComponent from './Tables/BosMemberTable';

function createData(sno, departments, name, designation, particulars) {
    return { sno, departments, name, designation, particulars };
}

const UG_BOS = [
    createData(1, 'Telugu', 'Dr. G. B. Ananda Kumar', 'Lecturer,Dept. of Telugu, Noble College,Machilipatnam', 'University Nominee'),
    createData(2, 'Telugu', 'Sri K. Manmadha Rao', 'Lecturer, Dept. of Telugu, PB Siddhartha College of Arts & Science College, Vijayawada', 'Subject Expert'),
    createData(3, 'Telugu', 'Dr. K. Sekhar', 'Lecturer in telugu, Andhra Loyola College, Vijayawada', 'Subject Expert'),
    createData(4, 'Telugu', 'Ch. LVNS Anudeep', '--', 'Student Member'),
    createData(5, 'Telugu', 'B. Sai Sandhya', '--', 'Student Member'),
    createData(1, 'English', 'Dr. M. Koteswara Rao', 'Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'English', 'Dr. G. Rajeshekhar', 'Asst. Prof English, Dr.VSK GDC(A) Visakhapatnam', 'Subject Expert'),
    createData(3, 'English', 'Dr. Putla Ananda Rao', 'Sr. Lecturer in English, Baptala College of Arts & Science, Baptla, Guntur District', 'Subject Expert'),
    createData(4, 'English', 'Sri. M. Surendra Nath', 'Director,   Grand Minerva, Vijayawada', 'Representative from industry/corporate sector/allied area'),
    createData(5, 'English', 'Dr. Neelambaram Bolleddu', 'Asst. Prof. of English, VR Siddhartha Engineering College, Kanuru Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Hindi', 'Dr. N. Satyanarayana', 'Andhra University, Vizag', 'University Nominee'),
    createData(2, 'Hindi', 'S. Maruti Rao', 'PB Siddhartha College, Vijayawada', 'Subject Expert'),
    createData(3, 'Hindi', 'B. Rajeswari', 'Maris Stella College, Vijayawada', 'Subject Expert'),
    createData(4, 'Hindi', 'Syed Maharun', 'Andhra University, Vizag', 'Representative from industry/Corporate sector/allied area'),
    createData(5, 'Hindi', 'Yaswanth Varma', 'RV Associates Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Commerce BBA,& Logistics', 'Dr. R. Padmaja', 'Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Commerce BBA,& Logistics', 'Prof.V.Chandra Shekar Rao', 'Principal, University College, Acharya Nagarjuna University', 'Subject Expert'),
    createData(3, 'Commerce BBA,& Logistics', 'Ms.K.Anilambika', 'Associate Professor in Management, Adikavi Nannayya University, Kakinada', 'Subject Expert'),
    createData(4, 'Commerce BBA,& Logistics', 'Mr.Maruthi Ram', 'M/s. Express Printers,Vijayawada', 'Representative from industry/corporate sector/allied area'),
    createData(5, 'Commerce BBA,& Logistics', 'Mr.N.Venkatesh', 'Assistant Manager(PO),Punjab National Bank,Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Mathematics & Analytical Skills', 'Prof. T. Hymavathi', 'Prof., Dept. of Mathematics, Krishna University PG Centre, Nuzvidu', 'University Nominee'),
    createData(2, 'Mathematics & Analytical Skills', 'Smt. L. Achala', 'Lecturer in Mathematics, JKC College, Guntur', 'Subject Expert'),
    createData(3, 'Mathematics & Analytical Skills', 'Sri V. Rama Brahmam', 'Lecturer in Mathematics, Sir CR Reddy College, Eluru', 'Subject Expert'),
    createData(4, 'Mathematics & Analytical Skills', 'K. Mallikharjuna Reddy', 'Teacher, G.N.R. Municipal high School. Rama Rajya Nagar, Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Mathematics & Analytical Skills', 'K. Siva Naga Raju', 'K.B.N College, Vijayawada.', 'Postgraduate meritorious alumnus'),
    createData(1, 'Statistics', 'Dr. K. Bhanu Prasad', 'Senior Lecturer in Statistics, SRR & CVR Govt. Degree College, Vijayawada', 'University Nominee'),
    createData(2, 'Statistics', 'Sri. P. Raghu', 'Lecturer in Statistics, JKC College, Guntur', 'Subject Expert'),
    createData(3, 'Statistics', 'Dr. V. Ravi Sankar', 'Associate Professor in Statistics, Vignan Degree College, Guntur', 'Subject Expert'),
    createData(4, 'Statistics', 'Smt. M. Pushpalatha', 'ASO, Director, Sarva shiksha Abhiyan, KBN Boys High School, Patamata. Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Statistics', 'Smt. N. Liji Prasanna', 'Inductive Quotient, Hyderabad', 'Postgraduate meritorious alumnus'),
    createData(1, 'Physics', 'Dr. M.  Rama Krishna', 'The Hindu College, Machilipatnam', 'University Nominee'),
    createData(2, 'Physics', 'Prof K. Samatha', 'Andhra University, Vizag', 'Subject Expert'),
    createData(3, 'Physics', 'Dr. V. Ravi Kumar', 'ANU Guntur', 'Subject Expert'),
    createData(4, 'Physics', 'Dr. J. Chandrabose', 'Chief Tech, Yagnamayaya Tech suite, Chennai', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Physics', 'A. Bindu Madhavi', 'PSCMR CET, Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Electronics', 'Dr. D. RamaKrishna', 'CEO, Effectronics Systems PVT. Ltd. Vijayawada', 'University Nominee'),
    createData(2, 'Electronics', 'Dr. Sandya Cole', 'Asst. Prof. Dept. of Physics, Acharya Nagarjuna University, Guntur', 'Subject Expert'),
    createData(3, 'Electronics', 'A. Omkara Murthy', 'Lecturer in Electronic, JKC College, Guntur', 'Subject Expert'),
    createData(4, 'Electronics', 'J. Chandra Bose', 'Chief Tech, Yagnamayaya Tech suite, Chennai', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Electronics', 'M. Hemantsai Kumar', 'Lecturer in Electronics, KBN College, Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Chemistry', 'Dr. D. Ramasekhar Reddy', 'Head, Dept. of Chemistry, Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Chemistry', 'Dr. G. Venkata Rao', 'Associate Prof. in Chemistry, SRR & CVR Govt. Degree College, Vijayawada', 'Subject Expert'),
    createData(3, 'Chemistry', 'Dr. K. Suresh Babu', 'Head, Dept. of Chemistry, Sathavahana College, Vijayawada', 'Subject Expert'),
    createData(4, 'Chemistry', 'Annam Rama Krishna', 'Industrialist, Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Chemistry', 'Ch. Namratha', 'M.Sc chemistry', 'Postgraduate meritorious alumnus'),
    createData(1, 'Botany', 'Dr. L. Suseela', 'Head, Dept. of Botany, Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Botany', 'KVS Durga Prasad', 'Associate Professor, Dept. of Botany, Hindu College, Guntur', 'Subject Expert'),
    createData(3, 'Botany', 'Dr. V. Uma Maheswar Rao', 'Associate Professor ANU', 'Subject Expert'),
    createData(4, 'Botany', 'Dr. C. Siva Rama Krishna', 'Sr. Scientist, Dept. of Pharmacognosy-R&D, Laila Nutraceuticals, Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Botany', 'K. Manish', 'ALC Vijayawada.', 'Postgraduate meritorious alumnus'),
    createData(1, 'Zoology & Environmental Studies', 'Dr. J.N. Lavanya Latha', 'Assistant Prof. Dept. of Biotechnology, Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Zoology & Environmental Studies', 'Dr. Ch. Tulasi Mastanamma', 'Asst. Prof. in Zoology, Govt. College for Women, Guntur', 'Subject Expert'),
    createData(3, 'Zoology & Environmental Studies', 'Dr. L. Cyril Anil Kumar', 'Asst. Prof. in Zoology, VSR College, Tenali', 'Subject Expert'),
    createData(4, 'Zoology & Environmental Studies', 'Dr. B.S. Giri', 'Sr. Scientist, CIFA, Penamualuru', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Zoology & Environmental Studies', 'Sri. B. Ishwar Rao', 'Sr. Lecturer in Sri. Chaitanya Institutions, Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Computer Science and BCA', 'Dr. Reddi Kiran Kumar', 'Asst. Prof., Dept. of Computer Science, Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Computer Science and BCA', 'Dr. A. Srinivasa Rao', 'Professor & Head, Department of IT, ALIET, Vijayawada', 'Subject Expert'),
    createData(3, 'Computer Science and BCA', 'Dr. M. Ravisankar', 'Prfoessor & Head, Department of CSE, GIET Engineering College, Rajahmundry', 'Subject Expert'),
    createData(4, 'Computer Science and BCA', 'Sri. M. Hemanth Kumar', 'Data Scientist, Apalya Technologies, Hyderabad', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Computer Science and BCA', 'Smt .P. Bharathi Devi', 'Asst. Professor, Department of MCA, KBN College, PG Centre', 'Postgraduate meritorious alumnus'),
    createData(1, 'Foundation Courses', 'Dr. M. Babu Reddy', 'Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'Foundation Courses', 'Dr. M. Sambasivudu', 'JMJ College(A), Tenali', 'Subject Expert'),
    createData(3, 'Foundation Courses', 'J. Suraiah', 'Adikavi Nannyya University', 'Subject Expert'),
    createData(4, 'Foundation Courses', 'Dr. Illa Ravi,', 'Academic Cell CC E office , Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'Foundation Courses', 'A. Praneetha', 'Asst. Post master, Kakinada', 'Postgraduate meritorious alumnus'),
    createData(1, 'Diploma in Printing Technology', 'Sri V.V. Anjaneyulu', 'Unique Graphics, Vijayawada', 'University Nominee'),
    createData(2, 'Diploma in Printing Technology', 'S. Madhavi Latha', 'Govt. of Printing Technology, Secunderabad', 'Subject Expert'),
    createData(3, 'Diploma in Printing Technology', 'A. Maruti Ram', 'MR Printers, Hanuman Pet, Vijayawada.', 'Representative from industry/Corporate Sector/allied area'),
    createData(4, 'Diploma in Printing Technology', 'B. Gautham', 'MBA II year NOVA  College, Vijayawada', 'Post  Graduate Meritorious  alumnus'),
];

const PG_BOS = [
    createData(1, 'MCA', 'Dr. M. Babu Reddy ', 'Asst. Prof. Dept. of Computer Science, Krishna University', 'University Nominee'),
    createData(2, 'MCA', 'Dr. P. Ashok Reddy', 'Head, Dept of MCA, LBRCE, Mylavaram', 'Subject Expert'),
    createData(3, 'MCA', 'Dr. D.V.N.L.S. Indira', 'Associate Professor, Department of IT, GEC, Gudlavalleru', 'Subject Expert'),
    createData(4, 'MCA', 'Sri. D. Srinivasa Rao', 'Associate Technical Specialist, Tech Mahendra, Hyderabad', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'MCA', 'Sri J. Sreedevi', 'Programming Analyst, Harsco Pvt. Ltd., Hyderabad', 'Postgraduate meritorious alumnus'),
    createData(1, 'M.Sc(Computer Science)', 'Dr. R Kiran Kumar', 'Asst. Professor, Dept of Computer Science Krishna University, Machilipatnam', 'University Nominee'),
    createData(2, 'M.Sc(Computer Science)', 'Dr. Usha Rani', 'Assoc. Professor, Dept of CSE CMR College of Engineering, Hyderabad', 'Subject Expert'),
    createData(3, 'M.Sc(Computer Science)', 'Dr. D. Durga Prasad', 'Professor, Dept of CSE, PSCMRCET, Vijayawada', 'Subject Expert'),
    createData(4, 'M.Sc(Computer Science)', 'Sri R. Krishna Mohan', 'Consultant, Cap Gemini Pvt Ltd.', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'M.Sc(Computer Science)', 'Smt. P. Divya Sree', 'Assistant Prof. Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'MBA', 'Prof. D. Durya Chandra Rao', 'Prof.  Dept. of Business Management', 'University Nominee'),
    createData(2, 'MBA', 'Dr. R. Sivaram', 'Acharya Nagarujuna University, Guntur', 'Subject Expert'),
    createData(3, 'MBA', 'Dr. A.V.V. Siva Prasad', 'Lakshya College of Management, Khammam', 'Subject Expert'),
    createData(4, 'MBA', 'T. Chandra Sekhar', 'Volaln Industries, Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'MBA', 'Md. Hakir Hussian', 'Artha Financial Services, Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'M.Sc (Organic Chemistry)', 'Dr. D. Ramsekahar Reddy', 'Head, Department of Chemistry KU', 'University Nominee'),
    createData(2, 'M.Sc (Organic Chemistry)', 'Dr. C.A. Jyothirmayee', 'St. Theresa College (A), Eluru', 'Subject Expert'),
    createData(3, 'M.Sc (Organic Chemistry)', 'Dr. N. Madavi', 'JKC College Guntur.', 'Subject Expert'),
    createData(4, 'M.Sc (Organic Chemistry)', 'P. Yesubabu', 'Lyla Impex Laboratories, Vijayawada', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'M.Sc (Organic Chemistry)', 'D. Pavani', 'Lecturer in Chemistry, Tenali', 'Postgraduate meritorious alumnus'),
    createData(1, 'M.Com', 'Dr. M. Sravani', 'Asst. Prof. Dept. of Business Management', 'University Nominee'),
    createData(2, 'M.Com', 'Dr. S. Srinivasa Raju', 'HOD M.Com TJPS College, Guntur', 'Subject Expert'),
    createData(3, 'M.Com', 'Dr. N. Ratna Kishore', 'ANU, Guntur', 'Subject Expert'),
    createData(4, 'M.Com', 'Sri Krishna', 'Pharma Sector (Former President CII)', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'M.Com', 'Ms. K. Poojitha', 'Lecturer, Maris Stella College, Vijayawada', 'Postgraduate meritorious alumnus'),
    createData(1, 'PG Diploma in e-banking', 'Prof. M. Babu Reddy', 'Dept. of Computers, Krishna University', 'University Nominee'),
    createData(2, 'PG Diploma in e-banking', 'I. Prabhakar', 'Manager, SBI Chittinagar Vijayawada', 'Subject Expert'),
    createData(3, 'PG Diploma in e-banking', 'P. Krishna Priya', 'Asst. Prof., PVP Siddhartha Institute of Technology, Vijayawada', 'Subject Expert'),
    createData(4, 'PG Diploma in e-banking', 'Ch. Aravind Ganesh', 'KVB I Town Branch, VJA', 'Representative from industry/Corporate Sector/allied area'),
    createData(5, 'PG Diploma in e-banking', 'Raja Kiran', 'Gandhi Nagar, Vijayawada.', 'Postgraduate meritorious alumnus'),
];


const BOSmembers = () => {
    return (
        <div>
            <h4>UG BOS MEMBERS</h4>
            <TableComponent data={UG_BOS} />

            <h4>PG BOS MEMBERS</h4>
            <TableComponent data={PG_BOS} />
        </div>
    )
}

export default BOSmembers;