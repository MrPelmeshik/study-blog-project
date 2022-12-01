import React, {useState} from "react";
import css from "./SocialMediaTile.module.css";
import {ISocialMedia} from "../ISocialMedia";


export const SocialMediaTile: React.FC<{socialMedia: ISocialMedia}> = ({socialMedia}) => {
    let [hover,setHover] = useState(false);

    let socialMediaStyle = {
        backgroundColor:''
    }

    if(hover){
        socialMediaStyle.backgroundColor = socialMedia.color;

    }
    else{
        socialMediaStyle.backgroundColor = '';
    }

    return <>
        <div key={socialMedia.socialMediaId}
             className={css.social_media_item}
             style={socialMediaStyle}
             onMouseOver={()=>setHover(true)}
             onMouseOut={()=>setHover(false)}>
            <img className={css.ico_s} src={socialMedia.icoUrl}/>
            <p>{socialMedia.countLikes/1000}k<br/>likes</p>
        </div>
    </>
}