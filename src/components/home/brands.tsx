import React from "react";

const Brands = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[24px] font-bold text-center text-[#2a2a2a]">
            <span className='font-[300]'>Partnerships with</span> Coveted Brands
          </h1>
          <p className="text-[#777777] font-[400] text-center py-3">
            Our success has come from being committed to the property and
            investing in the development of the product to maximize sales. At
            the same time and maintaining the integrity.
          </p>
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 mb-8 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/adidas-dark.png"
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/channel-dark.png"
              alt="Chanel"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/nike-dark.png"
              alt="Nike"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/toyota-dark.png"
              alt="Toyota"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/gs1-dark.png"
              alt="GS1"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/berry-dark.png"
              alt="BlackBerry"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/min-dark.png"
              alt="Mini"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/honda-dark.png"
              alt="Honda"
              role="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
