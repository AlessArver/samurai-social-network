import React, {useState} from 'react'
import * as s from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <>
            <div>
                {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>pp</button>}
            </div>
            <div>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => (
                        <span
                            onClick={() => onPageChanged(p)}
                            className={currentPage === p ? s.selecetedPage : ''}
                        >
                            {p}
                        </span>
                    ))
                }
            </div>
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>pp</button>}
        </>
    )
}
export default Paginator