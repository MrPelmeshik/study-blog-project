import React from "react";
import css from './Sidebar.module.css'
import {AboutAuthor, Categories, FeaturedPublication, SocialMedia, Tags} from './Sidebar.module'

export const Sidebar: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    return <div className={css.sidebar}>
        <AboutAuthor setModalWindow={setModalWindow}/>
        <FeaturedPublication setModalWindow={setModalWindow}/>
        <Categories />
        <SocialMedia />
        <Tags />
    </div>
}