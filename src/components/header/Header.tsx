import React from 'react';
import './Header.css';
import {HeaderRightBlock} from "./header-right-block/HeaderRightBlock";
import {HeaderLeftBlock} from "./header-left-block/HeaderLeftBlock";

export function Header() {
    return <header>
        <HeaderRightBlock/>
        <HeaderLeftBlock/>
    </header>
}