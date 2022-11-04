import React from "react";
import './InstagramBlock.css'
import {InstagramWidgets} from "./widget/InstagramWidgets";

export function InstagramBlock() {
    return <div className="instagram-block">
        <div className="instagram-contact">Follow our @instagram_name</div>
        <div className="line-inst-photos">
            <InstagramWidgets />
        </div>
    </div>
}