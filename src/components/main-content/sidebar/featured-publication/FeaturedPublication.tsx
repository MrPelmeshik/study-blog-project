import React, {ReactElement, useEffect, useState} from "react";
import css from '../Sidebar.module.css';
import {ContentService} from "../../../ContentService";
import {IPublication, PostS} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 3;

export const FeaturedPublication: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [contentService, setContentService] = useState(new ContentService());
    const [publications, setPublications] = useState<IPublication[] | null>(null);
    useEffect(() => {
        contentService.getPosts({set: setPublications})
    }, [/* тут дб номера страниц */])

    const featuredPublicationsInSidebar: ReactElement<{ post: IPublication }>[] = [];
    if(publications) {
        for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
            featuredPublicationsInSidebar.push(<PostS key={publications[i].postId} setModalWindow={setModalWindow}
                                                      post={publications[i]}/>);
        }
    }

    return <>
        <div className={css.sidebar_title}>Featured posts</div>
        {featuredPublicationsInSidebar}
    </>
}