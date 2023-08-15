import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


function Items({ elements, elClass, containerClass }) {
    let [page, setPage] = useState(1);
    let pageNumbers = []

    const numberOfItems = elements.length
    const itemsPerPage = 6
    const totalPages = Math.ceil(numberOfItems / itemsPerPage)

    for (let i = 0; i < totalPages; i++) {
        const current = i + 1; 
        pageNumbers.push(
            <Pagination.Item
                key={i} 
                active={current === page}
                onClick={() => setPage(i + 1)}
            >
                {current}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Pagination>
                <Pagination.Prev
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                />
                {pageNumbers}
                <Pagination.Next
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                />
            </Pagination>

            <div className={containerClass ?? 'all-items-pagination'}>
                {elements
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map(element => (
                        <div
                            key={element.id}
                            id={element.id + "-" + elClass}
                            className={elClass}
                        >
                            <h3>{element.content}</h3>
                            <p>
                                <em>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni ex, nihil cum alias molestias.
                                </em>
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Items;