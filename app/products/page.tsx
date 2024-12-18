import { PRODUCTS } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-16 lg:py-12 overflow-hidden bg-feature-bg bg-opacity-70">
        <div className="flex justify-center">
          <strong className="text-2xl">Produk Kami</strong>
        </div>
        <div className="flex justify-center md:justify-between items-center flex-wrap ">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="flex flex-col gap-6 bg-white">
              <div className="border border-gray-20 p-6 m-2 flex flex-col items-center justify-center w-[280px] h-[320px] rounded-md">
                <Image src={p.image} alt={p.id} width={200} height={200} />
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-gray-30 text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
