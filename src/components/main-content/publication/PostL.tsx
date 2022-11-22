import React from "react";
import css from './Publication.module.css';
import indexCss from '../../../index.module.css';
import textCss from '../../../text.module.css';
import {IPublication} from "./Publication.module";


export const PostL: React.FC<{ post: IPublication }> = ({ post }) => {
        return <div className={css.post_l}>
            <img className={css.post_photo_l} src={post.photoUrl}/>
            <div className={css.post_info_l}>
                <div className={css.post_tag}>{post.tag}</div>
                <div className={css.post_title}>{post.title}</div>
                <div className={[css.post_meta, indexCss.margin_v_xs].join(' ')}>
                    {post.datePublication}
                    <p className={indexCss.padding_h_xs}><span className={textCss.text_lightgray}>By</span> {post.userName}</p>
                    {post.countComments} comments
                </div>
                <div className={css.post_annotation_l}>
                    {post.annotation}
                </div>
            </div>
        </div>

}