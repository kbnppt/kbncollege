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
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        '& a': {
            '& span': {
                // border: '1px solid red',
                alignItems: 'center !important',
                textAlign: 'center !important'
            }
        }
    },
}));

const DepartmentInner = ({ data }) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable auto tabs example"
                >
                    {data?.map((c, i) => {
                        return <Tab label={c.title}
                            {...a11yProps(i)} />
                    })}
                </Tabs>
            </AppBar>
            {data?.map((c, i) => {

                return (
                    <React.Fragment key={i}>
                        <TabPanel value={value}
                            index={i}>
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
    )
}

export default DepartmentInner;