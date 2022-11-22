import React, {ReactElement, useState} from "react";
import css from './GridPublication.module.css';
import {GridControlBlock} from "./grid-publication-block/GridControlBlock";
import {ContentService} from "../../ContentService";
import {IPublication, PostL, PostM} from '../publication/Publication.module';


const countPublicationOnPage = 11;
const numberLargePost = 6;

export const GridPublication = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const publications = contentService.getPublications(countPublicationOnPage);

    const publicationsOnPage: ReactElement<{ post: IPublication }>[] = [];
    for (let i = 0; i < countPublicationOnPage; i++) {
        i === numberLargePost
            ? publicationsOnPage.push(<PostL post={publications[i]}/>)
            : publicationsOnPage.push(<PostM post={publications[i]}/>);
    }

    return <div className={css.grid_publication}>
        {publicationsOnPage}
        <GridControlBlock />
    </div>
}