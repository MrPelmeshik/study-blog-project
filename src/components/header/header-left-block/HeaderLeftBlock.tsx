import React from "react";
import css from './HeaderLeftBlock.module.css';

export const HeaderLeftBlock = () => {
    return <div className={css.header_left_block}>
        <b className={css.text_logo}>
            FASHION
        </b>
        <div className={css.line_for_logo}/>
    </div>
}