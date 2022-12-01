import React, {ReactElement, useEffect, useState} from "react";
import css from './GridPublication.module.css';
import {GridControlBlock} from "./grid-publication-block/GridControlBlock";
import {ContentService, getAllPosts} from "../../ContentService";
import {IPublication, PostL, PostM} from '../publication/Publication.module';


const countPublicationOnPage = 11;
const numberLargePost = 6;

export const GridPublication: React.FC<{setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({setModalWindow}) => {
    const [page, setPage] = useState(1)
    const [contentService, setContentService] = useState(new ContentService());
    const [publications, setPublications] = useState<IPublication[] | null>(null);
    useEffect(() => {
        getAllPosts({page: page, set: setPublications})
    }, [page])

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
        <GridControlBlock page={page} setPage={setPage}/>
    </div>
}