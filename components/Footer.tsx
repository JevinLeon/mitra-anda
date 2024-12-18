import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="border bg-gray-20" />

        <div className="flex flex-col items-center justify-center gap-[10%] md:flex-row">
          <Link href="/">
            <label className="bold-20 cursor-pointer">
              <span className="text-red-500">Mitra</span> Anda
            </label>
          </Link>
          <div>
            <p className="regular-14 w-full text-center text-gray-30">
              Telp no : 085100024089 | WhatsApp no : 08127001981 | Fax : (0778)
              474591
            </p>
          </div>
          <div>
            <p className="regular-14 w-full text-center text-gray-30">
              2024 Mitra Anda | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
