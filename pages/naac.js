import React from 'react'
import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';
import NavBar from '../components/Header/index';
import { Container } from '@material-ui/core';
import CalendarCompo from '../components/Calendar'

const NAAC = () => {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>

            <Container style={{marginTop:'400px'}}>
              <CalendarCompo />
            </Container>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default withTransition(NAAC);
