import React from "react";
import aboutData from "./aboutData";
import AboutTitle from "./AboutTitle";
import AnchorIcon from "@mui/icons-material/Anchor";
import HexagonIcon from "@mui/icons-material/Hexagon";

import "./about.scss";

const About = () => {
  const data = aboutData;

  return (
    <div className="about-container">
      <AboutTitle />
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptatem laudantium, labore ea eveniet perspiciatis
            veniam repudiandae ex aperiam dolores! Vero quisquam ut officiis
            dolore facilis quos fuga, excepturi itaque!
          </p>
        </main>
      </div>
    </div>
  );
};

export default About;
