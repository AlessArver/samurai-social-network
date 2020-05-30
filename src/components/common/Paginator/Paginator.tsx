import React, { FC, useState } from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  onPageChanged: (p: number) => void
  currentPage: number
  portionSize?: number
}

const Paginator: FC<PropsType> = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState<number>(1)
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
            <span onClick={() => onPageChanged(p)} className={cn({[s.selecetedPage]: currentPage === p})}>
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