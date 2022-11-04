import React from "react";
import './PostSAboutAuthor.css';
import {IPublication} from "../IPublication";

export class PostSAboutAuthor extends React.Component<{ post: IPublication }> {
    render() {
        let {post: post} = this.props;
        return <div className="post-s">
            <img className="post-photo-s" src={post.photoUrl}/>
            <div className="post-info-s">
                <b className="post-author-s">{post.userName}</b>
                <div className="post-author-post-s margin-v-xxs">{post.tag}</div>
                <div className="post-author-appeal-s margin-v-xs">
                    {post.annotation}
                </div>
            </div>
            <hr/>
            <button className="post-author-button-s">Continue Reading</button>
        </div>
    }
}