import React from 'react';
import TelAbout from './TeluguDep/TelAbout';
import TelFaculty from './TeluguDep/TelFaculty';
import TelAchivements from './TeluguDep/TelAchivements';
import TelEvents from './TeluguDep/TelEvents';
import TelLab from './TeluguDep/TelLab';
import TelMore from './TeluguDep/TelMore';
import TelHome from './TeluguDep/TelHome';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';


const DeptOfTelugu = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <TelHome /> },
        { id: 2, title: 'About', componentInfo: <TelAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <TelFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <TelAchivements /> },
        { id: 5, title: 'Events', componentInfo: <TelEvents /> },
        { id: 6, title: 'Labs', componentInfo: <TelLab /> },
        { id: 7, title: 'KMore', componentInfo: <TelMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfTelugu;
