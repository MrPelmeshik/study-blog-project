import React from "react";
import './SocialMedia.css';
import {ContentService} from "../../../ContentService";

export function SocialMedia() {
    const contentService = new ContentService();
    const socialMediaList = contentService.getAllSocialMedia();

    const socialMediaInSidebar: any[] = [];
    const lenght = socialMediaList.length;
    socialMediaList.forEach(socialMedia =>
        socialMediaInSidebar.push(
            <div className="social-media-item">
                <img className="ico-s" src={socialMedia.icoUrl}/>
                <p>{socialMedia.countLikes/1000}k<br/>likes</p>
            </div>
        ))

    return <>
        <div className="sidebar-title">Social media</div>
        <div className="social-media">
            {socialMediaInSidebar}
        </div>
    </>
}