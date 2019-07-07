import React, { Component, Fragment } from 'react';
import Light from './Light';
import styles from './MainContainer.module.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRed: false,
      showYellow: false,
      showGreen: false
    }
  }

  redClick = () => {
    console.log("Red clicked");
    this.setState({...this.state,
      showRed: true,
      showYellow: false,
      showGreen: false
    })
  }
  yellowClick = () => {
    console.log("Yellow clicked");
    this.setState({...this.state,
      showRed: false,
      showYellow: true,
      showGreen: false
    })
  }
  greenClick = () => {
    console.log("Green clicked");
    this.setState({...this.state,
      showRed: false,
      showYellow: false,
      showGreen: true
    })
  }

  reset = () => {
    this.setState({
      ...this.state,
      showRed: false,
      showYellow: false,
      showGreen: false
    })
  }

  render() {
    let classes = [];

    if(this.state.showRed) {
      classes = styles.red
    } else if (this.state.showYellow) {
      classes = styles.yellow
    } else if (this.state.showGreen) {
      classes = styles.green
    }

    return(
      <Fragment>
        <div className={styles.frame}>
          {this.state.showRed ? <Light click={this.redClick} color={classes} /> : <Light click={this.redClick} />}
          {this.state.showYellow ? <Light click={this.yellowClick} color={classes} /> : <Light click={this.yellowClick} />}
          {this.state.showGreen ? <Light click={this.greenClick} color={classes} /> : <Light click={this.greenClick} />}
        </div>
        <button type="button" onClick={this.reset}>Reset</button>
      </Fragment>
    )
  }
}

export default MainContainer;