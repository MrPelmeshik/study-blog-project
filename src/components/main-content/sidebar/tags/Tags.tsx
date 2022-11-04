import React from "react";
import {ContentService} from "../../../ContentService";

export function Tags() {
    const contentService = new ContentService();
    const tagList = contentService.getAllTags();

    const socialMediaInSidebar: any[] = [];
    const lenght = tagList.length;
    tagList.forEach(tag =>
        socialMediaInSidebar.push(<div className="tag">{tag.name}</div>)
    )

    return <>
        <div className="sidebar-title">Tags</div>
        <div className="tags">
            {socialMediaInSidebar}
        </div>
    </>
}