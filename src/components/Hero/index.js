import React from "react";
import me from "../../assets/images/shubhamLeft.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Shubham Trivedi
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">(React Developer)</p>
          <p className="font-12 grey mtb-10">9675610115</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
