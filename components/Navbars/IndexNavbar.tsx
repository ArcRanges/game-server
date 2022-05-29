import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

const LoginButton = () => (
  <Link href="/login">
    <button
      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 ease-linear transition-all duration-150"
      type="button"
    >
      LOGIN
    </button>
  </Link>
);

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  bg-slate-100 shadow">
        <div className="container md:px-0 mx-auto flex flex-wrap items-center justify-between  md:pb-0">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start  md:mb-0">
            <div className="flex flex-row items-center">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
              <Link href="/">
                <a
                  className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  Game Master
                </a>
              </Link>
            </div>

            <div className="lg:hidden">
              <LoginButton />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/servers">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <span className="inline-block ml-2">Our Servers</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/leaderboard">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <span className="inline-block ml-2">Leaderboard</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/donate">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <span className="inline-block ml-2">Donate</span>
                  </a>
                </Link>
              </li>
              {/*<li className="flex items-center">
                <Link href="/faqs-and-guides">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    <span className="inline-block ml-2">FAQ</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li> */}

              <li className="hidden lg:flex items-center">
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
