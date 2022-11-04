import React from "react";
import './MainContent.css';
import {GridPublication} from "./grid-publication/GridPublication";
import {Sidebar} from "./sidebar/Sidebar";

export function MainContent() {
    return <div className="main-content">
        <GridPublication />
        <Sidebar />
    </div>
}