import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import course from "../../public/images/CoursesOfferedPopup.jpg";
import Image from "next/image";
import { Button } from "@material-ui/core";

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
  modalbutton: {
    border: "none",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    margin: "4px 2px",
    padding: "5px 10px",
    transitionDuration: " 0.4s",
    cursor: "pointer",
    backgroundColor: "blue",
    borderRadius: "12px",
  },
}));

export default function index() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
            <Image src={course} alt="brand name" width={950} height={530} />
            </div>
            <div  style={{textAlign:"center"}}>
            
            <Button variant="contained" color="primary" onClick={()=>{setOpen(false)}}>
              Close
            </Button>
            </div>
            {/* <img src={course} alt='kbn courses' width={250} height={112} /> */}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
