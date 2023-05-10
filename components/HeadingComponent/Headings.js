import React from 'react'

const Headings = ({ data, para }) => {
    return (
        <div>
            <h2
                style={{
                    textAlign: 'center',
                    color: '#b05329',
                    textTransform: 'uppercase',
                    paddingBottom: para ? '0px' : '2rem',
                    marginBottom: para ? '0px' : '8px',
                    fontSize: '30px'
                }}>{data}</h2>
        </div>
    )
}

export default Headings
