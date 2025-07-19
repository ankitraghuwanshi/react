import React from 'react'

function Movie({url, title}) {
  return (
    <div style={{backgroundImage:`url(${url})`}} className='h-[40vh] w-[200px]
        bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex
        flex-col justify-between items-end'>
        <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg'>
            {title}
        </div>
    </div>
  )
}

export default Movie