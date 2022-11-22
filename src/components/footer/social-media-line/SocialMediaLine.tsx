import React from "react";
import css from './SocialMediaLine.module.css';

export const SocialMediaLine = () => {
    return <>
        <div className={[css.ico, css.ico_facebook].join(' ')}/>
        <div className={[css.ico, css.ico_twitter].join(' ')}/>
        <div className={[css.ico, css.ico_pinterest].join(' ')}/>
        <div className={[css.ico, css.ico_googlePlay].join(' ')}/>
        <div className={[css.ico, css.ico_behance].join(' ')}/>
        <div className={[css.ico, css.ico_instagram].join(' ')}/>
    </>
}