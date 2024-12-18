import { CONTACTS } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-12 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 space-y-4 justify-center">
          <strong className="text-2xl text-red-500">Lokasi Kami</strong>
          {CONTACTS.map((m) => (
            <div className="flex gap-4 items-center ">
              <Image src={m.image} alt="location" width={28} height={28} />
              <p className="text-gray-30">{m.detail}</p>
            </div>
          ))}
        </div>
        <div className="relative flex flex-1 justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.050622545281!2d104.047213!3d1.1239919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989194feb7f83%3A0xbf002dccfd5afa7a!2sMitra%20Anda!5e0!3m2!1sid!2sid!4v1734547421852!5m2!1sid!2sid"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
