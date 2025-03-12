import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-16">
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">SALES AND </span>MERCHANDISING
        </h3>
        <p className="text-[#777777] font-[400] py-3">
          The bottom line for a successful retail business is that your brands
          are in stock, on shelf and sold correctly and confidently by in-store
          staff. Route to Market has two divisions - Warpack and Dpack - that
          can achieve this for your products.
        </p>
      </div>

      <section className="max-w-[1200px] flex flex-col bg-gray-50 lg:flex-row-reverse mx-auto gap-10 mb-10 px-3">
        <figure className="flex justify-center flex-1">
          <Image
            src="/images/Merchandising-R2M-Zimbabwe.jpg"
            alt=""
            width={800}
            height={400}
            className="object-cover object-right"
          />
        </figure>
        <div className="text-lg flex-1 p-5">
          <p>
            Warpack and Dpack are market leaders in the sales and merchandising
            industry in Zimbabwe, providing you with hassle free nationwide
            coverage 365 days a year. Our main objective is to help you increase
            your presence in the market place and drive sales to grow your
            business.
          </p>
          <h4 className="font-semibold my-4">Services include:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>National based account management</li>
            <li>Assist with product launches</li>
            <li>High-speed delivery of products to the shelf</li>
            <li>In-store sales and merchandising</li>
            <li>Display activity</li>
            <li>Marketing assistance</li>
            <li>Market intelligence</li>
            <li>Planogram execution</li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1200px] flex flex-col bg-gray-50 lg:flex-row mx-auto gap-10 mb-20 px-3">
        <figure className="flex justify-center flex-1">
          <Image
            src="/images/Merchandising-R2M.jpg"
            alt=""
            width={800}
            height={400}
            className="object-cover object-left"
          />
        </figure>
        <div className="text-lg flex-1 p-5">
          <p>
            Whether you’re looking for short-term tactical merchandising support
            or wish to develop a long-term relationship, Warpack and Dpack will
            work with you to find a prompt, efficient and cost-effective
            solution to suit your requirements.
          </p>
          <p className="mt-3">
            Our strength lies in our numbers with over 450 fully trained and
            experienced merchandising staff across all major towns and cities
            across Zimbabwe - see below for a map showing our numbers. Our sales
            and merchandising team service all formal retail and wholesale
            outlets in Zimbawe including SPAR, OK, TM PnP Zimbabwe, Greens, N
            Richards, Metro Peech and Browne Wholesalers, Choppies and many
            other retailers.
          </p>

          <div className="mt-6 grid grid-cols-2 flex-wrap container mx-auto">
            <div className="flex justify-center border border-gray-200 border-r-0 py-10 items-center">
              <img
                className="focus:outline-none"
                src="https://cdn.tuk.dev/assets/adidas-dark.png"
                alt="Adidas"
                role="img"
              />
            </div>
            <div className="flex justify-center border-gray-200 py-10 border items-center">
              <img
                className="focus:outline-none"
                src="https://cdn.tuk.dev/assets/channel-dark.png"
                alt="Chanel"
                role="img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
