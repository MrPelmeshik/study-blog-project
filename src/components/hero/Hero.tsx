import React from "react";
import css from './Hero.module.css';
import indexCss from '../../index.module.css';
import textCss from '../../text.module.css';

export const Hero = () => {
    return <div className={css.hero}>
        <div className={css.hero_gradient_bg}/>
        <div className={css.hero_text}>
            <div className={css.hero_tag}>Vehicle</div>
            <div className={css.hero_title}>
                <p>
                    One of Saturn’s largest rings<br/>
                    may be newer than anyone
                </p>
            </div>
            <div className={css.hero_meta}>
                June 6, 2019
                <p className={indexCss.padding_h_s}><span className={textCss.text_lightgray}>By</span> Rickie Baroch</p>
                4 comments
            </div>
        </div>
    </div>
}