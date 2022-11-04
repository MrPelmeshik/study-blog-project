import React from "react";
import './HeaderLeftBlock.css';
import {Menu} from "../../menu/Menu";

export function HeaderLeftBlock() {
    return <div className="header-right-block">
        <div className="navigation-menu">
            <Menu/>
        </div>
    </div>
}