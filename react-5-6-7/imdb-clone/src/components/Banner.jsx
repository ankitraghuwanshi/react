import React from 'react'

function Banner() {
  return (
        <div
            className=" h-[20vh] md:h-[55vh] bg-cover bg-center flex items-end hover:scale-101 duration-100"
            style={{
                backgroundImage:
                `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`
            }}
        >
            <div className="text-white w-full text-center text-2xl">
                image name
            </div>
        </div>
  )
}

export default Banner