import React from "react";
import styles from "./events.module.css";
import { Container, Paper } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import HeadingComponent from "../Headings/index";
import Slider from "react-slick";
import CalendarCompo from '../Calendar/index'

const Events = () => {


  return (
    <div className={styles.eventsMain}>
      <div className={styles.paperMain}>
        <div>
          <HeadingComponent data1="All" data2="Events" />
        </div>

        <Container>
        <Paper
          className={styles.paper}
          style={{ padding: "1rem" }}
          elevation={6}
        >
          <CalendarCompo />
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Events;
