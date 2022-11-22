import React from "react";
import css from './MenuButton.module.css';

export interface IMenuButton {
    lable: string;
    url: string;
}

export const MenuButton: React.FC<{menuButton: IMenuButton}> = ({menuButton}) => {
    return <a className={css.navigation_menu_item} href={menuButton.url ?? '#'}>
        {menuButton.lable}
    </a>
}