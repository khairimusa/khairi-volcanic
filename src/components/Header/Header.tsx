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
    <header className="flex justify-center items-center bg-transparent border-b-2 h-20">
      <div className="w-full flex justify-between align-middle max-w-screen-2xl font-medium">
        <a
          href="https://www.volcanic.com/"
          className="flex items-center text-2xl"
          target="_blank"
        >
          <div className="h-auto w-40 flex items-center">
            <img
              className="w-full h-auto object-cover"
              src="https://cdn.prod.website-files.com/5e2b1e2f47a6a2382f62a49a/5f6e49bbb083d36122975c86_integrations-volcanic-768x142-p-500.png"
            />
          </div>
        </a>
        <nav className="flex justify-between gap-10">
          <ul className="flex flex-row gap-6 text-base items-center">
            {links.map((item, index) => (
              <li>
                <a
                  className="group transition-all duration-10 ease-in-out"
                  href={item.href}
                >
                  <span className="bg-right-top bg-gradient-to-r pt-8 from-orange to-orange bg-[length:0%_8px] bg-no-repeat group-hover:bg-[length:100%_8px] group-hover:text-orange transition-all duration-10">
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
              className="border px-8 py-3 bg-orange text-white cursor-pointer"
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
