import React from "react";
import './Footer.css';
import {Menu} from "../menu/Menu";
import {SocialMediaLine} from "./social-media-line/SocialMediaLine";

export function Footer() {
    return <footer>
        <div className="logo margin-v-xl">
            <b className="text-logo">FASHION</b>
            <div className="line-for-logo"></div>
        </div>
        <div className="footer-menu">
            <div className="footer-navigation-menu">
                <Menu />
            </div>
            <div className="ico-list">
                <SocialMediaLine />
            </div>
            <hr className="margin-v-s"/>
        </div>
        <div className="footer-copyright"> @2019 Logwork. All Right Reserved.</div>
    </footer>
}