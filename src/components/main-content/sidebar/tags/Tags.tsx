import React, {ReactElement, useState} from "react";
import {ContentService} from "../../../ContentService";
import css from '../Sidebar.module.css';
import {ITag} from "./ITag";

export function Tags() {
    const [contentService, setContentService] = useState(new ContentService());
    const tagList = contentService.getAllTags();

    const socialMediaInSidebar: ReactElement<{ post: ITag }>[] = [];
    const length = tagList.length;
    tagList.forEach(tag =>
        socialMediaInSidebar.push(<div key={tag.tagId} className={css.tag}>{tag.name}</div>)
    )

    return <>
        <div className={css.sidebar_title}>Tags</div>
        <div className={css.tags}>
            {socialMediaInSidebar}
        </div>
    </>
}