import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        width: '85%',
        border: '1px solid red',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        // marginRight: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),

    },
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">              
                    </IconButton> */}
                        <div className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                            <Link href='/'>Home</Link>
                            <Link href='/about'>About KBN</Link>
                            {/* <Link href='/search'>About KBN</Link> */}
                            <a href="#" >Administration</a>
                            <a href="#" >Academics</a>
                            <a href="#" >ARIIA</a>
                            <a href="#" >Examination Cell</a>
                            <a href="#" >Student Services</a>
                            <a href="#" >Placements</a>
                            <a href="#" >NAAC</a>
                            <Link href='/contact'>Contact Us</Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navigation
