import React from "react";
import './PostL.css';
import {IPublication} from "../IPublication";

export class PostL extends React.Component<{ post: IPublication }> {
    render() {
        let {post: post} = this.props;
        return <div className="post-l">
            <img className="post-photo-l" src={post.photoUrl}/>
            <div className="post-info-l">
                <div className="post-tag">{post.tag}</div>
                <div className="post-title">{post.title}</div>
                <div className="post-meta margin-v-xs">
                    {post.datePublication}
                    <p className="padding-h-xs"><span className="text-lightgray">By</span> {post.userName}</p>
                    {post.countComments} comments
                </div>
                <div className="post-annotation-l">
                    {post.annotation}
                </div>
            </div>
        </div>
    }
}