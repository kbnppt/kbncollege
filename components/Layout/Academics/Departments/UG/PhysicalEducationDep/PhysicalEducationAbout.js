import { green } from "@material-ui/core/colors";
import React from "react";
import colour from "sharp/lib/colour";

const PhysicalEducationAbout = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#2e69d6" }}>
        DEPARTMENT OF PHYSICAL EDUCATION
      </h2>

      <h3 style={{ color: "green" }}>OBJECTIVES &GOALS OF THE DEPARTMENT</h3>
      <p>
        Besides developing further and further the regular standard games and
        ssssssports already in vogue we wish to achieve the following
        objectives.
      </p>
      <ul>
        <li>
          To draft as many students as possible into this faculty and create
          awareness and interest to the participants to take part in various
          games and sports.
        </li>
        <li>
          To pay more attention on games and sports which have not hither to
          received sufficient concentration like Kho-Kho, Kabaddi,
          Ball-Badminton etc., which are indigenous.
        </li>
        <li>
          To improve and maintain evaluation reports of the participants to
          standardize their performances.
        </li>
        <li>
          To encourage the players to participate in various competitions
          organized by both institutions and other public bodies.
        </li>
        <li>
          Extending the premises and organizing various possible games for the
          University in the college to provide an opportunity of exposure to the
          college players to motivate them.
        </li>
        <li>
          To inculcate in the minds of the players an ambition through lecture
          and demonstration methods inviting the expertise in the field and
          shape the players as recognizable personalities in the country.
        </li>
      </ul>
    </div>
  );
};

export default PhysicalEducationAbout;
