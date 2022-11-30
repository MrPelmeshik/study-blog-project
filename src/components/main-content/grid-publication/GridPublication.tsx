import React, {ReactElement, useEffect, useState} from "react";
import css from './GridPublication.module.css';
import {GridControlBlock} from "./grid-publication-block/GridControlBlock";
import {ContentService} from "../../ContentService";
import {IPublication, PostL, PostM} from '../publication/Publication.module';


const countPublicationOnPage = 11;
const numberLargePost = 6;

export const GridPublication: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [contentService, setContentService] = useState(new ContentService());
    const [publications, setPublications] = useState<IPublication[] | null>(null);
    useEffect(() => {
        contentService.getAllPosts({set: setPublications})
    }, [setPublications])
    // const publications = contentService.getPublications(countPublicationOnPage);

    const publicationsOnPage: ReactElement<{ post: IPublication }>[] = [];
    if(publications) {
        for (let i = 0; i < countPublicationOnPage; i++) {
            i === numberLargePost
                ? publicationsOnPage.push(<PostL key={publications[i].postId} setModalWindow={setModalWindow} post={publications[i]}/>)
                : publicationsOnPage.push(<PostM key={publications[i].postId} setModalWindow={setModalWindow} post={publications[i]}/>);
        }
    }

    return <div className={css.grid_publication}>
        {publicationsOnPage}
        <GridControlBlock />
    </div>
}