import React from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div className={styles.button}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

