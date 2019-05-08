import posed from "react-pose";

const ExpandOnHover = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    transition: { type: "spring", stiffness: 350, mass: 1, damping: 12 },
    scale: 1.2
  },
  press: {
    scale: 0.95
  }
});

export default ExpandOnHover;
