import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HorizontalCutomTabs from './HorizontalBar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            // hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ padding: '0 24px' }} className='inner_Right_com'>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // border: '1px solid red',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        '& a': {
            '& span': {
                alignItems: 'flex-start',
                textAlign: 'left'
            }
        }
        // height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: '250px',
    },
    subNavigationStl: {
        width: '800px',
        [theme.breakpoints.down("md")]: {
            width: '600px',
        },
    }
}));

export default function VerticalTabs({ data }) {
    const router = useRouter();
    let locationUrl = router?.asPath?.split('#')[1];
    // console.log(locationUrl, 'localtionurl');
    // console.log(data, '******');

    const findTabValue = (url) => {
        const modifiedUrl = url.split('-').join(' ');
        const results = data.find((c) => c.title === modifiedUrl);
        return results.id - 1;
    }

    let activeTab = locationUrl ? findTabValue(locationUrl) : 0;
    const classes = useStyles();
    const [value, setValue] = React.useState(activeTab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                indicatorColor="primary"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                selectionFollowsFocus={value ? true : false}
            // onActive={value}
            // onActive={() => setValue(value)}
            >
                {data?.map((c, i) => {
                    const modifiedUrl = c.title.split(' ').join('-');
                    return <Tab key={i} label={c.title} href={`#${modifiedUrl}`} {...a11yProps(i)} />
                })}

            </Tabs>
            {data?.map((c, i) => {
                const modifiedUrl = c.title.split(' ').join('-');
                return (
                    <React.Fragment key={i}>
                        <TabPanel value={value} id={`${modifiedUrl}`} index={i}
                            style={{ width: 'min-content', }}
                        >
                            {c?.subTitles && (
                                <div className={classes.subNavigationStl}>
                                    <HorizontalCutomTabs data={c.subTitles} shadowProp={false} subNav={modifiedUrl} />
                                </div>
                            )}
                            {c?.componentInfo && (
                                <span>
                                    {c?.componentInfo}
                                </span>
                            )}
                        </TabPanel>
                    </React.Fragment>
                )
            })}

        </div>
    );
}
