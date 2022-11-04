import React from "react";
import './GridPublication.css';
import {GridControlBlock} from "./grid-publication-block/GridControlBlock";
import {ContentService} from "../../ContentService";
import {PostM} from "../publication/post-m/PostM";
import {PostL} from "../publication/post-l/PostL";

export function GridPublication() {
    const countPublicationOnPage = 11;
    const numberLargePost = 6;

    const publicationService = new ContentService();
    const publications = publicationService.getPublications(countPublicationOnPage);

    const publicationsOnPage: any[] = [];
    for (let i = 0; i < countPublicationOnPage; i++) {
        i === numberLargePost
            ? publicationsOnPage.push(<PostL post={publications[i]}/>)
            : publicationsOnPage.push(<PostM post={publications[i]}/>);
    }

    return <div className="grid-publication">
        {publicationsOnPage}
        <GridControlBlock />
    </div>
}