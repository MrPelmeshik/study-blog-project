import React, {useEffect, useState} from "react";
import css from './ModalWindowComponent.module.css';
import {ContentService} from "../ContentService";
import textCss from "../../text.module.css";
import indexCss from "../../index.module.css";
import {IPublication} from "../main-content/publication/Publication.module";


export const ModalWindowComponent: React.FC<{postId: number | null, setModalWindow:  React.Dispatch<React.SetStateAction<number | null>>}> = ({postId, setModalWindow}) => {
    const [contentService, setContentService] = useState(new ContentService());

    if (postId) {
        const post = contentService.getPublicationsById(postId)

        const style = {
            width: '50vw',
            height: '70vh',
            backgroundImage: `url("${post.photoUrl}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }

        return <div className={css.modal}>
            <div className={css.modal_body}>
                <div className={css.modal_bg_img}>
                    <div className={css.modal_gradient}/>
                    <div style={style} />
                </div>
                <div className={css.modal_content}>
                    <div className={css.modal_header}>
                        <div className={css.modal_tag}>{post?.tag}</div>
                        <button className={css.modal_btn} onClick={() => setModalWindow(null)}>Close</button>
                    </div>
                    <h1>{post?.title}</h1>
                    <div className={css.modal_meta_block}>
                        <div>Comments: {post?.countComments}</div>
                        <div className={css.modal_meta}>
                            {post?.datePublication}
                            <p className={indexCss.padding_h_xs}>
                                <span className={textCss.text_lightgray}>By</span> {post?.userName}
                            </p>
                        </div>
                    </div>
                    <p>
                        {post?.annotation}
                    </p>
                </div>
            </div>
        </div>
    } else return null;
}
