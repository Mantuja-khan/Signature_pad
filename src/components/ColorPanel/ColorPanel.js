import React from 'react';
import styles from './ColorPanel.module.css';

const ColorPanel = ({ onColorChange, currentColor }) => {
  const colors = [
    '#000000', '#2563eb', '#dc2626', '#16a34a',
    '#7c3aed', '#ea580c', '#db2777', '#0891b2',
    '#854d0e', '#4b5563', '#4338ca', '#b91c1c',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.colorGrid}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`${styles.colorButton} ${currentColor === color ? styles.active : ''}`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPanel;