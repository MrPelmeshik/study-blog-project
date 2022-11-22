import React from "react";
import css from './MainContent.module.css';
import {GridPublication} from "./grid-publication/GridPublication";
import {Sidebar} from "./sidebar/Sidebar";

export const MainContent = () => {
    return <div className={css.main_content}>
        <GridPublication />
        <Sidebar />
    </div>
}