import React from "react";
import css from './Footer.module.css';
import indexCss from '../../index.module.css';
import {Menu} from "../menu/Menu";
import {SocialMediaLine} from "./social-media-line/SocialMediaLine";

export const Footer = () => {
    return <footer>
        <div className={indexCss.margin_v_xl}>
            <b className={css.text_logo}>FASHION</b>
            <div className={css.line_for_logo}></div>
        </div>
        <div className={css.footer_menu}>
            <div className={css.footer_navigation_menu}>
                <Menu />
            </div>
            <div className={css.ico_list}>
                <SocialMediaLine />
            </div>
            <hr className={indexCss.margin_v_s}/>
        </div>
        <div className={css.footer_copyright}>
            @2019 Logwork. All Right Reserved.
        </div>
    </footer>
}