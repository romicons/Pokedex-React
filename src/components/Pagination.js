import React from 'react';
import { LeftArrow } from './ArrowSvg';
import { RightArrow } from './ArrowSvg';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = (props);

return (
    <div className="pagination">
        <button className="pagination-btn" onClick={onLeftClick}>
            <div><LeftArrow /></div>
            </button>
        <div>{page} of {totalPages}</div>
        <button className="pagination-btn" onClick={onRightClick}>
            <div><RightArrow /></div>
            </button>
    </div>
    );
};

export default Pagination;