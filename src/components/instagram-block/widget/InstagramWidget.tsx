import React, {useState} from "react";

export interface IInstagramWidget {
    instagramWidgetId: number;
    photoUrl: string;
}

export const InstagramWidget: React.FC<{instagramWidget: IInstagramWidget}> = ({instagramWidget}) => {
    return <div>
        <img src={instagramWidget.photoUrl}/>
    </div>
}