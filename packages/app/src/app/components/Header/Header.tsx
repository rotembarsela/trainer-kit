import Link from "next/link";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { CustomPopover } from "../UI/CustomPopover ";
import { LockClosedIcon } from "@radix-ui/react-icons";

interface NavLink {
  label: string;
  href: string;
}

export default function Header() {
  const links: NavLink[] = [
    { label: "אודות", href: "/about" },
    { label: "יצירת קשר", href: "/contact" },
  ];

  return (
    <header className="">
      <nav className="container mx-auto flex items-center justify-between py-6 px-8">
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
            </CustomPopover>

            {/* <button className="p-2 rounded font-semibold decoration-4 group">
              <LockClosedIcon className="w-6 h-6 group-hover:text-emerald-700 dark:hover:text-emerald-900" />
            </button> */}
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
          className="text-4xl decoration-4 decoration-emerald-900 hover:underline "
        >
          פלוני אלמוני
        </Link>
      </nav>
    </header>
  );
}
