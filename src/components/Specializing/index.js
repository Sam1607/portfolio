import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
  const skills = [
    {
      skillName: "JavaScript",
      desc: "Hands on experience in JavaScript",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "React",
      desc: "Hands on experience in React",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "React-Redux",
      desc: "Hands on experience in React-Redux",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Hooks",
      desc: "Hands on experience in React-Hooks",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Context-Api",
      desc: "Hands on experience in Context-Api",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
    {
      skillName: "Express.js",
      desc: "little Hands on experience in Express",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
