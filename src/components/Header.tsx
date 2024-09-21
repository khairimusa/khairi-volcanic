"use client";

import { useState } from "react";

function Header() {
  const items = [
    { title: "JOBS", href: "google.com" },
    { title: "ABOUT", href: "google.com" },
    { title: "CANDIDATES", href: "google.com" },
    { title: "CLIENTS", href: "google.com" },
    { title: "JOIN US", href: "google.com" },
    { title: "INSIGHTS", href: "google.com" },
    { title: "CONTACT US", href: "google.com" },
  ];

  const [links, setLinks] = useState(items);

  return (
    <header className="flex justify-center items-center bg-opacity-0 h-36 relative z-10">
      <div className="w-full flex justify-between align-middle max-w-[1815px] font-medium">
        <a
          href="https://www.volcanic.com/"
          className="flex items-center text-2xl"
          target="_blank"
        >
          <div className="h-auto w-48 flex items-center">
            <img
              className="w-full h-auto object-cover"
              src="https://cdn.prod.website-files.com/5e2b1e2f47a6a2382f62a49a/5f6e49bbb083d36122975c86_integrations-volcanic-768x142-p-500.png"
            />
          </div>
        </a>
        <nav className="flex justify-between gap-10">
          <ul className="flex flex-row gap-6 text-base items-center">
            {links.map((item, index) => (
              <li className="text-white" key={index}>
                <a
                  className="group transition-all duration-10 ease-in-out"
                  href={item.href}
                >
                  <span className="bg-right-top bg-gradient-to-r pt-16 from-orange to-orange bg-[length:0%_10px] bg-no-repeat group-hover:bg-[length:100%_10px] group-hover:text-orange transition-all duration-10">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              className="border-l border-t border-b px-8 py-3 bg-white text-black cursor-pointer"
              aria-expanded="false"
              type="button"
            >
              LOGIN
            </button>
            <button
              className="border-orange px-8 py-3 bg-orange text-white cursor-pointer"
              aria-expanded="false"
              type="button"
            >
              REGISTER
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
