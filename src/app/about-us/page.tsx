import Reviews from "@/components/reviews";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-16">
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">ABOUT </span>US
        </h3>
        <p className="text-[#777777] font-[400] py-3">
          Route to Market provides a fully resourced, end to end retail solution
          of world-class distribution and merchandising throughout Zimbabwe.
        </p>
      </div>

      <section className="max-w-[1200px] mx-auto px-3">
        <figure className="flex justify-center">
          <Image src="/images/about.jpg" alt="" width={800} height={400} />
        </figure>
        <p className="mt-4 text-lg mb-16">
          Route to Market aspires to be the preferred choice for manufacturers
          in Zimbabwe and the region. Route to Market encompasses some of
          Zimbabwe’s most experienced distribution and merchandising companies
          for all your confectionery, groceries, beverages, perishables and
          cosmetic ranges. We are committed to a culture of integrity and
          professionalism whilst managing a motivated, effective and efficient
          team. We offer both wholesale and retail distribution as well as sales
          and merchandising of both dry and perishable products. We ensure your
          products are delivered on time and are on the shelf, in prime space,
          ready for the customer to purchase.
          <br />
          <br />
          In 1995, the first of the Route to Market's brands Warpack opened its
          doors on 1st of September by John de Wet, offering sales and
          merchandising to Zimbabwean brands. In 2002 this was followed by
          opening Vaitive Distribution to provide distribution to Warpack's
          principal brands. In 2009, a secondary merchandising division, dPack
          was added, followed by another distribution business, Exclusive
          Brands, in 2012. Our new cold chain division was added in 2022 for
          storage and distribution of perishable products.
          <br />
          <br />
          With our personal and reliable service, we guarantee that your
          products will be picked up, packed, stored and delivered. We are
          well-known in the industry for providing the best service and can be
          found in all major cities and towns in the country.
        </p>
      </section>

      <section>
        <h3 className="text-[24px] font-bold text-[#2a2a2a] text-center max-w-[800px] mx-auto mt-20 mb-10">
          <span className="font-[300]">
            Our Executive Management Team brings proven expertise and experience
            in{" "}
          </span>
          Zimbabwe's FMCG industry to lead our growing business.
        </h3>
      </section>

      <Reviews />
    </>
  );
};

export default Page;
