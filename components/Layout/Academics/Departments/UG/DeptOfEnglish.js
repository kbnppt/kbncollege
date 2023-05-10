import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import EngHome from './EnglishDep/EngHome';
import EngAbout from './EnglishDep/EngAbout';
import EngFaculty from './EnglishDep/EngFaculty';
import EngAchivements from './EnglishDep/EngAchivements';
import EngLabs from './EnglishDep/EngLabs';
import EngMore from './EnglishDep/EngMore';
import EngEvents from './EnglishDep/EngEvents';

const DeptOfEnglish = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <EngHome /> },
        { id: 2, title: 'About', componentInfo: <EngAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <EngFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <EngAchivements /> },
        { id: 5, title: 'Events', componentInfo: <EngEvents /> },
        { id: 6, title: 'Labs', componentInfo: <EngLabs /> },
        { id: 7, title: 'KMore', componentInfo: <EngMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfEnglish;
