
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
import MSCCSSHome from './MSCCSSDep/MSCCSSHome';
import MSCCSAbout from './MSCCSSDep/MSCCSAbout';
import MSCCSFaculty from './MSCCSSDep/MSCCSFaculty';
import MSCCSAchievements from './MSCCSSDep/MSCCSAchievements';
import MSCCSEvents from './MSCCSSDep/MSCCSEvents';
import MSCCSLab from './MSCCSSDep/MSCCSLab';
import MSCCSMore from './MSCCSSDep/MSCCSMore';


const DeptOfMSCCS = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <MSCCSSHome /> },
        { id: 2, title: 'About', componentInfo: <MSCCSAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <MSCCSFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MSCCSAchievements /> },
        { id: 5, title: 'Events', componentInfo: <MSCCSEvents /> },
        { id: 6, title: 'Labs', componentInfo: <MSCCSLab /> },
        { id: 7, title: 'KMore', componentInfo: <MSCCSMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfMSCCS;
