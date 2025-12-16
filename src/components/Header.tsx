import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Header.css";
import logo from "../assets/FullLogo.png";


const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  /** -------- Smooth Scroll -------- */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  /** -------- Menu Config (Memoized) -------- */
  const menuItems = useMemo(
    () => [
      { id: "home", label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { id: "services", label: "Services", onClick: () => scrollToSection("services") },
      { id: "about", label: "About Us", onClick: () => scrollToSection("about") },
      { id: "portfolio", label: "Portfolio", onClick: () => scrollToSection("portfolio") },
      { id: "clients", label: "Clients", onClick: () => scrollToSection("clients") },
      { id: "contact", label: "Contact", onClick: () => scrollToSection("contact") }
    ],
    [scrollToSection]
  );

  /** -------- Detect Section on Scroll -------- */
  useEffect(() => {
    const sectionIds = ["home", "services", "about", "portfolio", "clients", "contact"];

    const handleScroll = () => {
      if (window.scrollY < 120) return setActiveSection("home");

      for (const id of sectionIds) {
        const sec = document.getElementById(id);
        if (!sec) continue;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) return setActiveSection(id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** -------- Show/Hide Scroll-to-Top -------- */
  useEffect(() => {
    const toggle = () => setShowScrollTop(window.scrollY > 250);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  /** -------- Close Search on Outside Click -------- */
  useEffect(() => {
    const closeSearch = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".search-toggle-btn") && !target.closest(".search-input-bar")) {
        setShowSearch(false);
      }
    };
    document.addEventListener("click", closeSearch);
    return () => document.removeEventListener("click", closeSearch);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">

          {/* LOGO */}
          <a
            className="navbar-brand brand-wrapper"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
            }}
          >
            <img src={logo} alt="VertixSoft Logo" className="header-logo" loading="lazy" />
          </a>

          {/* Hamburger */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* SEARCH */}
              <li className="nav-item d-flex align-items-center">
                <button
                  className="nav-link search-toggle-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSearch((prev) => !prev);
                  }}
                  aria-label="Toggle Search"
                >
                  <i className="bi bi-search"></i>
                </button>

                {showSearch && (
                  <input
                    autoFocus
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search..."
                    className="search-input-bar"
                  />
                )}
              </li>

              {/* MENU LINKS */}
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? "active-nav" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      item.onClick();
                      setActiveSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* PROFILE DROPDOWN */}
              {/*<li className="nav-item dropdown ms-2">
                <a className="nav-link dropdown-toggle profile-btn" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle profile-icon"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item">My Profile</a></li>
                  <li><a className="dropdown-item">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item">Logout</a></li>
                </ul>
              </li>
              */}

            </ul>
          </div>
        </div>
      </nav>

      {/* SCROLL TOP BUTTON */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      )}
    </>
  );
};

export default React.memo(Header);
