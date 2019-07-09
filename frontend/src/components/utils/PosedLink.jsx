import React, { useEffect, useState } from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import { Link } from "react-router-dom";

const LinkPose = posed.span({
  visible: {
    opacity: 1,
    transition: { duration: 900 }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 900 }
  }
});

const wordPoses = {
  visible: {
    opacity: 1,
    transition: {
      duration: 900,
      ease: "easeIn"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 900,
      ease: "easeOut"
    }
  }
};

const PosedLink = props => {
  const [isVisible, setisVisible] = useState("");

  useEffect(() => setisVisible(true), []);

  return (
    <LinkPose pose={isVisible ? "visible" : "hidden"}>
      <Link to={props.href}>
        <SplitText
          wordPoses={wordPoses}
          pose={isVisible ? "visible" : "hidden"}
          onClick={props.onClick}
        >
          {props.currentText}
        </SplitText>
      </Link>
    </LinkPose>
  );
};

export default PosedLink;
