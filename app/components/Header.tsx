"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useMenu } from "./MenuContext";

const navLinks = [
  { label: "STORY", href: "/story" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "MENU",
    subItems: [
      { label: "LUNCH", href: "#lunch-menu" },
      { label: "DRINK", href: "#drink-menu" },
      { label: "FOOD", href: "#food-menu" },
      { label: "DESSERT", href: "#dessert-menu" },
    ],
  },
  { label: "INFORMATION", href: "#visit" },
  { label: "ONLINE SHOP", href: "https://www.natuview.jp/", external: true },
];

// ブランドカラーの定義
const BRAND_GREEN = "#1D3D1D";
const BRAND_RED = "#FF5A5A";

export default function Header() {
  const { menuOpen, setMenuOpen } = useMenu();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isStoryPage = pathname === "/story" || pathname === "/about" || pathname.startsWith("/menu") || pathname.startsWith("/privacy");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // 別ページから /top に遷移した後、スクロール先が指定されていれば実行
  useEffect(() => {
    if (pathname === "/") {
      const scrollTo = sessionStorage.getItem("natti_scroll_to");
      if (scrollTo) {
        sessionStorage.removeItem("natti_scroll_to");
        setTimeout(() => {
          document.querySelector(`#${scrollTo}`)?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [pathname]);

  const handleNav = (href: string, external?: boolean) => {
    setMenuOpen(false);
    if (external) return;
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        // 現在のページに要素がある → URLを変えずにスクロール
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // 別ページにいる → フラグを立てて /top へ遷移（ハッシュなし）
        sessionStorage.setItem("natti_scroll_to", href.slice(1));
        router.push("/");
      }
    } else if (href.startsWith("/")) {
      router.push(href);
    }
  };

  return (
    <>
      <header
        className="sticky z-50 flex items-center justify-between px-6 md:px-10 h-14 md:h-[70px]"
        style={{
          top: isStoryPage ? "0px" : "40px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E8E8E8",
        }}
      >
        {/* Left: Logo (SVG完全再現版) */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex flex-col justify-center">
            <svg
              width="80"
              height="37"
              className="md:w-[120px] md:h-[55px] transition-opacity duration-300 group-hover:opacity-80"
              viewBox="0 0 479 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ロゴ全体のパスデータを1つに統合 */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M282.972 1.67074C277.11 5.35074 275.739 8.91374 275.735 20.4847L275.731 30.7347H270.617C261.642 30.7347 254.731 36.5817 254.731 44.1757C254.731 48.1137 258.371 54.4967 261.554 56.1437C263.096 56.9407 267.1 57.9037 270.451 58.2827L276.544 58.9717L277.136 66.6037C277.462 70.8007 278.218 83.2347 278.815 94.2347C279.982 115.711 280.581 118.051 285.933 122.04C291.544 126.222 301.826 123.688 305.282 117.271C307.112 113.872 307.102 113.207 304.702 78.6237C303.992 68.3877 303.667 59.3437 303.981 58.5267C304.37 57.5127 306.688 56.8407 311.279 56.4127C318.803 55.7097 321.888 54.1207 324.834 49.4307C326.311 47.0787 326.723 45.0827 326.396 41.8707C325.507 33.1497 318.993 28.2327 309.628 29.2137L304.025 29.8007L303.477 19.8387C302.891 9.20874 301.622 5.76774 297.028 2.34874C293.207 -0.49526 286.907 -0.79926 282.972 1.67074ZM377.03 3.63574C372.159 6.69474 370.731 10.3967 370.731 19.9637V28.2917L363.739 29.3927C355.543 30.6837 352.075 32.6677 350.209 37.1337C348.393 41.4787 349.959 47.6217 353.828 51.3277C356.286 53.6827 357.835 54.1927 363.98 54.6707L371.231 55.2347L370.977 67.2347C370.838 73.8347 370.221 86.9247 369.606 96.3237C368.365 115.299 368.583 116.455 374.045 119.785C380.43 123.678 389.851 121.271 393.143 114.905C395.512 110.324 396.53 100.985 397.274 76.9847L397.965 54.7347L403.098 54.7307C412.108 54.7247 417.731 49.3467 417.731 40.7347C417.731 32.1937 413.532 28.7347 403.161 28.7347H397.89L397.223 21.9847C396.856 18.2727 396.152 13.6387 395.659 11.6867C393.601 3.54274 383.873 -0.66226 377.03 3.63574ZM458.613 6.48474C458.547 6.89674 458.542 7.55574 458.601 7.94874C458.659 8.34174 458.091 8.42674 457.338 8.13774C455.063 7.26474 451.46 14.3257 451.019 20.5247C450.565 26.9087 451.938 30.9847 455.278 33.1737C458.212 35.0957 467.731 36.3917 467.731 34.8697C467.731 34.2797 468.423 34.0627 469.268 34.3877C472.573 35.6557 478.731 26.1467 478.731 19.7737C478.731 13.4307 472.813 5.32974 469.62 7.30274C468.862 7.77174 468.684 7.61974 469.136 6.88974C469.642 6.06974 468.237 5.73474 464.29 5.73474C461.233 5.73474 458.678 6.07274 458.613 6.48474ZM28.3398 19.1337C23.0988 20.9197 19.9868 21.3767 15.3398 21.0447C8.19977 20.5337 3.88977 22.5917 1.19777 27.7997C-0.247229 30.5937 -0.313227 32.7897 0.616773 47.0937C1.19477 55.9707 1.47177 74.7277 1.23277 88.7747C0.82077 112.927 0.904772 114.493 2.78577 117.585C7.44077 125.239 21.4388 125.689 26.2548 118.339C29.2728 113.733 29.8848 107.621 30.1308 79.6777C30.2648 64.5217 30.7348 51.5377 31.1758 50.8237C32.6278 48.4747 40.1388 45.7787 45.2308 45.7787C54.2498 45.7787 62.4738 51.5267 66.3248 60.5217C68.8338 66.3847 70.5848 78.2377 71.5738 96.0497C72.6208 114.916 73.5398 117.496 80.3938 120.814C86.1598 123.605 91.0278 122.634 95.9808 117.703L99.7308 113.97V101.573C99.7308 89.5997 97.8448 70.2607 95.6248 59.4587C95.0338 56.5857 92.7448 50.4537 90.5388 45.8327C84.0878 32.3237 74.9788 24.0997 61.0068 19.1687C51.5468 15.8297 38.0798 15.8157 28.3398 19.1337ZM164.731 22.8327C156.094 24.3287 147.348 28.9757 140.14 35.8977C132.212 43.5107 128.257 51.1267 126.082 62.9717C124.638 70.8347 124.632 72.5137 126.019 80.7387C128.908 97.8737 136.873 109.938 149.521 116.337C154.017 118.612 156.724 119.214 164.025 119.563C179.324 120.295 189.572 116.782 199.483 107.408C204.158 102.986 205.028 102.515 205.839 103.963C214.449 119.349 227.359 123.346 234.451 112.823C238.055 107.475 237.528 102.9 232.641 97.0937C224.876 87.8687 222.22 77.5527 221.219 52.7347C220.876 44.2097 220.162 35.8387 219.634 34.1317C217.565 27.4507 210.307 24.2347 202.852 26.6947C199.526 27.7927 198.177 27.6477 191.161 25.4367C181.712 22.4577 172.264 21.5277 164.731 22.8327ZM183.731 51.6227C188.781 54.0707 189.307 54.6477 190.157 58.6727C191.333 64.2397 189.687 76.2507 187.038 81.4297C184.852 85.7027 177.452 91.1997 171.888 92.6817C167.706 93.7967 161.986 92.7867 158.115 90.2507C152.732 86.7237 149.696 75.0397 151.679 65.4847C153.084 58.7147 156.052 54.0347 160.639 51.3557C167.76 47.1977 174.768 47.2787 183.731 51.6227ZM457.152 49.1537C452.048 51.3767 451.655 53.7497 451.503 83.2997C451.383 106.848 451.578 110.64 453.059 113.455C455.309 117.736 458.089 119.068 463.502 118.457C466.936 118.07 468.825 117.108 471.606 114.329L475.231 110.706L475.826 86.4697C476.158 72.9517 476.013 60.1447 475.498 57.5077C473.829 48.9597 465.895 45.3467 457.152 49.1537ZM229.827 173C224.744 175.612 223.33 179.033 222.899 189.762L222.498 199.735H218.115C213.771 199.735 213.731 199.767 213.731 203.235C213.731 206.716 213.755 206.735 218.231 206.735H222.731V227.235V247.735H226.731H230.731V227.235V206.735H237.794H244.858L244.544 203.485L244.231 200.235L237.481 199.939L230.731 199.644V192.657C230.731 180.028 233.814 176.524 243.172 178.52L247.731 179.493V176.239C247.731 173.395 247.338 172.906 244.606 172.36C239.582 171.355 232.424 171.665 229.827 173ZM270.635 173.4C266.226 176.137 265.346 178.603 264.915 189.435L264.508 199.635L259.869 199.935C255.44 200.221 255.217 200.381 254.918 203.485L254.604 206.735H259.668H264.731V227.235V247.735H268.731H272.731V227.235V206.735H279.231H285.731V203.235V199.735H279.231H272.731V191.19C272.731 183.45 272.962 182.413 275.186 180.19C277.816 177.559 280.333 177.187 285.488 178.665C288.68 179.581 288.731 179.543 288.731 176.282C288.731 173.691 288.24 172.837 286.481 172.365C282.105 171.193 273.261 171.77 270.635 173.4ZM107.231 177.617C97.9148 180.07 88.2318 187.98 84.0008 196.593C81.5078 201.67 81.2308 203.286 81.2308 212.735C81.2308 221.956 81.5478 223.911 83.8318 228.781C88.7248 239.212 96.0718 245.286 107.351 248.224C119.818 251.471 131.362 249.422 141.555 242.152C141.733 242.025 141.158 240.527 140.277 238.823C138.77 235.91 138.541 235.813 136.437 237.192C132.45 239.805 125.353 241.864 120.109 241.931C107.901 242.086 98.4348 237.058 93.2308 227.656C90.5208 222.76 90.2308 221.364 90.2308 213.235C90.2308 202.896 92.2068 197.592 98.3478 191.451C103.931 185.869 108.093 184.253 116.843 184.271C123.377 184.285 125.02 184.66 128.437 186.922C137.878 193.169 137.946 205.256 128.575 211.457C125.602 213.425 124.731 214.65 124.731 216.868C124.731 219.14 125.18 219.735 126.893 219.735C130.847 219.735 137.548 214.902 140.451 209.958C146.446 199.746 142.929 186.844 132.37 180.315C128.143 177.702 126.515 177.312 118.897 177.085C114.131 176.943 108.881 177.183 107.231 177.617ZM169.231 201.302C161.438 205.34 155.731 214.974 155.731 224.091C155.731 235.209 161.861 245.228 170.455 248.156C182.495 252.259 193.488 247.834 198.56 236.842C204.265 224.478 200.743 209.918 190.368 202.985C186.097 200.131 184.697 199.736 178.868 199.741C174.829 199.745 171.057 200.356 169.231 201.302ZM309.535 201.776C305.387 203.966 301.547 208.539 299.262 214.007C297.085 219.218 297.281 231.148 299.63 236.319C303.212 244.208 311.905 249.735 320.728 249.735C325.746 249.735 334.063 247.131 336.047 244.939C337.516 243.315 337.532 242.896 336.197 240.99L334.704 238.858L329.194 241.381C324.893 243.35 322.817 243.756 319.731 243.235C312.555 242.023 306.422 236.179 305.564 229.735L305.231 227.235L319.892 226.959L334.554 226.683L335.642 223.56C338.633 214.982 336.02 205.711 329.49 201.73C325.05 199.023 314.702 199.046 309.535 201.776ZM364.231 201.308C355.941 205.619 351.744 213.504 351.763 224.735C351.777 233.509 353.772 238.801 358.858 243.559C362.691 247.144 369.357 249.735 374.75 249.735C379.483 249.735 387.404 247.341 389.776 245.194C391.465 243.665 391.496 243.307 390.121 241.208L388.61 238.901L383.147 241.402C378.89 243.351 376.812 243.756 373.731 243.235C366.545 242.021 361.016 236.741 359.331 229.485L358.693 226.735H373.614H388.535L389.633 223.586C392.633 214.982 390.028 205.716 383.49 201.73C379.384 199.226 368.684 198.991 364.231 201.308ZM186.204 208.125C193.04 212.605 195.466 226.839 190.881 235.569C188.043 240.972 181.568 244.302 175.95 243.248C162.352 240.697 159.425 216.178 171.731 207.91C175.746 205.213 181.898 205.304 186.204 208.125ZM327.063 208.622C328.519 210.079 329.119 212.025 329.166 215.448L329.231 220.235L317.364 220.518L305.498 220.8L306.192 218.018C307.326 213.478 310.524 209.091 313.987 207.326C318.079 205.241 324.298 205.858 327.063 208.622ZM380.983 208.798C383.256 211.605 384.114 215.072 383.32 218.235C382.697 220.72 382.624 220.735 371.212 220.735C360.938 220.735 359.733 220.551 359.747 218.985C359.778 215.696 364.247 209.242 367.746 207.433C372.246 205.105 378.517 205.752 380.983 208.798Z"
                fill={BRAND_GREEN}
              />
              
              {/* iの上のドットだけを赤で描画 (SVG内の座標に合わせて配置) */}
              <circle
                cx="464"
                cy="20"
                r="16"
                fill={BRAND_RED}
              />
            </svg>
          </div>
        </Link>

        {/* Center: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const navStyle = {
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#1A1A1A",
              fontFamily: "'Fredoka One', cursive",
              textDecoration: "none",
            } as React.CSSProperties;

            if ("subItems" in link && link.subItems) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className="transition-colors duration-200"
                    style={{ ...navStyle, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                  >
                    {link.label}
                  </button>
                  {dropdownOpen === link.label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        paddingTop: "8px",
                        zIndex: 100,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E8E8E8",
                          borderRadius: "4px",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                          overflow: "hidden",
                          minWidth: "120px",
                        }}
                      >
                        {link.subItems.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => { setDropdownOpen(null); handleNav(sub.href); }}
                            style={{
                              display: "block",
                              width: "100%",
                              padding: "10px 20px",
                              fontSize: "12px",
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              fontFamily: "'Fredoka One', cursive",
                              color: "#1A1A1A",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "center",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F0EB"; e.currentTarget.style.color = BRAND_GREEN; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1A1A1A"; }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={navStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                >
                  {link.label}
                </a>
              );
            }
            if (link.href!.startsWith("/")) {
              return (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="transition-colors duration-200"
                  style={navStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href!)}
                className="transition-colors duration-200"
                style={{ ...navStyle, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: SNS Icons (PC only) + Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="https://www.instagram.com/natti_coffee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden md:flex transition-colors duration-200"
            style={{ color: "#1A1A1A", alignItems: "center" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://line.me/R/ti/p/@926wxvfc?ts=06091726&oat_content=url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINE"
            className="hidden md:flex transition-colors duration-200"
            style={{ color: '#1A1A1A', alignItems: 'center' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2D4A2D')}
            onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M12 5.5C7.86 5.5 4.5 8.18 4.5 11.5c0 2.1 1.3 3.95 3.3 5.05L7 19l2.5-1.3c.8.2 1.63.3 2.5.3 4.14 0 7.5-2.68 7.5-6S16.14 5.5 12 5.5z" />
            </svg>
          </a>
          <a
            href="https://www.natuview.jp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Online Shop"
            className="hidden md:flex transition-colors duration-200"
            style={{ color: "#1A1A1A", alignItems: "center" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_GREEN)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            <ShoppingBag size={20} />
          </a>
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="menu"
          >
            <span className="block h-px w-5 transition-all duration-300" style={{ backgroundColor: "#1A1A1A" }} />
            <span className="block h-px w-5 transition-all duration-300" style={{ backgroundColor: "#1A1A1A" }} />
            <span className="block h-px w-5 transition-all duration-300" style={{ backgroundColor: "#1A1A1A" }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-5 right-6 text-2xl text-[#1A1A1A]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                if ("subItems" in link && link.subItems) {
                  return (
                    <div key={link.label} className="flex flex-col items-center gap-4">
                      <motion.span
                        className="text-3xl font-bold tracking-widest text-[#1A1A1A]"
                        style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.1em" }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 + 0.05 }}
                      >
                        {link.label}
                      </motion.span>
                      <div className="flex gap-8">
                        {link.subItems.map((sub, j) => (
                          <motion.button
                            key={sub.label}
                            onClick={() => handleNav(sub.href)}
                            style={{
                              fontFamily: "'Fredoka One', cursive",
                              letterSpacing: "0.1em",
                              fontSize: "18px",
                              color: BRAND_GREEN,
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 + j * 0.04 + 0.1 }}
                          >
                            {sub.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  );
                }
                if (link.external) {
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-bold tracking-widest text-[#1A1A1A]"
                      style={{
                        textDecoration: "none",
                        fontFamily: "'Fredoka One', cursive",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 + 0.05 }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  );
                }
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNav(link.href!)}
                    className="text-3xl font-bold tracking-widest text-[#1A1A1A]"
                    style={{
                      fontFamily: "'Fredoka One', cursive",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>

            {/* SNS icons */}
            <motion.div
              className="absolute bottom-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
            >
              {/* Instagram */}
              <a
                href="https://www.instagram.com/natti_coffee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#1A1A1A", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = BRAND_GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LINE */}
              <a
                href="https://line.me/R/ti/p/@926wxvfc?ts=06091726&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                style={{ color: "#1A1A1A", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = BRAND_GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M12 5.5C7.86 5.5 4.5 8.18 4.5 11.5c0 2.1 1.3 3.95 3.3 5.05L7 19l2.5-1.3c.8.2 1.63.3 2.5.3 4.14 0 7.5-2.68 7.5-6S16.14 5.5 12 5.5z" />
                </svg>
              </a>
              {/* Online Shop */}
              <a
                href="https://www.natuview.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Online Shop"
                style={{ color: "#1A1A1A", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = BRAND_GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = "#1A1A1A")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}