// import React from 'react';
// import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
// import ComputerHome from './ComputersandApps/ComputerHome';
// import ComputerAbout from './ComputersandApps/ComputerAbout';
// import ComputerFaculty from './ComputersandApps/ComputerFaculty';


// const DeptOfCSandApplications = () => {
//     const data = [
//         { id: 1, title: 'Home', componentInfo: <ComputerHome /> },
//         { id: 2, title: 'About', componentInfo: <ComputerAbout /> },
//         { id: 3, title: 'Faculty', componentInfo: <ComputerFaculty /> }
//         // { id: 4, title: 'Hand Books', componentInfo: <LibHandBooks /> },
//         // { id: 5, title: 'Question Papers', componentInfo: <LibQuestionpaper /> },
//         // { id: 6, title: 'Labs', componentInfo: <LibLabs /> },
//         // { id: 7, title: 'Digital Library', componentInfo: <LibDigital /> },
//         // { id: 8, title: 'E Resources', componentInfo: <LibResourses /> },
//         // { id: 7, title: 'More', componentInfo: <LibMore /> },
//     ];
//   return <div>
//       <DepartmentInner data={data} />
//   </div>;

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
import CSDepAbout from './ComputerScimceSpplicationDep/CSDepAbout';
import CSDepFaculty from './ComputerScimceSpplicationDep/CSDepFaculty';
import CSDepAchievements from './ComputerScimceSpplicationDep/CSDepAchievements';
import CSDepEvents from './ComputerScimceSpplicationDep/CSDepEvents';
import CSDepLabs from './ComputerScimceSpplicationDep/CSDepLabs';
import CSDepMore from './ComputerScimceSpplicationDep/CSDepMore';


const DeptOfCSandApplications = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <CSDepHome /> },
        { id: 2, title: 'About', componentInfo: <CSDepAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <CSDepFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <CSDepAchievements /> },
        { id: 5, title: 'Events', componentInfo: <CSDepEvents /> },
        { id: 6, title: 'Labs', componentInfo: <CSDepLabs /> },
        { id: 7, title: 'KMore', componentInfo: <CSDepMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfCSandApplications;
