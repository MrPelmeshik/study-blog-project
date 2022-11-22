import React, {useState} from "react";
import css from '../Sidebar.module.css';
import {ContentService} from "../../../ContentService";
import {PostS} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 3;

export const FeaturedPublication = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const publications = contentService.getFeaturedPublications(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: any[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostS post={publications[i]}/>);
    }

    return <>
        <div className={css.sidebar_title}>Featured posts</div>
        {featuredPublicationsInSidebar}
    </>
}