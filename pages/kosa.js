import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/Kosa/index';
// import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';

const KosaPage = () => {
    return (
        <>
            <Head>
                <title>Kosa - Kakaraparti Bhavanarayana College (Autonomous)</title>
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

export default KosaPage;
