import React from 'react'

const ZoologyFaculty = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div>
                    <img src='http://www.kbncollege.ac.in/images/Dr. SK. CHAND BASHA.jpg' alt='faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='http://www.kbncollege.ac.in/attachments/Dr. SK. Chand Basha profile WEBSITE.pdf'>
                            <h3>Dr. SK. Chand Basha</h3></a>
                        <p>Faculty </p>
                    </div>
                </div>
                <div>
                    <img src='http://www.kbncollege.ac.in/images/zoo_sakuntala.png' alt='faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='http://www.kbncollege.ac.in/attachments/zoo_sakuntala.pdf'>
                            <h3>Dr. G. Sakunthala</h3></a>
                        <p>Faculty </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ZoologyFaculty;