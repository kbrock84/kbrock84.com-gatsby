import styled from "styled-components";

const HomeHeading = styled.div`
  color: ${props => props.color};
  text-align: center;
  vertical-align: middle;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
`;

// transform: rotate(-23deg);
export default HomeHeading;
