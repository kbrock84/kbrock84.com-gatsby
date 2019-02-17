import React from "react";
import { Component } from "react";
import BaseStructureWrappper from "./BaseStructureWrapper";

import Body from "../Body/Body";
import "../../components/body-styles.css";

class BaseStructure extends Component {
  render() {
    return (
      <>
        <BaseStructureWrappper>
          <Body />
        </BaseStructureWrappper>
      </>
    );
  }
}

export default BaseStructure;
