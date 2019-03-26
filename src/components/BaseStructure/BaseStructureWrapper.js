import styled from "styled-components";

const BaseStructureWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto;
  background-color: #fefefe;
  margin: 0;

  @media (max-width: 700px), (max-height: 400px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media only screen and (orientation: landscape) {
    font-size: 0.75rem;
  }
`;

export default BaseStructureWrapper;
