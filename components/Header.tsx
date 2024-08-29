import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";

const Header = ({children} : HeaderProps) => {
  return (
    <div className="">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assests/icons/logo.png"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assests/icons/logo-icon.svg"
          alt="Logo with name"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
