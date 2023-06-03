import React, { useState } from "react";
import { Button, Grid, Icon, IconButton, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import InputBase from "@material-ui/core/InputBase";
import Tooltip from "@material-ui/core/Tooltip";
import ModalComponent from '../components/ModalsComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

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
  totalDiv: {
    position: "fixed",
    right: "20px",
    bottom: "80px",
    zIndex: 999999,
    backgroundColor: "white",
    // height:"320px" ,
    transition: "all 0.3s ease",
    width: "300px",
    borderRadius: "10px",
    // border:"1px solid blue"   //watspp div
  },
  blueDiv: {
    backgroundColor: "#07358a",
    height: "80px",
    width: "300px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    flexDirection: "row",
  },
  blueDivImg: {
    height: "80px",
    width: "100px",
    position: "relative",
    marginTop: 10,
    marginLeft: 10,
  },
  whitecircle: {
    backgroundColor: "white",
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    position: "relative",
  },
  blueDivText: {
    alignItems: "start",
    justifyContent: "start",
    paddingTop: 10,
    // border:"1px solid red",
    width: "260px",
    paddingLeft: 2,
  },
  blueDivp: {
    paddingTop: 5,
    margin: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: "18",
  },
  blueDivSpan: {
    fontSize: 12,
    color: "white",
    padding: 0,
    margin: 0,
  },
  grievanceStyle: {
    position: "fixed",
    left: -91,
    top: "60%",
    zIndex: 999,
    transform: "rotate(270deg)",
  },
  feedBackStyles: {
    position: "fixed",
    left: -38,
    bottom: "8%",
    zIndex: 999,
    transform: "rotate(270deg)",
  },
  feedbackMain: {
    justifyContent: "center",
    width: "80%",
    margin: "0 auto",
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
}));

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formModal, setformModal] = useState(false);

  const [formHeading, setformHeading] = useState('');

  const [watsappOpen, setWatsappOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [pageLoading, setPageLoading] = React.useState(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const handleOpenForm =(data)=>{
    setOpen(false)
    setformHeading(data);
    setformModal(true)
    // setnextModal(false)
  }
  return (
    <>
      {pageLoading ? (
        <div
          style={{
            background: "#20a6b3",
            position: "fixed",
            height: "100vh",
            width: "100%",
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="/svgs/student1.gif"
              style={{ height: "400px", width: "400px" }}
              alt="loading_img"
            />
          </div>
        </div>
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>

          <div className={classes.whatsappMain}>
            <div>
              <div
                onClick={() => setWatsappOpen(!watsappOpen)}
                style={{ textTransform: "none", cursor: "pointer" }}
              >
                <img
                  src="images/watsapp.png"
                  alt="cafeteria"
                  height="50px"
                  width="50px"
                />
              </div>

              <div
                className={classes.totalDiv}
                style={{ display: watsappOpen ? "block" : "none" }}
              >
                <div className={classes.blueDiv}>
                  <div className={classes.blueDivImg}>
                    <div className={classes.whitecircle}>
                      <img
                        src="./images/01-ENG Emblem.png"
                        height="56px"
                        width="56px"
                        style={{ position: "absolute", top: 2, left: 2 }}
                      />
                    </div>
                  </div>
                  <div className={classes.blueDivText}>
                    <p className={classes.blueDivp}>KBN College</p>
                    <span className={classes.blueDivSpan}>
                      Typically replies with in 6hours
                    </span>
                  </div>
                  <div>
                    <IconButton
                      aria-label="close"
                      style={{ color: "white" }}
                      onClick={() => setWatsappOpen(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.supportmsgMain}>
                  <div className="supportMessage">
                    <Card className="msgTriangle">
                      <span style={{ color: "#d0d0d0" }}>Support</span>
                      <p
                        style={{
                          margin: "0",
                          paddingTop: "20px",
                          color: "black",
                        }}
                      >
                        Hi
                      </p>
                      <p style={{ margin: "0", color: "black" }}>
                        How can i help you?
                      </p>
                      <p style={{ float: "right", color: "#d0d0d0" }}>18:58</p>
                    </Card>
                  </div>
                </div>
                <div className={classes.msgInputMain}>
                  <div component="form" className="msgInput">
                    <InputBase
                      placeholder="Type a message.."
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <a
                    href={`https://wa.me/919182907747?text=${message}`}
                    target="_blank"
                  >
                    {" "}
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: "50px",
                        textTransform: "capitalize",
                        backgroundColor: "#07358a",
                        color: "white",
                        width: "80%",
                        marginTop: "10px",
                      }}
                    >
                      Start Chat
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* drop */}
          <div className={classes.grievanceStyle}>
            <div>
              <Tooltip
                title={<pre>OFFER YOUR SUGGESTIONS FOR EARLY RESPONSE</pre>}
                placement="right"
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>handleOpenForm('DROP YOUR GRIEVANCES')}
                  // onClick={() =>
                  //   (window.location.href =
                  //     "https://docs.google.com/forms/d/e/1FAIpQLSfc2ItX8FC9Rpy04YZYDIl_rOStlu-vMy5jTsjkP1eH4Ei5RQ/viewform")
                  // }
                >
                  DROP YOUR GRIEVANCES
                </Button>
              </Tooltip>
            </div>
          </div>
          {/* feedback */}
          <div className={classes.feedBackStyles}>
            <div>
              <Button variant="contained" color="primary"
               onClick={handleOpen}>
                Feedback
              </Button>
            </div>
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 style={{ textAlign: "center" }}>
                      FEEDBACK FROM STAKEHOLDERS
                    </h2>
                    <Grid
                      container
                      spacing={3}
                      className={classes.feedbackMain}
                    >
                      <Grid sm={6} xs={12} className={classes.parentsMain}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "120px" }}
                          onClick={()=>handleOpenForm('PARENTS')}
                        >
                          PARENTS
                        </Button>
                      </Grid>
                      <Grid sm={6} xs={12} className={classes.studentsMain}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "120px" }}
                          onClick={()=>handleOpenForm('STUDENTS')}
                        >
                          STUDENTS
                        </Button>
                      </Grid>
                      <Grid sm={6} xs={12} className={classes.teachersMain}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "120px" }}
                          onClick={()=>handleOpenForm('TEACHERS')}
                        >
                          TEACHERS
                        </Button>
                      </Grid>
                      <Grid sm={6} xs={12} className={classes.aluminiMain}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "120px" }}
                          onClick={()=>handleOpenForm('ALUMNI')}
                        >
                          ALUMNI
                        </Button>
                      </Grid>
                      <Grid sm={6} xs={12} className={classes.employerMain}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "120px" }}
                          onClick={()=>handleOpenForm('EMPLOYERS')}
                        >
                          EMPLOYERS
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Fade>
              </Modal>
              <ModalComponent formModal={formModal} setformModal={setformModal} formHeading={formHeading} />
              {/* <ModalComponent NextModal={nextModal} setNextModal={setnextModal}  /> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MyApp;
