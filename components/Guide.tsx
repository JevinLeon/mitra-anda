import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Mengapa Kami?</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, enim
            ullam possimus laudantium accusantium hic perspiciatis labore
            excepturi iusto modi tempora. Laudantium cumque harum commodi,
            facere non quod velit totam ab deserunt repudiandae! Voluptatem
            atque fugit optio dolore beatae corporis?
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="https://media.istockphoto.com/id/672320826/photo/large-hangar-warehouse-industrial-and-logistics-companies.jpg?s=612x612&w=0&k=20&c=F5JbTosZJ1IhKZF8CUc1LnQfcKGuwuwsQARG6NKPuxc="
          alt="mengapa_kami"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  );
};

export default Guide;
