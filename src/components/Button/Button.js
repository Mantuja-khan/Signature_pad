import React from 'react';
import { cn } from '../../utils/classNames';
import styles from './Button.module.css';

const Button = ({ onClick, icon: Icon, label, variant, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        styles[variant],
        className
      )}
      title={label}
    >
      <Icon size={20} />
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default Button;