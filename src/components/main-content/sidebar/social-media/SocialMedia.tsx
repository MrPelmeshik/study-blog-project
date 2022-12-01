import React, {ReactElement, useState} from "react";
import css from '../Sidebar.module.css';
import {ContentService} from "../../../ContentService";
import {ISocialMedia} from "./ISocialMedia";
import {SocialMediaTile} from "./social-media-tile/SocialMediaTile";

export const SocialMedia = () => {
    const [contentService, setContentService] = useState(new ContentService());
    const socialMediaList = contentService.getAllSocialMedia();

    const socialMediaInSidebar: ReactElement<{ post: ISocialMedia }>[] = [];
    socialMediaList.forEach(socialMedia => socialMediaInSidebar.push(<SocialMediaTile socialMedia={socialMedia}/>))

    return <>
        <div className={css.sidebar_title}>Social media</div>
        <div className={css.social_media}>
            {socialMediaInSidebar}
        </div>
    </>
}