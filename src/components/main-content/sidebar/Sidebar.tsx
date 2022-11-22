import React from "react";
import css from './Sidebar.module.css'
import {AboutAuthor, Categories, FeaturedPublication, SocialMedia, Tags} from './Sidebar.module'

export const Sidebar = () => {
    return <div className={css.sidebar}>
        <AboutAuthor />
        <FeaturedPublication />
        <Categories />
        <SocialMedia />
        <Tags />
    </div>
}