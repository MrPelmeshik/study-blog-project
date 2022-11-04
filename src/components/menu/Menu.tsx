import React from 'react';
import './Menu.css';

export function Menu() {
    return <>
        <a className="navigation-menu-item btn-open-modal" data-modaltype="home" href="#">Home</a>
        <a className="navigation-menu-item btn-open-modal" data-modaltype="recipes" href="#">Recipes</a>
        <a className="navigation-menu-item btn-open-modal" data-modaltype="article" href="#">Article</a>
        <a className="navigation-menu-item btn-open-modal" data-modaltype="contact" href="#">Contact</a>
        <a className="navigation-menu-item btn-open-modal" data-modaltype="purchase" href="#">Purchase</a>
    </>
}