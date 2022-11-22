import React, {useState} from "react";
import css from '../Sidebar.module.css'
import {ContentService} from "../../../ContentService";
import {PostSAboutAuthor} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 1;

export const AboutAuthor = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const publications = contentService.getAboutAuthor(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: any[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostSAboutAuthor post={publications[i]}/>);
    }

    return <>
        <div className={css.sidebar_title}>About the author</div>
        {featuredPublicationsInSidebar}
    </>
}