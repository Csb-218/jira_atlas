import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { PageActions } from "../../store/PageSlice"


export default function PaginationPrimaryBasic() {

  const dispatch = useDispatch()

  const currentPage = useSelector(state => state.page.currentPage)
  const pages = useSelector(state => state.page.pages)

  function prev(){dispatch(PageActions.prevPage())}

  function next(){dispatch(PageActions.nextPage())}

  return (
    <>
      {/*<!-- Component: Primary basic pagination --> */}
      <nav role="navigation" aria-label="Pagination Navigation" className='mt-24'>
        <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
          <li>
            <button
              onClick={()=>prev()}
              aria-label="Goto Page 1"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
            >
              <span className="order-2 md:sr-only">Prev</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-01 desc-01"
              >
                <title id="title-01">Previous page</title>
                <desc id="desc-01">link to previous page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </li>

          {
            pages?.map(page => {
              return(
                <li key={page?.index}>
            <button
              onClick={()=>dispatch(PageActions.setPage(page?.index))}
              aria-label="Goto Page 1"
              className={currentPage === page?.index ? "currentPage" : "page"}
            >
              {page?.index+1}
            </button>
          </li>
              )
            })
          }

          

          <li>
            <button
              onClick={()=>next()}
              aria-label="Goto Page 4"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
            >
              <span className="md:sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-02 desc-02"
              >
                <title id="title-02">Next page</title>
                <desc id="desc-02">link to next page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </li>
         
        </ul>
      </nav>
      {/*<!-- End Primary basic pagination --> */}
    </>
  )
}