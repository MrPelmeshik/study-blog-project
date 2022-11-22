import React, {useState} from "react";
import css from './InstagramBlock.module.css'
import {InstagramWidget} from "./widget/InstagramWidget";
import {ContentService} from "../ContentService";


const countInstagramWidgetsInSidebar = 6;

export const InstagramBlock = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const instagramWidgets = contentService.getInstagramWidgets(countInstagramWidgetsInSidebar);

    const instagramWidgetsInSidebar: any[] = [];
    for (let i = 0; i < countInstagramWidgetsInSidebar; i++) {
        instagramWidgetsInSidebar.push(<InstagramWidget instagramWidget={instagramWidgets[i]}/>);
    }

    return <div>
        <div className={css.instagram_contact}>Follow our @instagram_name</div>
        <div className={css.line_inst_photos}>
            {instagramWidgetsInSidebar}
        </div>
    </div>
}