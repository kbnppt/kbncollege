import React from "react";
import styles from "./news.module.css";
import Image from "next/image";
import HeadingsComponent from "../Headings/index";
import Link from "next/link";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, FormControl, Grid, Icon, Paper, IconButton, InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	modal: {
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center",
	},
	paper: {
	  backgroundColor: theme.palette.background.paper,
	  border: "2px solid #000",
	  borderRadius: "6px",
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	},
	feedbackMain: {
	  justifyContent: "center",
	  width: "90%",
	  margin: "0 auto",
	},
	handleImg:{
		height:'630px',width:'524px',
		[theme.breakpoints.down("sm")]: {
			height:'550px',width:'324px',
        },
	},
	parentsMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	studentsMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	teachersMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	aluminiMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	employerMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	bosMain: {
	  display: "flex",
	  justifyContent: "center",
	  padding: "0.5rem",
	  margin: "0.3rem 0",
	},
	msgInputMain: {
	  textAlign: "center",
	  backgroundColor: "#c1c1c1",
	  padding: "15px",
	  borderBottomLeftRadius: "10px",
	  borderBottomRightRadius: "10px",
	},
	whatsappMain: {
	  position: "fixed",
	  right: 20,
	  bottom: 20,
	  zIndex: 999,
	},
	supportmsgMain: {
	  backgroundColor: "#e5dcd5",
	  paddingTop: "20px",
	  paddingBottom: "20px",
	},
	FormStyle: {
	  margin: '1opx ',
	  minWidth: '200px'
	},
	SubmitStyle: {
	  width: '100%',
	  display: 'flex',
	  justifyContent: 'center',
	  marginTop: '15px '
	}
  }));

  
const News = () => {
	const classes = useStyles();
	const [formModal,setformModal] =React.useState(false)
  return (
    <div>
      <div
        style={{ padding: "2rem 0  4rem 0", background: "#f1f2f6" }}
      >
        <HeadingsComponent data1="KBN " data2="COMMITMENT" />
        <div className={styles.news}>
          <div className={styles.school} onClick={()=>setformModal(true)}>
            <Image src={"/svgs/value.svg"} alt="" width={125} height={125} />
            <p>our</p>
            <p style={{ fontSize: "16px" }}>College</p>
            <p>Motto</p>
          </div>
          <div
            style={{ borderRight: "2px solid #98AFC7", borderColor: "#98AFC7" }}
          ></div>
          <div className={styles.school}>
            <a href="/about#Vision-&-Mission">
              <div>
                <Image
                  src={"/svgs/12years.svg"}
                  alt=""
                  width={125}
                  height={125}
                />
                <p>55 years</p>
                <p style={{ fontSize: "16px" }}>strong</p>
                <p style={{ fontSize: "16px" }}>commitment</p>
                <p>to teaching</p>
              </div>
            </a>
          </div>
          <div
            style={{ borderRight: "2px solid #98AFC7", borderColor: "#98AFC7" }}
          ></div>
          <div className={styles.school}>
            <a href="/about#KBNC-Certificates">
              <div>
                <Image
                  src={"/svgs/inspirational.svg"}
                  alt=""
                  width={125}
                  height={125}
                />
                <p>most</p>
                <p style={{ fontSize: "16px" }}>inspirational</p>
                <p>college</p>
              </div>
            </a>

          </div>
        </div>
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
          <div className={classes.paper}>
            {/* <h2 style={{ textAlign: "center" }}>
              {props.formHeading}
            </h2> */}
            <Grid container spacing={3} className={classes.feedbackMain}>
				<img src="./images/pray.png" alt="praysong" className={classes.handleImg} />

            </Grid>
          </div>
        </Fade>
      </Modal>

    </div>
  );
};

export default News;
