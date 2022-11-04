import React from "react";
import './PostM.css';
import {IPublication} from "../IPublication";

export class PostM extends React.Component<{ post: IPublication }> {
    render() {
        let {post: post} = this.props;
        return <div className="post-m">
            <img className="post-photo-m" src={post.photoUrl}/>
            <div className="post-info-m">
                <div className="post-tag">{post.tag}</div>
                <div className="post-title">{post.title}</div>
                <div className="post-meta">
                    {post.datePublication}
                    <p className="padding-h-xs"><span className="text-lightgray">By</span> {post.userName}</p>
                </div>
            </div>
        </div>
    }
}