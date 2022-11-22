import React from "react";
import css from './HeaderRightBlock.module.css';
import {Menu} from "../../menu/Menu";

export const HeaderRightBlock = () => {
    return <div className={css.header_right_block}>
        <div className={css.navigation_menu}>
            <Menu/>
        </div>
    </div>
}