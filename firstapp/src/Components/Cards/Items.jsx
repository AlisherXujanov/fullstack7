import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


function Items({ elements }) {
    let [page, setPage] = useState(1);
    let [pageNumbers, setPageNumbers] = useState([]);
    let [active, setActive] = useState(1);

    const itemsPerPage = 6
    const totalPages = Math.ceil(elements.length / itemsPerPage)

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
            <Pagination.Item
                key={i}
                active={i === active}
                onClick={() => setPage(i)}
            >
                {i}
            </Pagination.Item>
        )
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
            {elements
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map(element => (
                    <div
                        key={element.id}
                        id={element.id + "-element"}
                        className="element"
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
    );
}

export default Items;