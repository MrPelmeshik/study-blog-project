import React from "react";
import css from './Publication.module.css';
import indexCss from '../../../index.module.css';
import {IPublication} from "./Publication.module";


export const PostSAboutAuthor: React.FC<{ post: IPublication }> = ({ post }) => {
    return <div className={css.post_s}>
        <img className={css.post_photo_s} src={post.photoUrl}/>
        <div className={css.post_info_s}>
            <b className={css.post_author_s}>{post.userName}</b>
            <div className={[css.post_author_post_s, indexCss.margin_v_xxs].join(' ')}>{post.tag}</div>
            <div className={[css.post_author_appeal_s, indexCss.margin_v_xs].join(' ')}>
                {post.annotation}
            </div>
        </div>
        <hr/>
        <button className={css.post_author_button_s}>Continue Reading</button>
    </div>
}