"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { CustomPopover } from "../UI/CustomPopover ";
import Button from "../UI/Button";

interface NavLink {
  label: string;
  href: string;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links: NavLink[] = [
    { label: "אודות", href: "/about" },
    { label: "יצירת קשר", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 inset-auto z-50">
      <nav
        className={`container mx-auto mt-6 flex items-center border justify-between py-4 px-6 transition-all duration-300 rounded-lg ${
          isScrolled
            ? "border-gray-300 bg-background dark:bg-backgroundDark bg-opacity-80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <ul className="flex items-center space-x-6 rtl:space-x-reverse">
          <li>
            <CustomPopover
              triggerContent={<LockClosedIcon className="w-6 h-6" />}
            >
              <label htmlFor="userCode">קוד:</label>
              <input
                id="userCode"
                className="border border-solid border-foreground dark:border-foregroundDark"
              />
              <Button variant="success">התחברות</Button>
            </CustomPopover>
          </li>
          <li>
            <DarkModeToggle />
          </li>
          {links.map((link) => (
            <li key={link.href} className="">
              <Link
                href={link.href}
                className="font-semibold decoration-4 hover:text-emerald-700 dark:hover:text-emerald-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="text-3xl decoration-4 decoration-emerald-900 hover:underline "
        >
          פלוני אלמוני
        </Link>
      </nav>
    </header>
  );
}
