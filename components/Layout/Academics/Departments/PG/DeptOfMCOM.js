
import React from 'react';
import TelAbout from '../UG/TeluguDep/TelAbout';
import TelFaculty from '../UG/TeluguDep/TelFaculty';
import TelAchivements from '../UG/TeluguDep/TelAchivements';
import TelEvents from '../UG/TeluguDep/TelEvents';
import TelLab from '../UG/TeluguDep/TelLab';
import TelMore from '../UG/TeluguDep/TelMore';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import MBADepHome from './MBADep/MBADepHome';
import MCADepHome from './MCAdep/MCADepHome';
import MCOMHome from './MCOMDep/MCOMHome';
import MCOMAbout from './MCOMDep/MCOMAbout';
import MCOMFaculty from './MCOMDep/MCOMFaculty';
import MCOMAchievements from './MCOMDep/MCOMAchievements';
import MCOMEvents from './MCOMDep/MCOMEvents';
import MCOMLabs from './MCOMDep/MCOMLabs';
import MCOMMore from './MCOMDep/MCOMMore';


const DeptOfMCOM = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <MCOMHome /> },
        { id: 2, title: 'About', componentInfo: <MCOMAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <MCOMFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MCOMAchievements /> },
        { id: 5, title: 'Events', componentInfo: <MCOMEvents /> },
        { id: 6, title: 'Labs', componentInfo: <MCOMLabs /> },
        { id: 7, title: 'KMore', componentInfo: <MCOMMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfMCOM;
