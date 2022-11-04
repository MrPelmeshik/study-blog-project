import React from "react";
import {ContentService} from "../../../ContentService";

export function Categories() {
    const contentService = new ContentService();
    const categories = contentService.getAllCategories();

    const categoriesInSidebar: any[] = [];
    const lenght = categories.length;
    for (let i = 0; i < lenght; i++) {
        categoriesInSidebar.push(
            <div className="categories-item">
                <div>{categories[i].name}</div>
                <div>({categories[i].count})</div>
            </div>
        )

        if (i < lenght - 1)
            categoriesInSidebar.push(<hr/>)
    }

    return <>
        <div className="sidebar-title">Categories</div>
        <div className="categories">
            {categoriesInSidebar}
        </div>
    </>
}