import React, {ReactElement, useState} from "react";
import {ContentService} from "../../../ContentService";
import css from '../Sidebar.module.css';
import {IPublication} from "../../publication/Publication.module";
import {ICategory} from "./ICategory";

export const Categories = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const categories = contentService.getAllCategories();

    const categoriesInSidebar: ReactElement<{ post: ICategory }>[] = [];
    const length = categories.length;
    for (let i = 0; i < length; i++) {
        categoriesInSidebar.push(
            <div key={categories[i].categoryId} className={css.categories_item}>
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