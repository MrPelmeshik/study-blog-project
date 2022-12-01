import React from "react";
import css from './GridControlBlock.module.css';

const _limitPage = 8;

export const GridControlBlock: React.FC<{page: number, setPage:  React.Dispatch<React.SetStateAction<number>>}> = ({page, setPage}) => {
    let controlPanel: any[] = [];
    controlPanel.push(<button disabled={page === 1} onClick={() => setPage(1)}>1</button>)
    controlPanel.push(<button disabled>...</button>)
    controlPanel.push(<button disabled>{page}</button>)
    controlPanel.push(<button disabled>...</button>)
    controlPanel.push(<button disabled={page === _limitPage} onClick={() => setPage(1)}>{_limitPage}</button>)

    return <div className={css.grid_control_block}>
        <button disabled={page <= 1} onClick={() => setPage(page--)}>&#10094; OLDER POST</button>
        {controlPanel}
        <button disabled={page >= _limitPage} onClick={() => setPage(page++)}>NEXT POST &#10095;</button>
    </div>
};
