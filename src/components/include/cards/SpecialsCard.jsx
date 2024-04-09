import Styles from './specialsCard.module.scss';

const SpecialsCard = ({ img, name, price, text }) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.img}>
                <img src={`./food/${img}`} alt={name} />
            </div>
            <div className={Styles.details}>
                <div className={Styles.row}>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <p>{text}</p>
                <span>order a delivery <img src="./icons/delivery.svg" alt="delivery" /></span>
            </div>
        </div>
    );
}

export default SpecialsCard;
