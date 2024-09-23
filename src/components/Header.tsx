"use client";
import { useState, useEffect, useRef } from "react";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import { createUser, getUserByEmail } from "@/utils/db/actions";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import { useAppContext } from "@/context";

const authClientId = process.env.WEB3_AUTH_CLIENT_ID as string;

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Ethereum Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId: authClientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET, // Changed from SAPPHIRE_MAINNET to TESTNET
  privateKeyProvider,
});

const Header = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<any>(null);
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
          const user = await web3auth.getUserInfo();
          setUserInfo(user);
          setUser(user);
          if (user.email) {
            localStorage.setItem("userEmail", user.email);
            try {
              await createUser(user.email, user.name || "Anonymous User");
            } catch (error) {
              console.error("Error creating user:", error);
              // Handle the error appropriately, maybe show a message to the user
            }
          }
        }
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const login = async () => {
    console.log("loging in");
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      setLoggedIn(true);
      const user: any = await web3auth.getUserInfo();
      setUserInfo(user);
      setUser(user);
      if (user.email) {
        localStorage.setItem("userEmail", user.email);
        try {
          await createUser(user.email, user.name || "Anonymous User");
        } catch (error) {
          console.error("Error creating user:", error);
          // Handle the error appropriately, maybe show a message to the user
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
      setUserInfo(null);
      setUser(null);
      localStorage.removeItem("userEmail");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const getUserInfo = async () => {
    if (web3auth.connected) {
      const user = await web3auth.getUserInfo();
      setUserInfo(user);
      setUser(user);
      if (user.email) {
        localStorage.setItem("userEmail", user.email);
        try {
          await createUser(user.email, user.name || "Anonymous User");
        } catch (error) {
          console.error("Error creating user:", error);
          // Handle the error appropriately, maybe show a message to the user
        }
      }
    }
  };

  const [hideNav, setHideNav] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 150) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const items = [
    { title: "JOBS", href: "#latest-job" },
    { title: "ABOUT", href: "#about-us" },
    { title: "CANDIDATES", href: "#candidates" },
    { title: "CLIENTS", href: "#testimonials" },
    { title: "JOIN US", href: "#work-for-us" },
    { title: "INSIGHTS", href: "#insights" },
    { title: "CONTACT US", href: "#contact-us" },
  ];
  const [links, setLinks] = useState(items);

  return (
    <>
      <nav
        id="nav"
        className={
          hideNav
            ? "hidden"
            : "fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
        }
      >
        {/* Desktop */}
        <div className="w-full flex justify-between items-center font-medium gap-4 max-w-[1815px] mx-auto py-10 px-4">
          <a
            href="https://www.volcanic.com/"
            className="flex items-center text-2xl"
            target="_blank"
          >
            <div className="h-auto xs:max-w-48 max-w-24 flex items-center">
              <img
                className="w-full h-auto object-cover"
                src="https://cdn.prod.website-files.com/5e2b1e2f47a6a2382f62a49a/5f6e49bbb083d36122975c86_integrations-volcanic-768x142-p-500.png"
              />
            </div>
          </a>
          <nav className="flex justify-between gap-10">
            <ul className="hidden xl:flex flex-row gap-6 text-base items-center">
              {links.map((item, index) => (
                <li className="text-white" key={index}>
                  <a
                    className="group transition-all duration-10 ease-in-out"
                    href={item.href}
                  >
                    <span className="bg-right-top bg-gradient-to-r pt-14 from-orange to-orange bg-[length:0%_10px] bg-no-repeat group-hover:bg-[length:100%_10px] group-hover:text-orange transition-all duration-10">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="xl:flex hidden flex-col md:flex-row">
              {!userInfo && !loading ? (
                <button
                  className="focus:ring-4 shadow-lg transform active:scale-x-125 transition-transform border-l border-t border-b px-8 py-3 bg-white text-black cursor-pointer"
                  aria-expanded="false"
                  type="button"
                  onClick={login}
                >
                  LOGIN
                </button>
              ) : null}
              <button
                className="border-orange px-8 py-3 bg-orange text-white cursor-pointer focus:ring-4 shadow-lg transform active:scale-x-125"
                aria-expanded="false"
                type="button"
                onClick={logout}
              >
                {userInfo ? `LOGOUT` : "REGISTER"}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile */}
        <div className="px-4 py-12 xl:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-xl">
                <DrawerHeader>
                  <DrawerTitle>
                    <ul className="flex flex-col gap-4 text-base items-center">
                      {links.map((item, index) => (
                        <li className="text-black" key={index}>
                          <a
                            className="group transition-all duration-10 ease-in-out"
                            href={item.href}
                          >
                            <span className="">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </DrawerTitle>
                </DrawerHeader>
                <DrawerFooter>
                  {!userInfo && !loading ? (
                    <button
                      className="focus:ring-4 shadow-lg transform active:scale-x-75 border-l border-t border-b px-8 py-3 bg-white text-black cursor-pointer"
                      aria-expanded="false"
                      type="button"
                      onClick={login}
                    >
                      LOGIN
                    </button>
                  ) : null}
                  <button
                    className="focus:ring-4 shadow-lg transform active:scale-x-75 border-orange px-8 py-3 bg-orange text-white cursor-pointer"
                    aria-expanded="false"
                    type="button"
                    onClick={logout}
                  >
                    {userInfo ? `LOGOUT` : "REGISTER"}
                  </button>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Header;
