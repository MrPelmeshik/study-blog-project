import React, {ReactElement, useEffect, useState} from "react";
import css from '../Sidebar.module.css'
import {ContentService, getAllPosts} from "../../../ContentService";
import {IPublication, PostSAboutAuthor} from "../../publication/Publication.module";


const countFeaturedPublicationsInSidebar = 1;

export const AboutAuthor: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [publications, setPublications] = useState<IPublication[] | null>(null);
    useEffect(() => {
        getAllPosts({page: 1, set: setPublications})
    }, [/* тут дб номера страниц */])

    const featuredPublicationsInSidebar: ReactElement<{ post: IPublication }>[] = [];
    if(publications) {
        for (let i = 0; i < countFeaturedPublicationsInSidebar; i++) {
            featuredPublicationsInSidebar.push(<PostSAboutAuthor key={publications[i].postId}
                                                                 setModalWindow={setModalWindow}
                                                                 post={publications[i]}/>);
        }
    }

    return <>
        <div className={css.sidebar_title}>About the author</div>
        {featuredPublicationsInSidebar}
    </>
}