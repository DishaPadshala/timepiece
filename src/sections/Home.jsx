import homeWatch from '../assets/img/home.png';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__img-bg">
          <img src={homeWatch} alt="B720 watch collection" className="home__img" />
          <div className="home__highlight">
            <span className="home__highlight-label">Featured</span>
            <span className="home__highlight-title">B720 Series</span>
          </div>
        </div>

        <div className="home__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="home__social-link">Facebook</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="home__social-link">Twitter</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home__social-link">Instagram</a>
        </div>

        <div className="home__data">
          <span className="home__eyebrow">Curated everyday timepieces</span>
          <h1 className="home__title">Modern watches for every moment</h1>
          <p className="home__description">
            Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.
          </p>

          <div className="home__btns">
            <a href="#featured" className="button home__button">Shop featured</a>
            <a href="#products" className="button button--gray button--small">Browse collection</a>
          </div>

          <div className="home__stats" aria-label="Store highlights">
            <div>
              <span className="home__stats-number">15+</span>
              <span className="home__stats-text">Curated styles</span>
            </div>
            <div>
              <span className="home__stats-number">$250</span>
              <span className="home__stats-text">Starting price</span>
            </div>
            <div>
              <span className="home__stats-number">24h</span>
              <span className="home__stats-text">Fast dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
