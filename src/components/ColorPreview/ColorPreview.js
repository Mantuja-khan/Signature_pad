import React from 'react';
import styles from './ColorPreview.module.css';

const ColorPreview = ({ color }) => (
  <div 
    className={styles.preview} 
    style={{ backgroundColor: color }} 
  />
);

export default ColorPreview;