import styles from "./testimonialsCard.module.scss"

const TestimonialsCard = ({ rating, img, name, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.rating}>
                {Array.from({ length: rating }).map((item, i) =>
                    <img key={i} src={`./icons/star.jpg`} alt="star" />
                )}
            </div>
            <div className={styles.row}>
                <img src={`./people/${img}`} alt="person1" />
                <span>{name}</span>
            </div>
            <q>{text}</q>
        </div>
    );
}

export default TestimonialsCard;
