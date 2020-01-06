import React, { Component } from "react";
import styles from "./randomText.module.scss";

type RandomTextProps = { children: React.ReactNode };

class RandomText extends Component {
  public state: {
    text: string[];
    flip: boolean;
  };
  private interval?: NodeJS.Timeout;

  constructor(props: RandomTextProps) {
    super(props);

    this.state = {
      text: [],
      flip: false
    };

    this.updateText = this.updateText.bind(this);
  }

  public componentDidMount() {
    this.interval = setInterval(() => {
      this.updateText();
    }, 50);
  }

  public componentWillUnmount() {
    clearInterval(this.interval!);
  }

  private updateText() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const r = characters.charAt(Math.floor(Math.random() * characters.length));
    this.setState({ text: this.state.text.concat(r), flip: !this.state.flip });
  }

  public render() {
    const children = [];
    for (var i = 0; i < this.state.text.length; i++) {
      let x = "";
      if (i % 2 === 0) {
        x = styles.white;
      } else {
        x = styles.black;
      }
      children.push(<span className={x}>{this.state.text[i]}</span>);
    }
    return (
      <div>
        <p className={styles.text}>{children}</p>
      </div>
    );
  }
}

export default RandomText;
