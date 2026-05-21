import { Swiper, SwiperSlide } from 'swiper/react';
import { newArrivals } from '../data/products.js';

function NewArrivals() {
  return (
    <section className="new section container" id="new">
      <h2 className="section__title">New Arrivals</h2>

      <div className="new__container">
        <Swiper
          className="new-swiper"
          loop
          spaceBetween={24}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {newArrivals.map((watch) => (
            <SwiperSlide className="new__card" tag="article" key={watch.id}>
              <span className="new__tag">New</span>
              <img src={watch.image} alt={watch.title} className="new__img" />

              <div className="new__data">
                <h3 className="new__title">{watch.title}</h3>
                <span className="new__price">{watch.price}</span>
              </div>

              <button className="button new__button">ADD TO CART</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewArrivals;
