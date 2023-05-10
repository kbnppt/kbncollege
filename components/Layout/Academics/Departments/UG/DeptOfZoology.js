// import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import ZoologyHome from './ZoologyDep/ZoologyHome';
// import ZoologyAbout from './ZoologyDep/ZoologyAbout';
// import ZoologyFaculty from './ZoologyDep/ZoologyFaculty';
// import ZoologyAchievements from './ZoologyDep/ZoologyAchievements';
// import ZoologyLabs from './ZoologyDep/ZoologyLabs';
// import ZoologyEvents from './ZoologyDep/ZoologyEvents';
// import ZoologyMore from './ZoologyDep/ZoologyMore';



// const DeptOfZoology = () => {
//     const data = [
//         { id: 1, title: 'Home', componentInfo: <ZoologyHome /> },
//         { id: 2, title: 'About', componentInfo: <ZoologyAbout /> },
//         { id: 3, title: 'Faculty', componentInfo: < ZoologyFaculty /> },
//         { id: 4, title: 'Achivements', componentInfo: <ZoologyAchievements /> },
//         { id: 5, title: 'Labs', componentInfo: <ZoologyLabs /> },
//         { id: 6, title: 'Events', componentInfo: <ZoologyEvents /> },
//         { id: 7, title: 'More', componentInfo: <ZoologyMore /> },
//     ];

//     return <div>
//         <DepartmentInner data={data} />
//     </div>;
// };

// export default DeptOfZoology;

import React from 'react';
import TelAbout from './TeluguDep/TelAbout';
import TelFaculty from './TeluguDep/TelFaculty';
import TelAchivements from './TeluguDep/TelAchivements';
import TelEvents from './TeluguDep/TelEvents';
import TelLab from './TeluguDep/TelLab';
import TelMore from './TeluguDep/TelMore';
import TelHome from './TeluguDep/TelHome';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import ZoologyFaculty from './ZoologyDep/ZoologyFaculty';
import ZoologyAchievements from './ZoologyDep/ZoologyAchievements';
import ZoologyEvents from './ZoologyDep/ZoologyEvents';
import ZoologyLabs from './ZoologyDep/ZoologyLabs';
import ZoologyMore from './ZoologyDep/ZoologyMore';
import ZoologyAbout from './ZoologyDep/ZoologyAbout';


const DeptOfZoology = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <ZoologyHome /> },
        { id: 2, title: 'About', componentInfo: <ZoologyAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <ZoologyFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <ZoologyAchievements /> },
        { id: 5, title: 'Events', componentInfo: <ZoologyEvents /> },
        { id: 6, title: 'Labs', componentInfo: <ZoologyLabs /> },
        { id: 7, title: 'KMore', componentInfo: <ZoologyMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfZoology;
