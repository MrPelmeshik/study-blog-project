import React from "react";
import './Sidebar.css';
import {FeaturedPublication} from "./featured-publication/FeaturedPublication";
import {AboutAuthor} from "./about-author/AboutAuthor";
import {Categories} from "./categories/Categories";
import {SocialMedia} from "./social-media/SocialMedia";
import {Tags} from "./tags/Tags";

export function Sidebar() {
    return <div className="sidebar">
        <AboutAuthor />
        <FeaturedPublication />
        <Categories />
        <SocialMedia />
        <Tags />
    </div>
}