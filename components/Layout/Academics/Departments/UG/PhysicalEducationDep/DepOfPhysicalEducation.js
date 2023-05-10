
import React from 'react';
import DepartmentInner from '../../../../../MainSidebar/DepartmentInner';
import PhysicalEducationAbout from './PhysicalEducationAbout';
import PhysicalEducationAchivements from './PhysicalEducationAchivements';
import PhysicalEducationEvents from './PhysicalEducationEvents';
import PhysicalEducationFaculty from './PhysicalEducationFaculty';
import PhysicalEducationHome from './PhysicalEducationHome'
import PhysicalEducationMore from './PhysicalEducationMore';
import PhysicsEducationLabs from './PhysicsEducationLabs';



const DepOfPhysicalEducation = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <PhysicalEducationHome /> },
        { id: 2, title: 'About', componentInfo: <PhysicalEducationAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <PhysicalEducationFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <PhysicalEducationAchivements /> },
        { id: 5, title: 'Events', componentInfo: <PhysicalEducationEvents /> },
        { id: 6, title: 'Labs', componentInfo: <PhysicsEducationLabs /> },
        { id: 7, title: 'KMore', componentInfo: <PhysicalEducationMore /> },

    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DepOfPhysicalEducation;
