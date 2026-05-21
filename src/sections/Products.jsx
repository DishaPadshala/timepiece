import { products } from '../data/products.js';

function Products() {
  return (
    <section className="products section container" id="products">
      <h2 className="section__title">Products</h2>

      <div className="products__container grid">
        {products.map((product) => (
          <article className="products__card" key={product.id}>
            <img src={product.image} alt={product.title} className="products__img" />
            <h3 className="products__title">{product.title}</h3>
            <span className="products__price">{product.price}</span>
            <button className="products__button" aria-label={`Add ${product.title} to cart`}>
              <i className="bx bx-shopping-bag" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
