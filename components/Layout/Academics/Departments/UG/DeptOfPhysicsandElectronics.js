
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
import PhysicsDepHome from './PhysicsandElectronicsDep/PhysicsDepHome';
import PhysicsandElectronicesAbout from './PhysicsandElectronicsDep/PhysicsandElectronicesAbout';
import PhysicsandElectronicesFaculty from './PhysicsandElectronicsDep/PhysicsandElectronicesFaculty';
import PhysicsandElectronicesAchivements from './PhysicsandElectronicsDep/PhysicsandElectronicesAchivements';
import PhysicsandElectronicesEvents from './PhysicsandElectronicsDep/PhysicsandElectronicesEvents';
import PhysicsandElectronicesLabs from './PhysicsandElectronicsDep/PhysicsandElectronicesLabs';
import PhysicsandElectronicesMore from './PhysicsandElectronicsDep/PhysicsandElectronicesMore';


const DeptOfPhysicsandElectronics = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <PhysicsDepHome /> },
        { id: 2, title: 'About', componentInfo: <PhysicsandElectronicesAbout /> },
        { id: 3, title: 'Faculty', componentInfo: < PhysicsandElectronicesFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <PhysicsandElectronicesAchivements /> },
        { id: 5, title: 'Events', componentInfo: <PhysicsandElectronicesEvents /> },
        { id: 6, title: 'Labs', componentInfo: <PhysicsandElectronicesLabs /> },
        { id: 7, title: 'KMore', componentInfo: <PhysicsandElectronicesMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfPhysicsandElectronics;
