import React, {useState} from "react";
import css from './MainContent.module.css';
import {GridPublication} from "./grid-publication/GridPublication";
import {Sidebar} from "./sidebar/Sidebar";
import {ModalWindowComponent} from "../modal-window/ModalWindowComponent";


export const MainContent = () => {
    const [postIdForModalWindow, setPostIdForModalWindow] = useState<number | null>(null);

    return <div className={css.main_content}>
        <ModalWindowComponent postId={postIdForModalWindow} setModalWindow={setPostIdForModalWindow}/>
        <GridPublication setModalWindow={setPostIdForModalWindow}/>
        <Sidebar setModalWindow={setPostIdForModalWindow}/>
    </div>
}