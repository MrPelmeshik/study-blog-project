import React from "react";
import css from './GridControlBlock.module.css';

const _limitPage = 8;

export const GridControlBlock: React.FC<{page: number, setPage:  React.Dispatch<React.SetStateAction<number>>}> = ({page, setPage}) => {
    let controlPanel: any[] = [];
    if (page <= 2) {
        // 1 2 3 ... 8

        controlPanel.push(<button disabled={page === 1} onClick={() => setPage(1)}>1</button>)
        controlPanel.push(<button disabled={page === 2 && _limitPage>2} onClick={() => setPage(2)}>2</button>)
        controlPanel.push(<button disabled={page === 3 && _limitPage>3} onClick={() => setPage(3)}>3</button>)
        controlPanel.push(<button disabled>...</button>)
        controlPanel.push(<button disabled={page === _limitPage} onClick={() => setPage(_limitPage)}>{_limitPage}</button>)
    }
    else if (page > 2 && page < _limitPage - 2) {
        // 2 3 4 ... 8
        // _ 5 6 ... 8

        controlPanel.push(<button onClick={() => setPage(page-1)}>{page-1}</button>)
        controlPanel.push(<button disabled>{page}</button>)
        controlPanel.push(<button onClick={() => setPage(page+1)}>{page+1}</button>)
        controlPanel.push(<button disabled>...</button>)
        controlPanel.push(<button disabled={page === _limitPage} onClick={() => setPage(_limitPage)}>{_limitPage}</button>)
    }
    else {
        // 1 ... 6 7 8

        controlPanel.push(<button disabled={page === 1} onClick={() => setPage(1)}>1</button>)
        controlPanel.push(<button disabled>...</button>)
        controlPanel.push(<button disabled={page === (_limitPage-2)} onClick={() => setPage(_limitPage-2)}>{_limitPage-2}</button>)
        controlPanel.push(<button disabled={page === (_limitPage-1)} onClick={() => setPage(_limitPage-1)}>{_limitPage-1}</button>)
        controlPanel.push(<button disabled={page === _limitPage} onClick={() => setPage(_limitPage)}>{_limitPage}</button>)
    }

    return <div className={css.grid_control_block}>
        <button disabled={page <= 1} onClick={() => setPage(page-1)}>&#10094; OLDER POST</button>
        {controlPanel}
        <button disabled={page >= _limitPage} onClick={() => setPage(page+1)}>NEXT POST &#10095;</button>
    </div>
};
