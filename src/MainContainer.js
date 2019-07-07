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
      <div className={styles.frame}>
        <Light click={this.redClick} color={classes}/>
        <Light click={this.yellowClick} color={classes}/>
        <Light click={this.greenClick} color={classes}/>
      </div>
    )
  }
}

export default MainContainer;