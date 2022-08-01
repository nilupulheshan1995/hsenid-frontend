import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Boutique Shop
            </span>
          </Link>
          <div className="flex items-center">
            <Link href="tel:5541251234">
              <a className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">
                (555) 412-1234
              </a>
            </Link>
            <Link href="/login">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Log Out
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  href="/dashboard"
                  aria-current="page"
                >
                  <a className="text-gray-900 dark:text-white hover:underline">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/item">
                  <a className="text-gray-900 dark:text-white hover:underline">
                    Add Item
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                >
                  <a className="text-gray-900 dark:text-white hover:underline">
                    Order
                  </a>
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
