import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

const initialItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
]
function TestPaginate() {
    let [page, setPage] = useState(1);
    let [items, setItems] = useState(initialItems);
    let [pageNumbers, setPageNumbers] = useState([]);
    const itemsPerPage = 4 
    const totalPages = 4

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
            <Pagination.Item
                key={i} active={i + 1 === page}
                onClick={() => setPage(i + 1)}
            >
                {i + 1}
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
            <ul>
                {items
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
            </ul>
        </div>
    );
}

export default TestPaginate;