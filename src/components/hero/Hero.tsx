import React from "react";
import './Hero.css';

export function Hero() {
    return <div className="hero">
        <div className="hero-gradient-bg"></div>
        <div className="hero-text">
            <div className="hero-tag">Vehicle</div>
            <div className="hero-title">
                <p>
                    One of Saturn’s largest rings<br/>
                    may be newer than anyone
                </p>
            </div>
            <div className="hero-meta">
                June 6, 2019
                <p className="padding-h-s"><span className="text-lightgray">By</span> Rickie Baroch</p>
                4 comments
            </div>
        </div>
    </div>
}