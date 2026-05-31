"use client";
import Link from "next/link";

const aboutLinks = [
  { label: "Our Story", href: "/top/story" },
  { label: "Information", href: "#visit" },
];

const shopLinks = [
  { label: "Menu", href: "/top#food-menu", external: false },
  { label: "Online Shop (NATUVIEW)", href: "https://www.natuview.jp/", external: true },
];

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 md:px-10"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 3 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* About */}
          <div>
            <p
              className="text-xs tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              ABOUT
            </p>
            <ul className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 300,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <p
              className="text-xs tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              SHOP
            </p>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#FFFFFF")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(255,255,255,0.75)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#FFFFFF")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(255,255,255,0.75)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <p
              className="text-xs tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              NEWSLETTER / SNS
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/natti_coffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="#FFFFFF"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* LINE */}
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="LINE"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M12 5.5C7.86 5.5 4.5 8.18 4.5 11.5c0 2.1 1.3 3.95 3.3 5.05L7 19l2.5-1.3c.8.2 1.63.3 2.5.3 4.14 0 7.5-2.68 7.5-6S16.14 5.5 12 5.5z" />
                </svg>
              </a>
              {/* Online Shop */}
              <a
                href="https://www.natuview.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Online Shop"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{
              color: "#FFFFFF",
              opacity: 0.4,
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            © 2026 natti Coffee
          </p>
          <Link
            href="/top/privacy"
            className="text-xs transition-opacity duration-200 opacity-40 hover:opacity-70"
            style={{
              color: "#FFFFFF",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              textDecoration: "none",
            }}
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
