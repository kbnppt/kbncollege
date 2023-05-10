import React from 'react'
import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';
import NavBar from '../components/Header/index';


const Alumni = () => {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            Alumni

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default withTransition(Alumni)
