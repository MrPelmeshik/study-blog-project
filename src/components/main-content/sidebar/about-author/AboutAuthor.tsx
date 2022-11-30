import React, {ReactElement, useState} from "react";
import css from '../Sidebar.module.css'
import {ContentService} from "../../../ContentService";
import {IPublication, PostSAboutAuthor} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 1;

export const AboutAuthor: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [contentService, setContentService] = useState(new ContentService());
    const publications = contentService.getAboutAuthor(countFeaturedPublicationsInSidebar);

    const featuredPublicationsInSidebar: ReactElement<{ post: IPublication }>[] = [];
    for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
        featuredPublicationsInSidebar.push(<PostSAboutAuthor key={publications[i].postId} setModalWindow={setModalWindow} post={publications[i]}/>);
    }

    return <>
        <div className={css.sidebar_title}>About the author</div>
        {featuredPublicationsInSidebar}
    </>
}