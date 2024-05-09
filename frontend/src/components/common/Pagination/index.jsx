// npm i react-paginate
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import BlogLayout from '../../About/BlogLayout';
import "./style.scss"

function Items({ currentItems, layoutName }) {
    return (
        <div className='current-items'>
            {
                currentItems && currentItems.map((item, index) => {
                    return (
                        <div className='item' key={index}>
                            {
                                layoutName === "BlogLayout" 
                                    ? 
                                        <BlogLayout item={item} />
                                    :
                                        'No layout specified'
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

// REQUIRES: items, itemsPerPage, itemLayout
function PaginatedItems(props) {
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + props.itemsPerPage;
    const currentItems = props.items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.items.length / props.itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='pagination-wrapper'>
            <Items currentItems={currentItems} layoutName={props.layoutName} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="&laquo;"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default PaginatedItems;