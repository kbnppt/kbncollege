
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
import MSCOrgHome from './MSCOOrganicDep/MSCOrgHome';
import MSCOOrganicAbout from './MSCOOrganicDep/MSCOOrganicAbout';
import MSCOOrganicFaculty from './MSCOOrganicDep/MSCOOrganicFaculty';
import MSCOOrganicAchivements from './MSCOOrganicDep/MSCOOrganicAchivements';
import MSCOOrganicEvents from './MSCOOrganicDep/MSCOOrganicEvents';
import MSCOOrganicLabs from './MSCOOrganicDep/MSCOOrganicLabs';
import MSCOOrganicKmore from './MSCOOrganicDep/MSCOOrganicKmore';


const DeptOfMSCOrganic = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <MSCOrgHome /> },
        { id: 2, title: 'About', componentInfo: <MSCOOrganicAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <MSCOOrganicFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MSCOOrganicAchivements /> },
        { id: 5, title: 'Events', componentInfo: <MSCOOrganicEvents /> },
        { id: 6, title: 'Labs', componentInfo: <MSCOOrganicLabs /> },
        { id: 7, title: 'KMore', componentInfo: <MSCOOrganicKmore /> },

    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfMSCOrganic;
