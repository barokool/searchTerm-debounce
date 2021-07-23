import React from 'react'
import PropTypes from 'prop-types'

const pagination = props => {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    function handlePageClick(newPage) {
        if (onPageChange)
            onPageChange(newPage)
    }
    return (
        <div className="flex">
            <div className="p-1 h-full rounded-md bg-white mb-4 mx-12 mr-auto  " >
                <button disabled={_page <= 1} onClick={() => handlePageClick(_page - 1)}>
                    Prev
                </button>
            </div>
            <div className="p-1 h-full rounded-md bg-white mb-4 mx-12 ml-auto">
                <button className="" disabled={_page >= totalPages} onClick={() => handlePageClick(_page + 1)}>
                    Next
                </button>
            </div>

        </div >
    )
}

pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}
pagination.defaultProps = {
    onPageChange: null,
}

export default pagination
