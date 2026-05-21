import { featuredWatches } from '../data/products.js';

function Featured() {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">Featured</h2>

      <div className="featured__container grid">
        {featuredWatches.map((watch) => (
          <article className="featured__card" key={watch.id}>
            <span className="featured__tag">25% off</span>
            <img src={watch.image} alt={watch.title} className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">{watch.title}</h3>
              <div className="featured__prices">
                <span className="featured__price">{watch.price}</span>
                <span className="featured__price-original">{watch.originalPrice}</span>
              </div>
            </div>

            <button className="button featured__button">ADD TO CART</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Featured;
