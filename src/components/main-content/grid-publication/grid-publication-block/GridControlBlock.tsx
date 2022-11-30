import React from "react";
import css from './GridControlBlock.module.css';

export const GridControlBlock = () => {
    return <div className={css.grid_control_block}>
        <button disabled>&#10094; OLDER POST</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button disabled>...</button>
        <button>8</button>
        <button>NEXT POST &#10095;</button>
    </div>
};
