import React from 'react';
import Head from 'next/head';
import AllIqacComponentComponents from '../components/Layout/Iqac/index';
import Footer from '../components/Footer/animatedfooter';

const IqacComponent = () => {
    return (
        <>
            <Head>
                <title>Iqac - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <AllIqacComponentComponents />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default IqacComponent;
