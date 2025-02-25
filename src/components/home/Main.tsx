import React from 'react'
import Link from 'next/link'

function Main() {
  return (
    <>
      <div
        className="relative text-white bg-cover bg-fixed bg-center h-[540px]"
        style={{ backgroundImage: 'url(/images/slider1.jpg)' }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text */}
        <div className="container mx-auto px-4 flex flex-col justify-center h-full ">
          <h1
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-[550px]"
            style={{
              background: '-webkit-linear-gradient(left, #9357cc 0%, #2989d8 50%, #2cc99d 100%)',
              WebkitBackgroundClip : 'text',
              color: 'transparent',
            }}
          >
            Deliver the Goods  on time.
          </h1>
          <p className="z-10 font-[300]  text-[26px] relative py-6 pb-10 w-72">
            Over 100+ acre interior warehouse space
          </p>
          <div>
          <Link href="" className="relative border px-6 py-4 text-[16px] hover:bg-white hover:text-black font-[400]">
            View Solutions
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
