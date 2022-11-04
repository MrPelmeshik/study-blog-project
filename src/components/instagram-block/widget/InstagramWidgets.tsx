import React from "react";
import {ContentService} from "../../ContentService";

export function InstagramWidgets() {
    const countInstagramWidgetsInSidebar = 6;

    const contentService = new ContentService();
    const instagramWidgets = contentService.getInstagramWidgets(countInstagramWidgetsInSidebar);

    const instagramWidgetsInSidebar: any[] = [];
    for (let i = 0; i < countInstagramWidgetsInSidebar; i++) {
        instagramWidgetsInSidebar.push(
            <div className="widget">
                <img src={instagramWidgets[i].photoUrl}/>
            </div>
        );
    }

    return <>
        {instagramWidgetsInSidebar}
    </>
}