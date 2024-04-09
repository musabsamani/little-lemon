import Styles from "./specials.module.scss";
import Button from "../include/Button";
import SpecialsCard from "../include/cards/SpecialsCard";
let specials = [
  {
    img: "greek salad.jpg",
    name: "Greek Salad",
    price: 12.99,
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    img: "bruchetta.png",
    name: "Bruschetta",
    price: 5.99,
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    img: "lemon dessert.jpg",
    name: "Lemon Dessert",
    price: 5,
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]
const Specials = () => {
  return (
    <section id="specials" className={Styles.specials}>
      <div className={Styles.container}>
        <div className={Styles.intro}>
          <h1>specials</h1>
          <Button>online menu</Button>
        </div>
        <div className={Styles.info}>
          {specials.map((item, i) => <SpecialsCard key={i} img={item.img} name={item.name} price={(item.price).toFixed(2)} text={item.text} />)}
        </div>
      </div>
    </section>
  );
}

export default Specials;
