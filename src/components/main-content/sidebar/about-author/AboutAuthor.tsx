import React from "react";
import {ContentService} from "../../../ContentService";
import {PostSAboutAuthor} from "../../publication/post-s-about-author/PostSAboutAuthor";

export function AboutAuthor() {
    const countFeaturedPublicationsInSidebar = 1;

    const publicationService = new ContentService();
    const publications = publicationService.getAboutAuthor(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: any[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostSAboutAuthor post={publications[i]}/>);
    }

    return <>
        <div className="sidebar-title">About the author</div>
        {featuredPublicationsInSidebar}
    </>
}