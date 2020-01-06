import React, { Component } from "react";
import styles from "./background.module.scss";

type BackgroundProps = { children: React.ReactNode };

class Background extends Component {
  public state: {
    flip: boolean;
  };

  private leftRef: React.RefObject<HTMLDivElement>;
  private rightRef: React.RefObject<HTMLDivElement>;

  public constructor(props: BackgroundProps) {
    super(props);

    this.leftRef = React.createRef<HTMLDivElement>();
    this.rightRef = React.createRef<HTMLDivElement>();

    this.state = { flip: true };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("click", this.onMouseClick);
  }

  public componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("click", this.onMouseClick);
  }

  private onMouseClick(event: MouseEvent) {
    this.setState({ flip: !this.state.flip });
  }

  private onMouseMove(event: MouseEvent) {
    let x = event.clientX;
    this.rightRef.current!.style.left = "" + x + "px";
    this.rightRef.current!.style.width = "calc(100% - " + x + "px)";
  }

  public render() {
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
