import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
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
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    testRoot: {
        flexGrow: 1,
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
        '& a': {
            '& span': {
                // border: '1px solid red',
                alignItems: 'center !important',
                textAlign: 'center !important'
            }
        }
    },
}));

export default function HorizontalCutomTabs({ data, shadowProp, subNav }) {
    const classes = useStyles();
    const router = useRouter();

    // console.log('__props', data, shadowProp, subNav)
    let locationUrl;

    if (shadowProp) {
        locationUrl = router?.asPath?.split('#')[1]
    } else {
        locationUrl = router?.asPath?.split('#')[2]
    }

    const findTabValue = (url) => {
        const modifiedUrl = url.split('-').join(' ');
        const results = data?.find((c) => c.title === modifiedUrl);
        // console.log(results, 'results***')
        return results?.id - 1;
    }

    let activeTab = locationUrl ? shadowProp ? 0 : findTabValue(locationUrl) : 0;

    const [value, setValue] = React.useState(activeTab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.testRoot}>
            <AppBar position="static" color="default" style={{ boxShadow: shadowProp ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' : 'none' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable auto tabs example"
                >

                    {data.map((c, i) => {
                        let modifiedUrl;
                        if (!shadowProp) {
                            modifiedUrl = c?.title?.split(' ').join('-');
                        return <Tab label={c.title} href={`#${subNav}#${modifiedUrl}`} {...a11yProps(i)} />
                        }else{
                            modifiedUrl = c?.title;
                        return <Tab label={c.title} href={`#${modifiedUrl}`} {...a11yProps(i)} />
                        }
                    })}
                </Tabs>
            </AppBar>
            {data.map((c, i) => {
                const modifiedUrl = c.title.split(' ').join('-');
                return (
                    <React.Fragment key={i}>
                        <TabPanel value={value} id={`${modifiedUrl}`} index={i}>
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
