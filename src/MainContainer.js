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
    console.log("Red clicked")
  }
  yellowClick = () => {
    console.log("Yellow clicked")
  }
  greenClick = () => {
    console.log("Green clicked")
  }

  render() {

    let classes = [styles.red, styles.yellow, styles.green].join(' ');
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