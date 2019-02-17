import styled from "styled-components";

const CardBody = styled.button`
  width: 500px;
  height: 500px;
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: bolder;
  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage};
  border: none;
  border-radius: ${props => props.r};
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  max-width: 400px;
  padding: 8px;
  box-shadow: 0px 4px 18px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 700px), (max-height: 400px) {
    font-size: 1.7em;
    width: 300px;
    height: 300px;
  }

  @media (max-width: 250px), (max-height: 300px) {
    font-size: 1.3em;
    width: 200px;
    height: 200px;
  }
`;

export default CardBody;
