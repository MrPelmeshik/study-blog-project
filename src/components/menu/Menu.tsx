import React, {useState} from 'react';
import {MenuButton, IMenuButton} from "./menu-button/MenuButton";

const menuButtonList: IMenuButton[] = [
    {
        lable: 'Home',
        url: '#'
    },
    {
        lable: 'Recipes',
        url: '#'
    },
    {
        lable: 'Article',
        url: '#'
    },
    {
        lable: 'Contact',
        url: '#'
    },
    {
        lable: 'Purchase',
        url: '#'
    },
]

export const Menu = () => {
    const [menuButtonsOnPage, setmenuButtonsOnPage] = useState(menuButtonList.map(menuButton => <MenuButton menuButton={menuButton}/>));

    return <>{menuButtonsOnPage}</>
}