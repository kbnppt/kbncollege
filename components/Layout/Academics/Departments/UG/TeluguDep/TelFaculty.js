import React from 'react'

const TelFaculty = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div>
                    <img src='http://www.kbncollege.ac.in/images/nagaraju.jpg' alt='faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <h3>Dr.D.Nagaraju</h3>
                        <p>Faculty </p>
                    </div>
                </div>
                <div>
                    <img src='http://www.kbncollege.ac.in/images/staff/telugu/sivaiahnaik.jpg' alt='faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='http://www.kbncollege.ac.in/images/staff/telugu/sivaiahnaik.pdf'>
                            <h3>S.SIVAIAH NAIK</h3>
                        </a>
                        <p>Faculty </p>
                    </div>


                </div>
                <div>
                    <img src='http://www.kbncollege.ac.in/images/chalapathi.png' alt='faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='https://drive.google.com/uc?id=1FPxD0ZTdmLMbocFpB0-Pwiby38HzW6ZX'>
                            <h3>Dr J.V.CHALAPATHI RAO</h3>
                        </a>
                        <p>Faculty </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TelFaculty