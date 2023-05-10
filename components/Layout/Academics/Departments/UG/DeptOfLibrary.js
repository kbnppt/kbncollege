// import React from 'react';
// import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
// import LibAbouts from './LibraryDep/LibAbout';
// import LibDigital from './LibraryDep/LibDigital';
// import LibFaculty from './LibraryDep/LibFaculty';
// import LibHandBooks from './LibraryDep/LibHandBooks';
// import LibLabs from './LibraryDep/LibLabs';
// import LibMore from './LibraryDep/LibMore';
// import LibQuestionpaper from './LibraryDep/LibQuestionpaper';
// import LibraryHome from './LibraryDep/LibraryHome';
// import LibResourses from './LibraryDep/LibResourses';

import React from 'react';
import TelAbout from './TeluguDep/TelAbout';
import TelFaculty from './TeluguDep/TelFaculty';
import TelAchivements from './TeluguDep/TelAchivements';
import TelEvents from './TeluguDep/TelEvents';
import TelLab from './TeluguDep/TelLab';
import TelMore from './TeluguDep/TelMore';
import TelHome from './TeluguDep/TelHome';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import ChemistryHome from './ChemistryDep/ChemistryDep';
import CSDepHome from './ComputerScimceSpplicationDep/CSDepHome';
import LibraryHome from './LibraryDep/LibraryHome';
import LibAbout from './LibraryDep/LibAbout';
import LibFaculty from './LibraryDep/LibFaculty';
import LibHandBooks from './LibraryDep/LibHandBooks';
import LibQuestionpaper from './LibraryDep/LibQuestionpaper';
import LibLabs from './LibraryDep/LibLabs';
import LibDigital from './LibraryDep/LibDigital';
// import LibMore from './LibraryDep/LibMore';


const DeptOfLibrary = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <LibraryHome /> },
//         { id: 2, title: 'About', componentInfo: <LibAbouts /> },
//         { id: 3, title: 'Faculty', componentInfo: <LibFaculty /> },
//         { id: 4, title: 'Hand Books', componentInfo: <LibHandBooks /> },
//         { id: 5, title: 'Question Papers', componentInfo: <LibQuestionpaper /> },
//         { id: 6, title: 'Labs', componentInfo: <LibLabs /> },
//         { id: 7, title: 'Digital Library', componentInfo: <LibDigital /> },
//         { id: 8, title: 'E Resources', componentInfo: <LibResourses /> },
//         { id: 7, title: 'More', componentInfo: <LibMore /> },
//     ];
//   return <div>
//       <DepartmentInner data={data} />
//   </div>;
        { id: 2, title: 'About', componentInfo: <LibAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <LibFaculty /> },
        { id: 4, title: 'HandBooks', componentInfo: <LibHandBooks /> },
        { id: 5, title: 'QuestionPapers', componentInfo: <LibQuestionpaper /> },
        { id: 6, title: 'Labs', componentInfo: <LibLabs /> },
        { id: 7, title: 'Digital Library', componentInfo: <LibDigital /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfLibrary;
