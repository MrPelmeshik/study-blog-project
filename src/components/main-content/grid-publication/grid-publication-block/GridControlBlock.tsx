import React from "react";
import './GridControlBlock.css';

export function GridControlBlock() {
    return <div className="grid-control-block">
        <button disabled className="grid-control-button">&#10094; OLDER POST</button>
        <button className="grid-control-button">1</button>
        <button className="grid-control-button">2</button>
        <button className="grid-control-button">3</button>
        <button disabled className="grid-control-button">...</button>
        <button className="grid-control-button">8</button>
        <button className="grid-control-button">NEXT POST &#10095;</button>
    </div>
};
