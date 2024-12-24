import React from 'react';
import styles from './WidthPanel.module.css';

const WidthPanel = ({ onWidthChange, currentWidth }) => {
  const widths = [1, 2, 4, 6, 8, 10];

  return (
    <div className={styles.container}>
      <div className={styles.widthGrid}>
        {widths.map((width) => (
          <button
            key={width}
            onClick={() => onWidthChange(width)}
            className={`${styles.widthButton} ${currentWidth === width ? styles.active : ''}`}
            aria-label={`Set line width to ${width}`}
          >
            <div 
              className={styles.dot}
              style={{
                width: `${width * 2}px`,
                height: `${width * 2}px`
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default WidthPanel;