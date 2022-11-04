import React from "react";

export interface IPublication {
    postId: number;
    title: string;
    datePublication: string;
    userName: string;
    tag: string;
    photoUrl: string;
    countComments: number;
    annotation: string;
}