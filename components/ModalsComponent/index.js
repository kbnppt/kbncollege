import React, { Component, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  FormControl,
  Grid,
  Icon,
  Paper,
  IconButton,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
// import Icon from '@material-ui/core/Icon';
// import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "6px",
    width: "540px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "scroll",
    height: "500px",
  },
  paper2: {
    backgroundColor: "azure",
    border: "2px solid #000",
    borderRadius: "6px",
    width: "640px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "scroll",
    height: "500px",
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
  FormStyle: {
    margin: "1opx ",
    minWidth: "200px",
  },
  SubmitStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "15px ",
  },
  uploadbutton: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
  },
  input: {
    display: "none",
  },
}));

const ModalComponent = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameofstudent, setNameofstudent] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [ClAss, setClAss] = useState("");
  const [rollno, setRollno] = useState("");
  const [nameoflecturer, setNameoflecturer] = useState("");
  const [department, setDepartment] = useState("");
  const [nameofemployer, setNameofemployer] = useState("");
  const [empdetails, setEmpdetails] = useState("");
  const [nameofalumna, setNameofalumna] = useState("");
  const [programme, setProgramme] = useState("");
  const [passout, setPassout] = useState("");
  const [nextModal, setnextModal] = useState(false);
  const [value, setValue] = React.useState("");

  const [complaint, setComplaint] = useState("");
  const [Youranswer, setYouranswer] = useState("");
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [data, setData] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Complaint: "",
    ReasonOfComplaint: "",
    Occupation: "",
    Address: "",
    NameOfStudent: "",
    ClAss: "",
    rollno: "",
    nameoflecturer: "",
    department: "",
    nameofemployer: "",
    empdetails: "",
    nameofalumna: "",
    programme: "",
    passout: "",
    nextModal: "false",
    value: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const {
    Name,
    Rollno,
    NameOfStudent,
    Programme,
    Nameofalumna,
    Passout,
    NameOfemployer,
    Empdetails,
    Department,
    Nameoflecturer,
    Class,
    Occupation,
    Address,
    Mobile,
    Email,
    Complaint,
    ReasonOfComplaint,
    Value,
    Value2,
    Value3,
    Value4,
    Value5,
    Value6,
    Value7,
    Value8,
    Value9,
    Value10,
    Value11,
    Value12,
    Value13,
    Value14,
    Value15,
    Value16,
  } = data;

  const handleClose = () => {
    props.setformModal(false);
    setnextModal(true);
  };

  const handleClose4 = () => {
    props.setformModal(true);
    setnextModal(false);
  };
  const handleClose2 = () => {
    setnextModal(false);
  };
  const handleClose3 = () => {
    props.setformModal(false);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.Name]: [e.target.Name] });
  };

  const handleChange2 = (event) => {
    setValue(event.target.value2);
  };
  const handleChange3 = (event) => {
    setValue(event.target.value3);
  };
  const handleChange4 = (event) => {
    setValue(event.target.value4);
  };
  const handleChange5 = (event) => {
    setValue(event.target.value5);
  };
  const handleChange6 = (event) => {
    setValue(event.target.value6);
  };
  const handleChange7 = (event) => {
    setValue(event.target.value7);
  };
  const handleChange8 = (event) => {
    setValue(event.target.value8);
  };
  const handleChange9 = (event) => {
    setValue(event.target.value9);
  };

  const handleChange10 = (event) => {
    setValue(event.target.value10);
  };
  const handleChange11 = (event) => {
    setValue(event.target.value11);
  };
  const handleChange12 = (event) => {
    setValue(event.target.value12);
  };
  const handleChange13 = (event) => {
    setValue(event.target.value12);
  };
  const handleChange14 = (event) => {
    setValue(event.target.value12);
  };
  const handleChange15 = (event) => {
    setValue(event.target.value12);
  };
  const handleChange16 = (event) => {
    setValue(event.target.value12);
  };
  const handleChangetoggleswitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // const HandleNext = () =>{
  //   props.setformModal(false);
  //   setnextModal(true)

  // }

  // const   HandleSubmit  = (e) => {
  //   setComplaint(e.target.value);
  // };

  return (
    <React.Fragment>
      {/* final modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={nextModal}
        onClose={() => props.setformModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={nextModal}>
          <div className={classes.paper2} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-8px",
                right: "20px",
                color: "white",
              }}
            >
              <IconButton
                onClick={handleClose2}
                className={classes.button}
                aria-label="Delete"
              >
                <CloseIcon
                  style={{
                    color: "white",
                    border: "1px solid black",
                    backgroundColor: "black",
                    borderRadius: "8px",
                  }}
                />
              </IconButton>
            </div>
            {/* form stars */}

            {props.formHeading === "PARENTS" ? (
              <React.Fragment>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "20px 5px",
                      borderRadius: "10px",
                    }}
                  >
                    FEEDBACK FROM {props.formHeading}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "-10px",
                      padding: "0px 20px",
                    }}
                  >
                    <p>EXCELLENT:-5</p>
                    <p>VERY GOOD: 4</p>
                    <p>GOOD-3</p>
                    <p>SATISFACTORY-2</p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      1.Admission Process & Fee Structure of the courses offered
                      by the college
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      2.The Academic Courses offered at the UG level*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value3}
                      onChange={handleChange3}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      3.Discipline in the college*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value4}
                      onChange={handleChange4}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      4.Introduction of (Choice Based Credit System) CBCS at
                      degree level from 2015-16 *
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value5}
                      onChange={handleChange5}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      5.Regularity in informing you about student performance*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value6}
                      onChange={handleChange6}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      6.Rate the quality of teachers in the college
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value7}
                      onChange={handleChange7}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      7.Rate the Ward Counseling system and Career guidance
                      given by the college*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value8}
                      onChange={handleChange8}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      8.Rate the Extracurricular activities*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value9}
                      onChange={handleChange9}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      9.How do you rate the Science Labs & ICT Labs*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value10}
                      onChange={handleChange10}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      10.Your opinion about the Library facilities in the
                      college*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value11}
                      onChange={handleChange11}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      11.Rate the Sports facilities of the college*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value12}
                      onChange={handleChange12}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      12.Your opinion about the Certificate & Diploma courses
                      offered by the college (MS Office, DTP, Accounting
                      Package, etc.,)*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value13}
                      onChange={handleChange13}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      13.The Canteen & Medical facilities in the college*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value14}
                      onChange={handleChange14}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      14.Rate the College Infrastructure*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value15}
                      onChange={handleChange15}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      15.Overall opinion of the College*
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value16}
                      onChange={handleChange16}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="EXCELLENT"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="VERY GOOD"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="GOOD"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="SATISFACTORY"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "150px",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ padding: "20px 20px 0px 20px " }}>
                    Any Suggestion(s)
                  </p>
                  <div style={{ paddingLeft: "20px" }}>
                    <TextField
                      style={{ width: "80%", height: "20px" }}
                      variant="outlined"
                      label="Your answer"
                      value={Youranswer}
                      onChange={(e) => setYouranswer(e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Button
                      variant="contained"
                      color="gray"
                      onClick={handleClose4}
                    >
                      back
                    </Button>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                {/* form ends */}
              </React.Fragment>
            ) : props.formHeading === "STUDENTS" ? (
              <React.Fragment>
                <div
                  style={{
                    // backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "20px 5px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    FEEDBACK FROM {props.formHeading}
                  </p>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        1.Rate the admission procedure and fees structure
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        2.The course content met with your expectations
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        3.The course content relevant to the job market needs
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        4.Rate the relevance of the text books and reference
                        books available in the library
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        5.Additional courses/Certificate/Diploma courses
                        provided in the college
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        6.Rate the evaluation and release of result s at the end
                        of the semeste
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        7.Organising of workshops /seminars for imparting
                        practical orientation
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        8.Guest Lectures / field trips organised
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        9.The faculty has clear knowledge of the subject and
                        completes the syllabus on time
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        10.He / she uses technology aids Eg:- Computer, OHP, LCD
                        , Audio, Video , PPTHe / she uses technology aids Eg:-
                        Computer, OHP, LCD , Audio, Video , PPT
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        11.He /she promotes self-learning participation in class
                        activities ( Eg. Quiz, GDs etc)
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        12.He / she completes the syllabus on time
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        13.Mentoring and counselling of the students is done
                        regularly
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        14.Infrastructure facilities of the college
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        15.Sports and Gymnasium
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        16.NCC/NSS/ Extra -curricular activities
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        17.Canteen & Medical Facilities
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        18.Parking & Secuirty
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        19.Discipline in the College
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        20.Overall Rating of the College
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "150px",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ padding: "20px 20px 0px 20px " }}>
                      Any Suggestion(s)
                    </p>
                    <div style={{ paddingLeft: "20px" }}>
                      <TextField
                        style={{ width: "80%", height: "20px" }}
                        variant="outlined"
                        label="Your answer"
                        value={Youranswer}
                        onChange={(e) => setYouranswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Button
                        variant="contained"
                        color="gray"
                        onClick={handleClose4}
                      >
                        back
                      </Button>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : props.formHeading === "TEACHERS" ? (
              <React.Fragment>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "20px 5px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    FEEDBACK FROM {props.formHeading}
                  </p>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        1.The objectives of syllabi are well defined
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        2.The syllabus is suitable to the course
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        3.Course Objectives and Course Outcomes are well defined
                        and clear to both teachers and students
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        4.The Syllabus of the course has good balance between
                        theory and application
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        5.Curriculum has been updated time to time
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        6.All POs can be adequately addressed through the
                        selection of core courses and their COs
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        7.Teachers involvement in design and review of
                        curriculum
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        8.The college has given me full freedom to adopt new
                        techniques/strategies of teaching such as group
                        discussions, seminar presentations and learners'
                        participation
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        9.The environment in the college is conducive to
                        teaching and research
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "15px" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        10.The prescribed books are available in the library in
                        sufficient numbers
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div style={{ display: "flex" }}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Unsatisfactory   "
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Satisfactory"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=" Fair"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label=" Good"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label=" Very Good"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "150px",
                      margin: "20px 0px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ padding: "20px 20px 0px 20px " }}>
                      Any Suggestion(s)
                    </p>
                    <div style={{ paddingLeft: "20px" }}>
                      <TextField
                        style={{ width: "80%", height: "20px" }}
                        variant="outlined"
                        label="Your answer"
                        value={Youranswer}
                        onChange={(e) => setYouranswer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Button
                        variant="contained"
                        color="gray"
                        onClick={handleClose4}
                      >
                        back
                      </Button>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : props.formHeading === "ALUMNI" ? (
              <React.Fragment>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "20px 5px",
                      borderRadius: "10px",
                    }}
                  >
                    FEEDBACK FROM {props.formHeading}
                  </p>

                  <div
                    style={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      marginTop: "20px",
                      padding: "0px 20px",
                    }}
                  >
                    <p>
                      Dear Alumni, please give your overall assessment of our
                      Institute's academics. Please rate us on the following
                      criterion:
                    </p>
                    <p
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-Unsatisfactory (US), 2- Satisfactory (S),<br></br> 3-
                      Fair (F), 4- Good (G), 5-Very Good (VG)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      1.Admission procedure
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      2.Fee structure
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      3.College Environment
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      4.Relevance of course content to meet the industry
                      standards
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      5.Effectiveness of the programme in developing skills
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      6.Teacher Quality and Expertise
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      7.Evaluation System
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      8.Availability of activity based learning
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      9.Motivation for research
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      10.Infrastructure and lab facilities
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      11.Library contains adequate learning resources
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      12.Canteen facilities
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      13.Training and placement activities of the college
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      14.Sports / Gymnasium
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      15.NSS / NCC / Extracurricular activities
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      16.Guidance for Career Development
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      17.Rate the courses that you have learned about your
                      current job
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      18.Overall rating of the college
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "150px",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ padding: "20px 20px 0px 20px " }}>
                    Any Suggestion(s)
                  </p>
                  <div style={{ paddingLeft: "20px" }}>
                    <TextField
                      style={{ width: "80%", height: "20px" }}
                      variant="outlined"
                      label="Your answer"
                      value={Youranswer}
                      onChange={(e) => setYouranswer(e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Button
                      variant="contained"
                      color="gray"
                      onClick={handleClose4}
                    >
                      back
                    </Button>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ) : props.formHeading === "EMPLOYERS" ? (
              <React.Fragment>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "20px 5px",
                      borderRadius: "10px",
                    }}
                  >
                    FEEDBACK FROM {props.formHeading}
                  </p>

                  <div
                    style={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      marginTop: "20px",
                      padding: "0px 20px",
                    }}
                  >
                    <p>
                      Dear Employer, please give your overall assessment of our
                      Institute academics. Please rate us on following
                      criterion:
                    </p>
                    <p
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      1-Unsatisfactory (US), 2- Satisfactory (S),<br></br> 3-
                      Fair (F), 4- Good (G), 5-Very Good (VG)
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      1.Curriculum is relevant for employ-ability
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      2.Curriculum is effective in developing innovative
                      thinking
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      3.Syllabus is effective in developing skill oriented human
                      resources
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      4.Current syllabus is need based
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      5.Effectiveness of curriculum for development of
                      employability
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      6.Relevance of the topics to the Industry
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      7.Open to new ideas and learning new techniques
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      8.The proficiency of our students working with you
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      9.Working as part of a team
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      10.Technical knowledge / skill ability to manage /
                      leadership qualities
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      11.Their reliability, honesty and hard working nature
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      12.Using technology and workplace equipment for capacity
                      building of organisation
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      13.Competency level of students
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      14.Involvement in social activities
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      15.Ability to take up extra responsibility
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      16.Ability to enhance technical and facilitation skills
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      17.Creative in response to workplace challenges
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      18.Obligation to work beyond schedule if required
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      19.Ability to contribute to the goal of the organization
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    style={{ marginLeft: "15px" }}
                  >
                    <FormLabel
                      component="legend"
                      style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                    >
                      20.Overall rating of the college
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="Rating"
                      value={Value2}
                      onChange={handleChange2}
                    >
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Unsatisfactory   "
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Satisfactory"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=" Fair"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=" Good"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=" Very Good"
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "150px",
                    margin: "20px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ padding: "20px 20px 0px 20px " }}>
                    What other courses you suggest for this organization?
                  </p>
                  <div style={{ paddingLeft: "20px" }}>
                    <TextField
                      style={{ width: "80%", height: "20px" }}
                      variant="outlined"
                      label="Your answer"
                      value={Youranswer}
                      onChange={(e) => setYouranswer(e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Button
                      variant="contained"
                      color="gray"
                      onClick={handleClose4}
                    >
                      back
                    </Button>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <></>
            )}
          </div>
        </Fade>
      </Modal>

      {/* initial modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.formModal}
        onClose={() => setnextModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.formModal}>
          <div className={classes.paper1} style={{}}>
            <div
              style={{
                display: "flex",
                position: "relative",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <h2 style={{ textAlign: "center" }}>{props.formHeading}</h2>
              </div>
              <div style={{ position: "absolute", top: "13px", right: "30px" }}>
                <IconButton
                  onClick={handleClose3}
                  className={classes.button}
                  aria-label="Delete"
                >
                  <CloseIcon
                    style={{
                      color: "white",
                      border: "1px solid black",
                      backgroundColor: "black",
                      borderRadius: "8px",
                    }}
                  />
                </IconButton>
              </div>
            </div>
            <Grid className={classes.feedbackMain}>
              {props.formHeading === "PARENTS" ? (
                <>
                  <form noValidate autoComplete="off">
                    <>
                      <p>NAME OF THE PARENT</p>
                      <TextField
                        variant="outlined"
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </>
                    <p>OCCUPATIION</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                    <p>ADDRESS</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p>MOBILE NUMBER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <p>EMAIL ADDRESS</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>NAME OF THE STUDENT</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="NameOfStudent"
                      value={nameofstudent}
                      onChange={(e) => setNameofstudent(e.target.value)}
                    />
                    <p>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Next
                      </Button>
                    </p>
                  </form>
                </>
              ) : props.formHeading === "STUDENTS" ? (
                <>
                  <form noValidate autoComplete="off">
                    <p>NAME OF THE STUDENT</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="NameOfStudent"
                      value={nameofstudent}
                      onChange={(e) => setNameofstudent(e.target.value)}
                    />
                    <p>CLASS</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Class"
                      value={ClAss}
                      onChange={(e) => setClAss(e.target.value)}
                    />
                    <p>ROLL NO</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Rollno"
                      value={rollno}
                      onChange={(e) => setRollno(e.target.value)}
                    />
                    <p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Next
                      </Button>
                    </p>
                  </form>
                </>
              ) : props.formHeading === "TEACHERS" ? (
                <>
                  <form noValidate autoComplete="off">
                    <p>NAME OF THE LECTURER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Nameoflecturer"
                      value={nameoflecturer}
                      onChange={(e) => setNameoflecturer(e.target.value)}
                    />
                    <p>DEPARTMENT</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                    <p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Next
                      </Button>
                    </p>
                  </form>
                </>
              ) : props.formHeading === "ALUMNI" ? (
                <>
                  <form noValidate autoComplete="off">
                    <p>NAME OF THE ALUMNUS/ALUMNA</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Nameofalumna"
                      value={nameofalumna}
                      onChange={(e) => setNameofalumna(e.target.value)}
                    />
                    <p>PROGRAMME</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Programme"
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                    />
                    <p>YEAR OF PASS OUT</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Passout"
                      value={passout}
                      onChange={(e) => setPassout(e.target.value)}
                    />
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: "" }}
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#000", padding: "20px 0px 10px 0px" }}
                      >
                        Current status
                      </FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="Rating"
                        value={Value2}
                        onChange={handleChange2}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Employed"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Higher Education"
                          />
                          <div style={{ display: "flex" }}>
                            <FormControlLabel
                              value="3"
                              control={<Radio />}
                              label="Other:"
                            />
                            <TextField
                              style={{ height: "10px" }}
                              fullWidth
                              variant="filled"
                              label=""
                              value={nameofalumna}
                              onChange={(e) => setNameofalumna(e.target.value)}
                            />
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <p>
                      EMPLOYER DETAILS(Organization Name,Address&Designation)
                    </p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Empdetails"
                      value={empdetails}
                      onChange={(e) => setEmpdetails(e.target.value)}
                    />
                    <p>MOBILE NUMBER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <p>EMAIL ADDRESS</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Next
                      </Button>
                    </p>
                  </form>
                </>
              ) : props.formHeading === "EMPLOYERS" ? (
                <>
                  <form noValidate autoComplete="off">
                    <p>NAME OF THE EMPLOYER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Nameofemployer"
                      value={nameofemployer}
                      onChange={(e) => setNameofemployer(e.target.value)}
                    />
                    <p>
                      EMPLOYER DETAILS(Organization Name,Address&Designation)
                    </p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Empdetails"
                      value={empdetails}
                      onChange={(e) => setEmpdetails(e.target.value)}
                    />
                    <p>MOBILE NUMBER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <p>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Next
                      </Button>
                    </p>
                  </form>
                </>
              ) : props.formHeading === "DROP YOUR GRIEVANCES" ? (
                <>
                  <form noValidate autoComplete="off">
                    <p>EMAIL ADDRESS</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <p>NAME </p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Nameofemployer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <p>Programme</p>

                    <FormControl fullWidth>
                      {/* <InputLabel variant="outlined" label="Email"></InputLabel>0 */}
                      <Select
                        // labelId="demo-simple-select-outlined-label"
                        // id="demo-simple-select-outlined"
                        fullWidth
                        variant="outlined"
                        label="Programme"
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                      >
                        <MenuItem value="Acadamics">
                          {/* <em>Acadamics</em> */}
                        </MenuItem>
                        <MenuItem value="CSE">CSE</MenuItem>
                        <MenuItem value="MEC">MEC</MenuItem>
                        <MenuItem value="MPC">MPC</MenuItem>
                        <MenuItem value="A&T">A&T</MenuItem>
                        <MenuItem value="Bi.P.C">Bi.P.C</MenuItem>
                        <MenuItem value="CEC">CEC</MenuItem>
                        <MenuItem value=" B.Sc MPC">B.Sc MPC</MenuItem>
                        <MenuItem value="MPES">B.Sc MPCS</MenuItem>
                        <MenuItem value="MECS">B.Sc MECS</MenuItem>
                        <MenuItem value="MECS">B.Sc MECS</MenuItem>
                        <MenuItem value="MCCS">B.Sc MCCS</MenuItem>
                        <MenuItem value="B.Sc IOT">B.Sc IOT</MenuItem>
                        <MenuItem value="B.Sc CBZ">B.Sc CBZ</MenuItem>
                        <MenuItem value="B.Com COMPUTERS">
                          B.Com COMPUTERS
                        </MenuItem>
                        <MenuItem value="B.Com GENERAL">B.Com GENERAL</MenuItem>
                        <MenuItem value="B.Com TAX PROCEDURE">
                          B.Com TAX PROCEDURE
                        </MenuItem>
                        <MenuItem value="B.Com LOGISTICS">
                          B.Com LOGISTICS
                        </MenuItem>
                        <MenuItem value="BBA">BBA</MenuItem>
                        <MenuItem value="MBA">MBA</MenuItem>
                        <MenuItem value="MCA">MCA</MenuItem>
                        <MenuItem value="MSc(CS)">MSc(CS)</MenuItem>
                        <MenuItem value="MCom">MCom</MenuItem>
                        <MenuItem value="M.Sc(ORGANIC CHEMISTRY)">
                          M.Sc(ORGANIC CHEMISTRY)
                        </MenuItem>
                        <MenuItem value="M.Sc(ANALYTICAL CHEMISTRY)">
                          M.Sc(ANALYTICAL CHEMISTRY)
                        </MenuItem>

                        <MenuItem value="Autonomous">autonomous</MenuItem>
                        <MenuItem value="Canteen">Canteen</MenuItem>
                        <MenuItem value="Scholarship">Scholarship</MenuItem>
                      </Select>
                    </FormControl>

                    <p>ROLL NO</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Rollno"
                      value={rollno}
                      onChange={(e) => setRollno(e.target.value)}
                    />

                    <p>MOBILE NUMBER</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <p>Type of Complaint</p>

                    <FormControl fullWidth>
                      {/* <InputLabel variant="outlined" label="Email"></InputLabel>0 */}
                      <Select
                        // labelId="demo-simple-select-outlined-label"
                        // id="demo-simple-select-outlined"
                        fullWidth
                        variant="outlined"
                        label="Programme"
                        value={programme}
                        onChange={(e) => setProgramme(e.target.value)}
                      >
                        <MenuItem value="Academics">Academics</MenuItem>

                        <MenuItem value="Autonomous">autonomous</MenuItem>

                        <MenuItem value="Canteen">Canteen</MenuItem>
                        <MenuItem value="Scholarship">Scholarship</MenuItem>
                        <MenuItem value="Sports">Sports</MenuItem>
                        <MenuItem value="Attendance">Attendance</MenuItem>
                        <MenuItem value="General">General</MenuItem>
                      </Select>
                    </FormControl>
                    <p>Write Your Complaints here</p>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your answer"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <p>Upload file</p>
                    <div className={classes.uploadbutton}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Upload
                        </Button>
                      </label>
                    </div>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      <div>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.checkedB}
                              onChange={handleChangetoggleswitch}
                              name="checkedB"
                              color="primary"
                            />
                          }
                          label=""
                        />
                      </div>
                      <div>
                        <Typography style={{ marginTop: "7px" }}>
                          Send me a copy of my responses.
                        </Typography>
                      </div>
                    </div>

                    <p>
                      <Button variant="contained" color="primary">
                        Submit
                      </Button>
                    </p>
                  </form>

                  {/* <p>hello check</p> */}
                </>
              ) : props.formHeading === "KOSA" ? (
                <></>
              ) : (
                <></>
              )}
              {/* <form noValidate autoComplete="off">
                <>
                  <p></p>
                  <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
                <p></p>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <p></p>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Type of complaint</p>
                <FormControl fullWidth>
                  <InputLabel variant="outlined" label="Email"></InputLabel>
                  <Select
                    // labelId="demo-simple-select-outlined-label"
                    // id="demo-simple-select-outlined"
                    variant="outlined"
                    fullWidth
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    placeholder=" Enter Complaint"
                  >
                    <MenuItem value="Acadamics">
                      <em>Acadamics</em>
                    </MenuItem>
                    <MenuItem value="Scholarship">CSE</MenuItem>
                    <MenuItem value="Scholarship">MEC</MenuItem>
                    <MenuItem value="Scholarship">MPC</MenuItem>
                    <MenuItem value="Scholarship">A&T</MenuItem>
                    <MenuItem value="Scholarship">Bi.P.C</MenuItem>
                    <MenuItem value="Scholarship">CEC</MenuItem>
                    <MenuItem value="Scholarship">B.Sc MPC</MenuItem>
                    <MenuItem value="Scholarship">B.Sc MPCS</MenuItem>
                    <MenuItem value="Scholarship">B.Sc MECS</MenuItem>
                    <MenuItem value="Scholarship">B.Sc MECS</MenuItem>
                    <MenuItem value="Scholarship">B.Sc MCCS</MenuItem>
                    <MenuItem value="Scholarship">B.Sc IOT</MenuItem>
                    <MenuItem value="Scholarship">B.Sc CBZ</MenuItem>
                    <MenuItem value="Scholarship">B.Com COMPUTERS</MenuItem>
                    <MenuItem value="Scholarship">B.Com GENERAL</MenuItem>
                    <MenuItem value="Scholarship">B.Com TAX PROCEDURE</MenuItem>
                    <MenuItem value="Scholarship">B.Com LOGISTICS</MenuItem>
                    <MenuItem value="Scholarship">BBA</MenuItem>
                    <MenuItem value="Scholarship">MBA</MenuItem>
                    <MenuItem value="Scholarship">MCA</MenuItem>
                    <MenuItem value="Scholarship">MSc(CS)</MenuItem>
                    <MenuItem value="Scholarship">MCom</MenuItem>
                    <MenuItem value="Scholarship">
                      M.Sc(ORGANIC CHEMISTRY)
                    </MenuItem>
                    <MenuItem value="Scholarship">
                      M.Sc(ANALYTICAL CHEMISTRY)
                    </MenuItem>

                    <MenuItem value="Autonomous">autonomous</MenuItem>
                    <MenuItem value="Canteen">Canteen</MenuItem>
                    <MenuItem value="Scholarship">Scholarship</MenuItem>
                  </Select>
                </FormControl>
                <p></p>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  maxRows={4}
                  variant="outlined"
                  label="Right Complaints Here"
                  placeholder="RequiredComplaints"
                  //  onChange={(e) => setName(e.target.value)}
                />
              </form> */}
              <div className={classes.SubmitStyle}></div>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
