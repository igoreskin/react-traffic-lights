import React from 'react';
import styles from './Light.module.css';

const Light = (props) => {
  return (
    <div className={[styles.circle, props.color].join(' ')} onClick={props.click}>
    </div>
  )
}

export default Light;
