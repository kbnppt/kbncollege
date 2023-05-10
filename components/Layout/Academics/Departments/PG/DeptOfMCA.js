
import React from 'react';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import MBADepHome from './MBADep/MBADepHome';
import MCADepHome from './MCAdep/MCADepHome';
import MCAFaculty from './MCAdep/MCAFaculty';
import MCAAchievements from './MCAdep/MCAAchievements';
import MCAAbout from './MCAdep/MCAAbout';
import MCAEvents from './MCAdep/MCAEvents';
import MCALabs from './MCAdep/MCALabs';
import MCAMore from './MCAdep/MCAMore';


const DeptOfMCA = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <MCADepHome /> },
        { id: 2, title: 'About', componentInfo: <MCAAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <MCAFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MCAAchievements /> },
        { id: 5, title: 'Events', componentInfo: <MCAEvents /> },
        { id: 6, title: 'Labs', componentInfo: <MCALabs /> },
        { id: 7, title: 'KMore', componentInfo: <MCAMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfMCA;
