import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    allBlocks: {
        textAlign: 'center', border: '1px solid red', padding: '4rem 0'
    },
}));

const Index = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <div className={classes.allBlocks}>
                All Placements
                Components
            </div>
        </Container>
    )
}

export default Index
