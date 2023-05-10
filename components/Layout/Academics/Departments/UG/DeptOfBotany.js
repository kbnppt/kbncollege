import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import BotanyHome from './BotanyDep/BotanyHome';
import BotanyAchievements from './BotanyDep/BotanyAchievements';
import BotanyEvents from './BotanyDep/BotanyEvents';
import BotanyFaculty from './BotanyDep/BotanyFaculty';
import BotanyMore from './BotanyDep/BotanyMore';
import BotanyAbout from './BotanyDep/BotanyAbout';
import BotanyLabs from './BotanyDep/BotanyLabs';


const DeptOfBotany = () => {
    const data = [
        { id: 1, title: 'Home', componentInfo: <BotanyHome /> },
        { id: 2, title: 'About', componentInfo: <BotanyAbout /> },
        { id: 3, title: 'Faculty', componentInfo: < BotanyFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <BotanyAchievements /> },
        { id: 5, title: 'Labs', componentInfo: <BotanyLabs /> },
        { id: 6, title: 'Events', componentInfo: <BotanyEvents /> },
        { id: 7, title: 'More', componentInfo: <BotanyMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfBotany;
