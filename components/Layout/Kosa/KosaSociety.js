import React,{useState} from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import Modal from "@material-ui/core/Modal";
// import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
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
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
		// height:'830px'
      },
    paper2: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: "6px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    	feedbackMain: {
	  justifyContent: "center",
      alignItems:'center',
	//   width: "50%",
		height:'630px',width:'724px',
	  margin: "0",
	},
	handleImg:{
        // marginTop:'50px',
		height:'630px',width:'724px',
		[theme.breakpoints.down("sm")]: {
			height:'550px',width:'324px',
        },
	},
}));


const KosaSociety = () => {
  const classes = useStyles();

  const [formModal, setformModal] = useState(false);
  const [formHeading, setformHeading] = useState('REGISTRATION FORM FOR KOSA');

    return (
        <div >
            <h2 className={classes.teluguHeading}>REGISTRATION FORM FOR Society Registration</h2>
            {/* <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfApZyYPhlBT-bVf7ahE2v4EO4Jz2yrO0aooq6NvFTN-SsVIw/formResponse?embedded=true' noValidate autoComplete="off" > */}
                <div style={{fontSize:'20px',cursor:'pointer'}} onClick={()=> setformModal(true)} >Please&#160;
                    CLICK HERE to Find the Society Registration Form &#160;
                </div>

                <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               className={classes.modal}
               open={formModal}
               onClose={()=>setformModal(false)}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
               timeout: 500,
        }}
      >
        <Fade in={formModal}>
          <div className={classes.paper2}>
            {/* <h2 style={{ textAlign: "center" }}>
              {props.formHeading}
            </h2> */}
            <Grid container spacing={3} className={classes.feedbackMain}>
				<img src="./images/Kosaregistrationform.jpeg" alt="praysong" className={classes.handleImg}   onClick={()=>setformModal(false)}/>
                

            </Grid>
          </div>
        </Fade>
      </Modal>

              {/* <ModalComponent formModal={formModal} setformModal={setformModal} formHeading={formHeading} /> */}

            {/* </form> */}
        </div>
    )
}

export default KosaSociety