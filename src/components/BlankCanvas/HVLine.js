import React from "react";
import { Component } from "react";
import BlankCanvas from "./BlankCanvas";

class BasicCanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.paintDevider();
    window.addEventListener("resize", this.handleResize.bind(this));
    window.addEventListener("orientationchange", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("orientationchange", this.handleResize);
  }

  handleResize() {
    if (this.canvasRef.current !== null) {
      this.paintDevider();
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  paintDevider() {
    if (this.canvasRef !== undefined && this.canvasRef !== null) {
      let canvas = this.canvasRef.current;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      let cWidth = canvas.width;
      let cHeight = canvas.height;
      const lineX = this.props.isCenter ? cWidth / 2 : this.props.lineX;
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(lineX, cHeight - this.props.lineMargin);
      ctx.lineTo(lineX, this.props.lineMargin + this.props.offsetTop);
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = this.props.color;
      ctx.stroke();
    }
  }

  render() {
    if (
      this.canvasRef.current !== null &&
      this.canvasRef.current !== undefined
    ) {
      this.paintDevider();
    }
    return (
      <BlankCanvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={this.canvasRef}
      />
    );
  }
}

export default BasicCanvas;
