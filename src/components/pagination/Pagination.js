import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'

const Pagination = ({info , pageNum, setPageNum}) => {

  return( 
      <ReactPaginate className = {`pagination justify-content-center gap-2 my-5`}
      
      forcePage={pageNum === 1? 0 : pageNum - 1}
      pageclassName='page-item'
      pageLinkclassName='page-link'

      nextLabel = "Next"
      nextclassName="btn btn-light"
      
      previousLabel = "Prev"
      previousclassName = "btn btn-light"
      activeclassName='active'
      
      onPageChange={(data) => {
        setPageNum(data.selected + 1)
      }}
      
      pageCount={info?.pages}

      />
)
}

export default Pagination