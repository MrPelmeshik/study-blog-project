import React from "react";
import css from './GridControlBlock.module.css';

export const GridControlBlock = () => {
    return <div className={css.grid_control_block}>
        <button disabled className={css.grid_control_block}>&#10094; OLDER POST</button>
        <button className={css.grid_control_block}>1</button>
        <button className={css.grid_control_block}>2</button>
        <button className={css.grid_control_block}>3</button>
        <button disabled className={css.grid_control_block}>...</button>
        <button className={css.grid_control_block}>8</button>
        <button className={css.grid_control_block}>NEXT POST &#10095;</button>
    </div>
};
