import Styles from "./landing.module.scss";
import Button from "../include/Button";

const Landing = () => {

  return (
    <section id="home" className={Styles.landing}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <h1>little Lemon</h1>
        </div>
        <div className={Styles.row}>
          <div className={Styles.intro}>
            <h2>chicago</h2>
            <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div className={Styles.img}>
            <img src="./landing/landing.jpg" alt="landing" />
          </div>
        </div>
        <Button role="navigation" to="/reservation">reserve a table</Button>
      </div>
    </section>
  );
}

export default Landing;
