import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination justify-content-between'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item '>
                        <button onClick={() => paginate(number)} href='#' className="btn btn-secondary ">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
