import TestimonialsCard from "../include/cards/TestimonialsCard";
import Styles from "./testimonials.module.scss";

const Testimonials = () => {
  let testimonials = [
    { rating: 3, img: "0.jpg", name: "John", text: "I love Little Lemon! The food is always fresh and bursting with flavor. The modern twist on traditional Mediterranean recipes is a delightful surprise. Highly recommend!" },
    { rating: 4, img: "1.jpg", name: "Amanda", text: "I found the essence of Mediterranean cuisine at Little Lemon. Dishes made with fresh ingredients, prepared with skill and passion. Already planning my next visit." },
    { rating: 3, img: "2.jpg", name: "Sara", text: "Little Lemon is my go-to restaurant in Chicago. Cozy ambiance, friendly staff, and incredible food crafted with care. Every visit is a culinary delight." },
    { rating: 5, img: "3.jpg", name: "Adam", text: "Thrilled to discover Little Lemon. Welcoming atmosphere, diverse menu options, and each bite is a taste sensation. Quickly became one of my favorite spots in the city." },
  ]

  return (
    <section id="testimonials" className={Styles.testimonials}>
      <div className={Styles.container}>
        <h1>Testimonials</h1>
        <div className={Styles.content}>
          {testimonials.map((person, i) =>
            <TestimonialsCard key={i} i={i} rating={person.rating} img={person.img} name={person.name} text={person.text} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
