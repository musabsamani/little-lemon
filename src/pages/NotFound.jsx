import Styles from './notFound.module.scss';

const NotFound = () => {
    return (
        <section className={Styles["not-found"]}>
            <div className={Styles.container}>
                <h1>page not found 🤔</h1>
            </div>
        </section>
    );
}

export default NotFound;
