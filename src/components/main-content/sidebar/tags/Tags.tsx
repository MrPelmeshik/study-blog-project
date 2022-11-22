import React, {useState} from "react";
import {ContentService} from "../../../ContentService";
import css from '../Sidebar.module.css';

export function Tags() {
    const [contentService, setContentService] = useState(new ContentService());
    const tagList = contentService.getAllTags();

    const socialMediaInSidebar: any[] = [];
    const length = tagList.length;
    tagList.forEach(tag =>
        socialMediaInSidebar.push(<div className={css.tag}>{tag.name}</div>)
    )

    return <>
        <div className={css.sidebar_title}>Tags</div>
        <div className={css.tags}>
            {socialMediaInSidebar}
        </div>
    </>
}