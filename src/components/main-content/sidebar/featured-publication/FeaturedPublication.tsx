import React from "react";
import {ContentService} from "../../../ContentService";
import {PostS} from "../../publication/post-s/PostS";

export function FeaturedPublication() {
    const countFeaturedPublicationsInSidebar = 3;

    const publicationService = new ContentService();
    const publications = publicationService.getFeaturedPublications(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: any[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostS post={publications[i]}/>);
    }

    return <>
        <div className="sidebar-title">Featured posts</div>
        {featuredPublicationsInSidebar}
    </>
}