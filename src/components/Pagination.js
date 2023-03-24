import React from 'react';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = (props);

return (
    <div className="pagination">
        <button onClick={onLeftClick}>
            <div>flecha izquierda</div>
            </button>
        <div>{page} de {totalPages}</div>
        <button onClick={onRightClick}>
            <div>flecha derecha</div>
            </button>
    </div>
);
};

export default Pagination;