import React from "react";
import "./Admission.scss";
import icon1 from "../../assets/images/icon2.png";
import icon2 from "../../assets/images/icon4.png";
import icon3 from "../../assets/images/icon5.png";

import { Tooltip } from "react-tooltip";

export default function Adimission() {
  return (
    <div>
      <div className="admission-container">
        <section className="sec1-Admission">
          <h1>Welcoming Our Children, Back To Their Favorite Preschool.</h1>
          <p>
            We all want to select the best preschool for our kid's primitive
            educational years and bulid a strong foundation for child's future.
          </p>
          <p>
            Little Millennium Preschool is one of the best preschool in India to
            lay first step into the educational journey of your child with:
          </p>

          <div className="icons-box">
            <img src={icon1} alt="logo"/>
            <span>Sceintifically developed curriculum</span>
          </div>
          <div className="icons-box">
            <img src={icon2} alt="logo"/>
            <span>Well Trained Teachers</span>
          </div>
          <div className="icons-box">
            <img src={icon3} alt="logo"/>
            <span>Excellent Infrastructure</span>
          </div>
        </section>

        <section className="sec2-Admission">
          <h1>Preschool Admission Form</h1>
          <form>
            <input
              type="input"
              className="input1"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="name is required*"
              placeholder="Full Name"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="number"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="number is required*"
              placeholder="Phone Number"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="email"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="email is required*"
              placeholder="Email"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="text"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="child name is required*"
              placeholder="Child Name"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <input
              type="date"
              className="input2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="DOB is required*"
              placeholder="D . O . B"
            />
            <label className="placeholder"></label>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "red" }}
              place="bottom"
            />
            <br></br>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                className="mssgBox"
                placeholder="Enter Your Message"
              />
              <button>Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
