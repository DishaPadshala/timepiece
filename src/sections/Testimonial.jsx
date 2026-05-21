import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialWatch from '../assets/img/testimonial.png';
import { testimonials } from '../data/products.js';

const description = 'They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.';

function Testimonial() {
  return (
    <section className="testimonial section container">
      <div className="testimonial__container grid">
        <Swiper
          className="testimonial-swiper"
          modules={[Navigation]}
          loop
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="testimonial__card" key={testimonial.id}>
              <div className="testimonial__quote">
                <i className="bx bxs-quote-alt-left" />
              </div>
              <p className="testimonial__description">{description}</p>
              <h3 className="testimonial__date">{testimonial.date}</h3>

              <div className="testimonial__perfil">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial__perfil-img" />
                <div className="testimonial__perfil-data">
                  <span className="testimonial__perfil-name">{testimonial.name}</span>
                  <span className="testimonial__perfil-detail">{testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next">
            <i className="bx bx-right-arrow-alt" />
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-left-arrow-alt" />
          </div>
        </Swiper>

        <div className="testimonial__images">
          <div className="testimonial__square" />
          <img src={testimonialWatch} alt="Watch testimonial feature" className="testimonial__img" />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
