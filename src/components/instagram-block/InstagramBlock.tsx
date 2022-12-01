import React, {useState} from "react";
import css from './InstagramBlock.module.css';
import {ContentService} from "../ContentService";


export interface IInstagramWidget {
    instagramWidgetId: number;
    photoUrl: string;
}

const countInstagramWidgetsInSidebar = 6;

export const InstagramBlock = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const instagramWidgets = contentService.getInstagramWidgets(countInstagramWidgetsInSidebar);

    const instagramWidgetsInSidebar: any[] = [];
    for (let i = 0; i < countInstagramWidgetsInSidebar; i++) {
        instagramWidgetsInSidebar.push(
            <div className={css.instagram_widget}>
                <div className={css.img_box}>
                    <img src={instagramWidgets[i].photoUrl}/>
                </div>
                <div className={css.content}>
                    <div>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti dolor et hic modi nulla officia repellat ullam voluptas voluptatum.</p>
                    </div>
                </div>
            </div>
        );
    }

    return <div>
        <div className={css.instagram_contact}>Follow our @instagram_name</div>
        <div className={css.line_inst_photos}>
            {instagramWidgetsInSidebar}
        </div>
    </div>
}

// https://codepen.io/Oral_Seventhplanet/pen/Bazxpdq