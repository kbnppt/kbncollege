import React from 'react'
import { withRouter } from 'next/router'
// import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { List } from './List';
// import Item from '../../pages/[item]';

const Store = ({ router }) => {
    // console.log(router.pathname);
    let { id } = router.pathname;
    // const imageHasLoaded = true;

    return (
        <>
            <List selectedId={id} />
            {/* {id && imageHasLoaded && <Item id={id} key={id} />} */}
        </>
    );
}
export default withRouter(Store);