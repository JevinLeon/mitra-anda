import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[480px]">
            Cek Produk Kami!
          </h2>
          <p className="regular-16 text-gray-10">
            Cek list produk kami di sini! Tidak semua produk kami tampilkan di
            sini, akan tetapi kami siap menerima pertanyaan mengenai produk kami
            lainnya.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href="/products">
              <Button
                type="button"
                title="Lihat produk"
                icon="/arrow.svg"
                variant="btn_white"
                full
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/products-overview.png"
            alt="materials"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
