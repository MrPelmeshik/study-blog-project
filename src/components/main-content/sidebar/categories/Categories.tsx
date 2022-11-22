import React, {useState} from "react";
import {ContentService} from "../../../ContentService";
import css from '../Sidebar.module.css';

export const Categories = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const categories = contentService.getAllCategories();

    const categoriesInSidebar: any[] = [];
    const length = categories.length;
    for (let i = 0; i < length; i++) {
        categoriesInSidebar.push(
            <div className={css.categories_item}>
                <div>{categories[i].name}</div>
                <div>({categories[i].count})</div>
            </div>
        )

        if (i < length - 1)
            categoriesInSidebar.push(<hr/>)
    }

    return <>
        <div className={css.sidebar_title}>Categories</div>
        <div className={css.categories}>
            {categoriesInSidebar}
        </div>
    </>
}