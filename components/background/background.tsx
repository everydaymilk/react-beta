import React, { Component } from "react";
import styles from "./background.module.scss";

class Background extends Component {
  leftRef: React.RefObject<HTMLDivElement>;
  rightRef: React.RefObject<HTMLDivElement>;
  state: {
    flip: boolean;
  };

  constructor(props) {
    super(props);
    this.leftRef = React.createRef<HTMLDivElement>();
    this.rightRef = React.createRef<HTMLDivElement>();

    this.state = { flip: true };

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseClick = this._onMouseClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this._onMouseMove);
    window.addEventListener("click", this._onMouseClick);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this._onMouseMove);
    window.removeEventListener("click", this._onMouseClick);
  }

  _onMouseClick(event) {
    this.setState({ flip: !this.state.flip });
  }

  _onMouseMove(event) {
    let x = event.clientX;
    this.rightRef.current.style.left = "" + x + "px";
    this.rightRef.current.style.width = "calc(100% - " + x + "px)";
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.flip ? styles.backgroundLeft : styles.backgroundRight
          }
          ref={this.leftRef}
        ></div>
        <div
          className={
            this.state.flip ? styles.backgroundRight : styles.backgroundLeft
          }
          ref={this.rightRef}
        ></div>
      </div>
    );
  }
}

export default Background;
