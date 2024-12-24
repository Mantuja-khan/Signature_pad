import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Dropdown.module.css';

const Dropdown = ({ label, preview, isOpen, onToggle, children }) => {
  return (
    <div className={styles.container}>
      <button 
        className={styles.trigger}
        onClick={onToggle}
      >
        <span className={styles.label}>
          {label}
          {preview}
        </span>
        <ChevronDown 
          size={16} 
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className={styles.panel}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;