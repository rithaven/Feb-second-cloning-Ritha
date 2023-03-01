import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  
  return (
    <header
      className={`w-full backdrop-filter backdrop-blur-lg bg-white fixed z-10  ease-in-out duration-500 ${
        animateHeader && "shadow-xl"
      }`}
    >
      <div className="mx-auto max-w-7xl ">
        <div className={`flex max-w-screen-xl py-10 ${
            animateHeader && "py-3"
          } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
        >
         
                <div>
                  <img className="h-8" src="/logo.png" alt="logo" />
                </div>
                <div className="flex items-center gap-8">
                  <div className="hidden gap-2 lg:flex">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.15"
                        d="M5 11H19V21H5V11Z"
                        fill="#000000"
                      />
                      <path
                        d="M8 11V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V11M8 11H5V21H19V11H16M8 11H16"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>For personnel</p>
                  </div>
                  <div className="hidden gap-2 lg:flex">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 19.7501C11.8012 19.7499 11.6105 19.6708 11.47 19.5301L4.70001 12.7401C3.78387 11.8054 3.27072 10.5488 3.27072 9.24006C3.27072 7.9313 3.78387 6.6747 4.70001 5.74006C5.6283 4.81186 6.88727 4.29042 8.20001 4.29042C9.51274 4.29042 10.7717 4.81186 11.7 5.74006L12 6.00006L12.28 5.72006C12.739 5.25606 13.2857 4.88801 13.8883 4.63736C14.4909 4.3867 15.1374 4.25845 15.79 4.26006C16.442 4.25714 17.088 4.38382 17.6906 4.63274C18.2931 4.88167 18.8402 5.24786 19.3 5.71006C20.2161 6.6447 20.7293 7.9013 20.7293 9.21006C20.7293 10.5188 20.2161 11.7754 19.3 12.7101L12.53 19.5001C12.463 19.5752 12.3815 19.636 12.2904 19.679C12.1994 19.7219 12.1006 19.7461 12 19.7501ZM8.21001 5.75006C7.75584 5.74675 7.30551 5.83342 6.885 6.00505C6.4645 6.17669 6.08215 6.42989 5.76001 6.75006C5.11088 7.40221 4.74646 8.28491 4.74646 9.20506C4.74646 10.1252 5.11088 11.0079 5.76001 11.6601L12 17.9401L18.23 11.6801C18.5526 11.3578 18.8086 10.9751 18.9832 10.5538C19.1578 10.1326 19.2477 9.68107 19.2477 9.22506C19.2477 8.76905 19.1578 8.31752 18.9832 7.89627C18.8086 7.47503 18.5526 7.09233 18.23 6.77006C17.9104 6.44929 17.5299 6.1956 17.1109 6.02387C16.6919 5.85215 16.2428 5.76586 15.79 5.77006C15.3358 5.76675 14.8855 5.85342 14.465 6.02505C14.0445 6.19669 13.6621 6.44989 13.34 6.77006L12.53 7.58006C12.3869 7.71581 12.1972 7.79149 12 7.79149C11.8028 7.79149 11.6131 7.71581 11.47 7.58006L10.66 6.77006C10.3395 6.44628 9.95791 6.18939 9.53733 6.01429C9.11675 5.83919 8.66558 5.74937 8.21001 5.75006Z"
                        fill="#000000"
                      />
                    </svg>
                    <p>Support us</p>
                  </div>
                  <div className="hidden w-1 h-5 border-l border-black lg:block"></div>
                  <div className="hidden gap-1 lg:flex ">
                    <img className="h-6" src="/language.svg" alt="" />
                    <p>EN</p>
                    <img className="h-6" src="/down.svg" alt="" />
                  </div>
                  <div className="hidden gap-1 lg:flex">
                    <img className="h-6" src="/search.svg" alt="" />
                    <p>Search</p>
                  </div>
                  <div className="flex gap-1">
                    <img className="h-6" src="/menu.svg" alt="" />
                    <p>Menu</p>
                  </div>
                  <div>
                    <div className="hidden py-2 bg-black rounded-full px-b8 lg:block">
                      <h3 className="text-white">Login</h3>
                    </div>
                  </div>
                </div>
             
        </div>
      </div>
    </header>
  );
}
