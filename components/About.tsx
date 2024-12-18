import { PEOPLE_URL } from "@/constants";
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

const About = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <AboutPhoto backgroundImage="bg-bg-img-1" />
        <AboutPhoto backgroundImage="bg-bg-img-2" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-red-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Tentang Kami</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Mitra Anda telah menjadi solusi bagi aneka kebutuhan bangunan dan
            renovasi Anda sejak tahun 2003 di kota Batam. Kami menawarkan
            beraneka ragam produk dari semen, pasir, bata, cat, pipa, aneka
            perkakas, dan perlengkapan bangunan lainnya. Kami juga menawarkan
            harga yang kompetitif dan layanan antar untuk memudahkan Anda
            mendapatkan material dengan cepat dan efisien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
