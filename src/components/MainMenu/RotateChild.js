import styled from "styled-components";

const RotateChild = styled.div`
  display: inline-block;
  transition: transform 70ms ease-out;
  transform: rotate(${props => props.angle});
`;

export default RotateChild;
