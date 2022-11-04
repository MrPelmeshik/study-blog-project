import React from "react";
import './PostS.css';
import {IPublication} from "../IPublication";

export class PostS extends React.Component<{ post: IPublication }> {
    render() {
        let {post: post} = this.props;
        return <div className="post-s">
            <img className="post-photo-s" src={post.photoUrl}/>
            <div className="post-info-s">
                <div className="post-tag-s">{post.tag}</div>
                <div className="post-title-s">{post.title}</div>
                <div className="post-meta-s">
                    {post.datePublication}
                    <p className="padding-h-xs"><span className="text-lightgray">By</span> {post.userName}</p>
                </div>
            </div>
        </div>
    }
}