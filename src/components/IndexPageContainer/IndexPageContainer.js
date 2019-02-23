import styled from "styled-components";

const IndexPageContainer = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f6f6f6;
  background-image: ${props => "url(" + props.backgroundImage + ")"};
`;

export default IndexPageContainer;
