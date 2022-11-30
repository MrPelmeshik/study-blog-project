import React from "react";
import css from './Publication.module.css';
import indexCss from '../../../index.module.css';
import textCss from '../../../text.module.css';
import {IPublication} from "./Publication.module";

export const PostS: React.FC<{ setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>, post: IPublication }> = ({ setModalWindow, post }) => {
    return <div className={css.post_s}
                onClick={() => setModalWindow(post.postId)}>
        <img className={css.post_photo_s} src={post.photoUrl}/>
        <div className={css.post_info_s}>
            <div className={css.post_tag_s}>{post.tag}</div>
            <div className={css.post_title_s}>{post.title}</div>
            <div className={css.post_meta_s}>
                {post.datePublication}
                <p className={indexCss.padding_h_xs}><span className={textCss.text_lightgray}>By</span> {post.userName}</p>
            </div>
        </div>
    </div>
}