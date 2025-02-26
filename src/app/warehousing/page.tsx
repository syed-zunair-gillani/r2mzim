import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-16">
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">WAR</span>EHOUSING
        </h3>
        <p className="text-[#777777] font-[400] py-3">
          Route to Market has two warehouses totalling 12,900sq/m of storage
          space
        </p>
      </div>

      <section className="max-w-[800px] mx-auto px-3">
        <figure>
          <Image
            src="/images/Loading-Route-to-Market-1.jpg"
            alt=""
            width={800}
            height={400}
          />
        </figure>
        <p className="mt-4 text-lg mb-16">
          Route to Market has two dry goods warehouses totalling 11,000sq/m of
          floor space with the recent addition of one cold chain warehouse
          totalling 1,900sq/m. Our head office as well as our cold storage
          facility warehouse are based in the capital city of Harare. This
          warehouse distributes to all towns north of central Zimbabwe. Our
          second warehouse is based in Bulawayo which is the second largest city
          in Zimbabwe, this warehouse distributes to all towns south of central
          Zimbabwe.
          <br />
          <br />
          All our warehouses uses racking to maximise storage area. There is a
          batch tracking process for stock rotation. Numerous forklifts are used
          in the warehouse for efficient packing. Dedicated receiving and
          despatch areas ensure smooth movement of stocks in and out of the
          warehouses.
          <br />
          <br />
          Route to Market offers an approved MCAZ pharmaceutical stock area.
          Hazardous stocks are cordoned off into fenced areas to avoid any
          contamination of stocks. Our warehouses are monitored 24/7 with
          cameras and there are stringent entry and exit policies in place to
          ensure the safety of your stock.
        </p>
      </section>
    </>
  );
};

export default Page;
