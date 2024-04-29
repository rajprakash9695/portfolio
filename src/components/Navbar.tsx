'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="max-w-screen-xl mx-auto  my-5">
      <ul className="flex justify-between p-8   rounded-full  border">
        <li>
          <Link
            className=" px-5 py-2.5 rounded-xl bg-rgba(36,39,44, 1) text-md font-semibold shadow-xl "
            href="/"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className=" px-5 py-2.5 rounded-xl bg-rgba(36,39,44, 1) text-md font-semibold shadow-xl"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className=" px-5 py-2.5 rounded-xl bg-rgba(36,39,44, 1) text-md font-semibold shadow-xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className=" px-5 py-2.5 rounded-xl bg-rgba(36,39,44, 1) text-md font-semibold shadow-xl"
          >
            Certificate
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className=" px-5 py-2.5 rounded-xl bg-rgba(36,39,44, 1) text-md  font-semibold shadow-xl"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
