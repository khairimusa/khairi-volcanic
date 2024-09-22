"use client";

import { useState, useEffect } from "react";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import { createUser, getUserByEmail } from "@/utils/db/actions";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isMobile = 768;

  console.log("user info", userInfo);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
          const user = await web3auth.getUserInfo();
          setUserInfo(user);
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
      const user = await web3auth.getUserInfo();
      setUserInfo(user);
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
      localStorage.removeItem("userEmail");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const getUserInfo = async () => {
    if (web3auth.connected) {
      const user = await web3auth.getUserInfo();
      setUserInfo(user);
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
            {!userInfo && !loading ? (
              <button
                className="border-l border-t border-b px-8 py-3 bg-white text-black cursor-pointer"
                aria-expanded="false"
                type="button"
                onClick={login}
              >
                LOGIN
              </button>
            ) : null}
            <button
              className="border-orange px-8 py-3 bg-orange text-white cursor-pointer"
              aria-expanded="false"
              type="button"
              onClick={logout}
            >
              {userInfo ? `LOGOUT` : "REGISTER"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
