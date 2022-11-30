import React, {ReactElement, useState} from "react";
import css from '../Sidebar.module.css';
import {ContentService} from "../../../ContentService";
import {ISocialMedia} from "./ISocialMedia";

export const SocialMedia = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const socialMediaList = contentService.getAllSocialMedia();

    const socialMediaInSidebar: ReactElement<{ post: ISocialMedia }>[] = [];
    const length = socialMediaList.length;
    socialMediaList.forEach(socialMedia =>
        socialMediaInSidebar.push(
            <div key={socialMedia.socialMediaId} className={css.social_media_item} style={{backgroundColor: `${socialMedia.color}}`}}>
                <img className={css.ico_s} src={socialMedia.icoUrl}/>
                <p>{socialMedia.countLikes/1000}k<br/>likes</p>
            </div>
        ))

    return <>
        <div className={css.sidebar_title}>Social media</div>
        <div className={css.social_media}>
            {socialMediaInSidebar}
        </div>
    </>
}