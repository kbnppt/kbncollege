import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core';
import ModalComponent from '../../ModalsComponent/index'

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        fontSize:'23px',
        color:'green',
        margin:'0',
        padding:'12px 0px',
        fontWeight:'normal'
    },
    formLink:{
        color:'blue',
        "&:hover": {
            textDecoration:'underline',
          }
    }
}));


const KosaAluminiRegistrationForm = () => {
  const classes = useStyles();

  const [formModal, setformModal] = useState(false);
  const [formHeading, setformHeading] = useState('REGISTRATION FORM FOR KOSA');

    return (
        <div>
            <h2 className={classes.teluguHeading}>REGISTRATION FORM FOR ALUMINI REGISTRATION</h2>
            {/* <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfApZyYPhlBT-bVf7ahE2v4EO4Jz2yrO0aooq6NvFTN-SsVIw/formResponse?embedded=true' noValidate autoComplete="off" > */}
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=> setformModal(true)} >Please&#160;
                    to Fill the Alumini  Registration Form &#160;
                </div>

              <ModalComponent formModal={formModal} setformModal={setformModal} formHeading={formHeading} />

            {/* </form> */}
        </div>
    )
}

export default KosaAluminiRegistrationForm