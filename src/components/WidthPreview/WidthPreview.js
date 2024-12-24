import React from 'react';
import styles from './WidthPreview.module.css';

const WidthPreview = ({ width }) => (
  <div 
    className={styles.preview}
    style={{ 
      width: `${width * 2}px`,
      height: `${width * 2}px`
    }} 
  />
);

export default WidthPreview;