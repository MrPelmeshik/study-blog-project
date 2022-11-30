import React from "react";
import css from './Publication.module.css';
import indexCss from '../../../index.module.css';
import textCss from '../../../text.module.css';
import {IPublication} from "./Publication.module";


export const PostM: React.FC<{ setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>, post: IPublication }> = ({ setModalWindow, post }) => {
    return <div className={css.post_m}
                onClick={() => setModalWindow(post.postId)}>
        <img className={css.post_photo_m} src={post.photoUrl}/>
        <div className={css.post_info_m}>
            <div className={css.post_tag}>{post.tag}</div>
            <div className={css.post_title}>{post.title}</div>
            <div className={css.post_meta}>
                {post.datePublication}
                <p className={indexCss.padding_h_s}><span className={textCss.text_lightgray}>By</span> {post.userName}</p>
            </div>
        </div>
    </div>
}