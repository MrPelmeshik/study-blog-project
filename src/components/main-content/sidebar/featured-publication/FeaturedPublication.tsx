import React, {ReactElement, useState} from "react";
import css from '../Sidebar.module.css';
import {ContentService} from "../../../ContentService";
import {IPublication, PostS} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 3;

export const FeaturedPublication: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [contentService, setContentService] = useState(new ContentService());
    const publications = contentService.getFeaturedPublications(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: ReactElement<{ post: IPublication }>[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostS key={publications[i].postId} setModalWindow={setModalWindow} post={publications[i]}/>);
    }

    return <>
        <div className={css.sidebar_title}>Featured posts</div>
        {featuredPublicationsInSidebar}
    </>
}