import { BRANDS, PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
}

const AboutPhoto = ({ backgroundImage }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    />
  );
};

const page = () => {
  return (
    <>
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <AboutPhoto backgroundImage="bg-bg-img-1" />
        </div>

        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-red-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong>Tentang Kami</strong>
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              delectus provident atque nisi aut vitae inventore corporis, modi
              voluptates sapiente aspernatur cum esse perferendis iusto est
              quaerat quae molestias at quas non?
            </p>
          </div>
        </div>
      </section>

      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-12 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <strong className="text-2xl text-red-500">Mengenal Kami</strong>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Mitra Anda telah menjadi solusi bagi aneka kebutuhan bangunan dan
            renovasi Anda sejak tahun 2003 di kota Batam. Kami menawarkan
            beraneka ragam produk dari semen, pasir, bata, cat, pipa, aneka
            perkakas, dan perlengkapan bangunan lainnya. Kami juga menawarkan
            harga yang kompetitif dan layanan antar untuk memudahkan Anda
            mendapatkan material dengan cepat dan efisien.
          </p>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Kami selalu berusaha memberikan produk berkualitas tinggi untuk
            memenuhi kebutuhan bangunan Anda. Kami bekerja sama dengan berbagai
            pemasok terpercaya untuk memastikan bahwa setiap barang yang kami
            jual memenuhi standar kualitas yang ketat. Dengan pilihan produk
            yang lengkap, Anda bisa menemukan semua yang Anda butuhkan dalam
            satu tempat.
          </p>
        </div>
        <div className="relative flex flex-1 justify-center items-center">
          <Image
            alt="hero_img"
            src="/about-page-1.jpg"
            width={1100}
            height={1100}
            className="rounded-l-xl"
          />
        </div>
      </section>

      <section className="max-container padding-container flex flex-col-reverse gap-20 py-10 pb-32 md:gap-28 lg:py-12 xl:flex-row">
        <div className="relative flex flex-1 justify-center items-center">
          <Image
            alt="hero_img"
            src="/about-page-2.jpg"
            width={1100}
            height={1100}
            className="rounded-r-xl"
          />
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 xl:text-right">
          <strong className="text-2xl text-red-500">Layanan Kami </strong>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-full">
            Kami juga memahami pentingnya kenyamanan pelanggan. Oleh karena itu,
            kami bersedia memerikan solusi pada Anda dalam memilih material yang
            sesuai dengan jenis dan skala proyek Anda. Tim kami siap memberikan
            saran terbaik dan solusi yang efektif agar proyek Anda berjalan
            lancar.
          </p>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-full">
            Untuk memudahkan pelanggan, kami juga melayani melalui WhatsApp
            sehingga Anda bisa memesan produk dari mana saja. Dengan dukungan
            layanan antar yang cepat, kami memastikan bahwa bahan bangunan yang
            Anda butuhkan sampai ke lokasi Anda dengan segera. Kami berkomitmen
            untuk menjadi mitra terpercaya dalam setiap tahap pembangunan dan
            renovasi di Batam.
          </p>
        </div>
      </section>
      <section className="max-container padding-container flex flex-col gap-10 md:gap-16 py-10 pb-32 lg:py-12">
        <div className="flex justify-center ">
          <strong className="text-2xl">Partner Kami</strong>
        </div>
        <div className="flex overflow-hidden space-x-16 w-full group">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
            {BRANDS.map((b) => (
              <Image
                alt={b.name}
                src={b.image}
                height={200}
                width={200}
                className="object-contain max-w-none"
              />
            ))}
          </div>
          <div
            className="flex space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            {BRANDS.map((b) => (
              <Image
                alt={b.name}
                src={b.image}
                height={200}
                width={200}
                className="object-contain max-w-none"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
