import React from 'react'

function Pagination({page, setPage}) {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="inline-flex mt-2 xs:mt-0">
        <button onClick={()=>setPage(page>1?page-1:1)} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
        </button>
        <button onClick={()=>setPage(page+1)} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination