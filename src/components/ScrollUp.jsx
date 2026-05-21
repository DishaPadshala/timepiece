function ScrollUp({ isVisible }) {
  return (
    <a href="#home" className={`scrollup ${isVisible ? 'show-scroll' : ''}`} id="scroll-up" aria-label="Scroll to top">
      <i className="bx bx-up-arrow-alt scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
