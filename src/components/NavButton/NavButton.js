import React, { Component } from "react";
import NavButtonWrapper from "./NavButtonWrapper";

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.frames = 0;
    this.isHamburger = this.props.isHamburger;
  }

  componentDidMount() {
    let ctx = this.canvasRef.current.getContext("2d");
    ctx.strokeStyle = this.props.color;
    ctx.lineCap = "round";
    ctx.lineWidth = 2;
    this.drawArrow(ctx, 0);
    if (this.isHamburger) {
      //animation toggles from no hamburger to yes hamburger
      //Setting the hamburger to false will change it to true
      //after animate() is called
      this.isHamburger = false;
      this.animate();
    }
  }

  drawArrow(ctx, offset, stopOn = 0) {
    ctx.clearRect(0, 0, 40, 34);
    ctx.beginPath();
    ctx.moveTo(17, 2);
    ctx.lineTo(2 + offset, 17);
    ctx.lineTo(17, 32);
    ctx.stroke();
  }

  splitLines(ctx, offset, growRate) {
    ctx.beginPath();
    ctx.clearRect(0, 0, 40, 40);
    ctx.moveTo(17 + growRate, 2);
    ctx.lineTo(2, 17 - offset);
    ctx.moveTo(2, 17);
    ctx.lineTo(17 + growRate, 32 - offset);
    ctx.moveTo(2, 32);
    ctx.lineTo(2 + offset + growRate, 32);
    ctx.stroke();

    growRate += 1;

    if (offset < 15) {
      requestAnimationFrame(() => this.splitLines(ctx, ++offset, growRate));
    }
  }

  joinLines(ctx, offset, shrinkRate) {
    ctx.beginPath();
    ctx.clearRect(0, 0, 40, 40);
    ctx.moveTo(2, 2 + offset);
    ctx.lineTo(32 - shrinkRate, 2);
    ctx.moveTo(2, 17);
    ctx.lineTo(32 - shrinkRate, 17 + offset);

    if (offset !== 15) {
      ctx.moveTo(2, 32);
      ctx.lineTo(32 - shrinkRate - offset, 32);
    }

    ctx.stroke();
    shrinkRate += 1;

    if (offset < 15) {
      requestAnimationFrame(() => this.joinLines(ctx, ++offset, shrinkRate));
    }
  }

  animate() {
    let ctx = this.canvasRef.current.getContext("2d");
    if (this.isHamburger) {
      requestAnimationFrame(() => this.joinLines(ctx, 1, 0.05));
      this.isHamburger = false;
    } else {
      requestAnimationFrame(() => this.splitLines(ctx, 1, 0.05));
      this.isHamburger = true;
    }
  }

  handleClick() {
    this.animate();
    this.props.onClick();
  }

  render() {
    return (
      <NavButtonWrapper
        rotate={this.props.rotate}
        onClick={this.handleClick.bind(this)}
      >
        <canvas width={34} height={34} ref={this.canvasRef} />
      </NavButtonWrapper>
    );
  }
}

export default NavButton;
