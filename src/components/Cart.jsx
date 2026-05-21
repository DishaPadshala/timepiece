import { cartItems } from '../data/products.js';

function Cart({ isOpen, onClose }) {
  return (
    <aside className={`cart ${isOpen ? 'show-cart' : ''}`} id="cart" aria-label="Shopping cart">
      <button className="cart__close" id="cart-close" onClick={onClose} aria-label="Close cart">
        <i className="bx bx-x" />
      </button>

      <h2 className="cart__title-center">My Cart</h2>

      <div className="cart__container">
        {cartItems.map((item) => (
          <article className="cart__card" key={item.id}>
            <div className="cart__box">
              <img src={item.image} alt={item.title} className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">{item.title}</h3>
              <span className="cart__price">{item.price}</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus" />
                  </span>
                  <span className="cart__amount-number">1</span>
                  <span className="cart__amount-box">
                    <i className="bx bx-plus" />
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cart__prices">
        <span className="cart__prices-item">3 items</span>
        <span className="cart__prices-total">$2880</span>
      </div>
    </aside>
  );
}

export default Cart;
