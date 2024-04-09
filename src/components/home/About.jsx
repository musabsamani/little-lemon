import Styles from './about.module.scss';

const About = () => {
    return (
        <section id="about" className={Styles.about} >
            <div className={Styles.container}>
                <div className={Styles.row}>
                    <div className={Styles.info}>
                        <h1>little lemon</h1>
                        <h2>chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className={Styles.img}>
                        <img src="./landing/restauranfood2.jpg" alt="about" />
                        <img src="./landing/restaurant chef B2.jpg" alt="about" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
