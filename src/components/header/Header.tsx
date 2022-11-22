import React from 'react';
import css from './Header.module.css';
import {HeaderLeftBlock} from "./header-left-block/HeaderLeftBlock";
import {HeaderRightBlock} from "./header-right-block/HeaderRightBlock";


export const Header = () => {
    return <div className={css.header}>
        <HeaderLeftBlock/>
        <HeaderRightBlock/>
    </div>
}