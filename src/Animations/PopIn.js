import posed from "react-pose";

const PopIn = posed.div({
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
  }
});

export default PopIn;
