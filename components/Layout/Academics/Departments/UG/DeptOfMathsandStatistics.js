
import React from 'react';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import MathamaticsDepHome from './MathsandStatisticsDep/MathamaticsDepHome';
import MathsandStatisticksEvents from './MathsandStatisticsDep/MathsandStatisticksEvents';
import MathsandStatisticksFaculty from './MathsandStatisticsDep/MathsandStatisticksFaculty';
import MathsandStatisticksLabs from './MathsandStatisticsDep/MathsandStatisticksLabs';
import MathsandStatisticksMore from './MathsandStatisticsDep/MathsandStatisticksMore';
import MathsandStatisticsAbout from './MathsandStatisticsDep/MathsandStatisticsAbout';
import MathsandStatisticsAchivements from './MathsandStatisticsDep/MathsandStatisticsAchivements';

// import TelAbout from './TeluguDep/TelAbout';
// import TelFaculty from './TeluguDep/TelFaculty';
// import TelAchivements from './TeluguDep/TelAchivements';
// import TelEvents from './TeluguDep/TelEvents';
// import TelLab from './TeluguDep/TelLab';
// import TelMore from './TeluguDep/TelMore';
// import TelHome from './TeluguDep/TelHome';

// import ChemistryHome from './ChemistryDep/ChemistryDep';
// import CSDepHome from './ComputerScimceSpplicationDep/CSDepHome';
// import MathamaticsDepHome from './MathsandStatisticsDep/MathamaticsDepHome';


const DeptOfCSandApplications = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <  MathamaticsDepHome /> },
        { id: 2, title: 'About', componentInfo: < MathsandStatisticsAbout /> },
        { id: 3, title: 'Faculty', componentInfo: < MathsandStatisticksFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MathsandStatisticsAchivements /> },
        { id: 5, title: 'Events', componentInfo: <MathsandStatisticksEvents /> },
        { id: 6, title: 'Labs', componentInfo: <MathsandStatisticksLabs /> },
        { id: 7, title: 'KMore', componentInfo: <MathsandStatisticksMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfCSandApplications;
