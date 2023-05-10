import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/Ariia/index';
import Footer from '../components/Footer/animatedfooter';

const Ariia = () => {
    return (
        <>
            <Head>
                <title>Ariia - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <AllAboutComponents />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Ariia
