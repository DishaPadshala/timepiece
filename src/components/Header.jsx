const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'featured', label: 'Featured' },
  { id: 'products', label: 'Products' },
  { id: 'new', label: 'New' },
];

function Header({
  activeSection,
  isDarkTheme,
  isMenuOpen,
  isScrolled,
  onCartOpen,
  onMenuClose,
  onMenuOpen,
  onThemeToggle,
}) {
  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <i className="bx bxs-watch nav__logo-icon" /> Timepiece Co.
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link ${activeSection === link.id ? 'active-link' : ''}`}
                  onClick={onMenuClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav__close" id="nav-close" onClick={onMenuClose} aria-label="Close menu">
            <i className="bx bx-x" />
          </button>
        </div>

        <div className="nav__btns">
          <button className="change-theme" onClick={onThemeToggle} aria-label="Toggle theme">
            <i className={`bx ${isDarkTheme ? 'bx-sun' : 'bx-moon'}`} />
          </button>

          <button className="nav__shop" id="cart-shop" onClick={onCartOpen} aria-label="Open cart">
            <i className="bx bx-shopping-bag" />
          </button>

          <button className="nav__toggle" id="nav-toggle" onClick={onMenuOpen} aria-label="Open menu">
            <i className="bx bx-grid-alt" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
