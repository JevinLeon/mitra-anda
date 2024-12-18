import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-12 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Selamat datang di Mitra Anda!</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Semua kebutuhan bahan bangunan Anda ada sini. Silakan kunjungi toko
          ataupun hubungi kontak kami.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <p className="regular-16 lg:regular-20 text-red-800">
            Melayani sejak
            <span className="bold-16 lg:bold-20 ml-1">2001</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="/contact">
            <Button type="button" title="Kontak Kami" variant="btn_red" />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center">
        <Image
          alt="hero_img"
          src="/hero-photo.jpg"
          width={1100}
          height={1100}
          className="rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
