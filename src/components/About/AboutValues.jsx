import React from "react";
import HexagonIcon from "@mui/icons-material/Hexagon";
import AnchorIcon from "@mui/icons-material/Anchor";
import "./about.scss";
import { color } from "@mui/system";
const AboutValues = () => {
  return (
    <div className="value-container">
      <div className="value-icon-container">
        <HexagonIcon
          sx={{
            fontSize: 120,
            color: "#FFFFFF",
            transform: "rotate(30deg)",
          }}
        ></HexagonIcon>
        <AnchorIcon
          sx={{ color: "black", position: "absolute", fontSize: "60px" }}
        />
      </div>
      <main>
        <h2>title</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia,
          enim possimus blanditiis nihil expedita esse perferendis libero
          dolore. Praesentium et quos aliquid, qui nulla veniam delectus alias
          recusandae ullam.
        </p>
      </main>
    </div>
  );
};

export default AboutValues;
