// components/AnimatedLines.tsx
import React from 'react';
import styles from './AnimatedLines.module.css';

const AnimatedLines: React.FC = () => {
    return (
        <div className={`${styles.lines} pointer-events-none`}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
};

export default AnimatedLines;
