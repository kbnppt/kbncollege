import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/ExaminationCell/index';
// import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';

const ExaminationCellPage = () => {
    return (
        <>
            <Head>
                <title>examination-cell - Kakaraparti Bhavanarayana College (Autonomous)</title>
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

export default ExaminationCellPage;
