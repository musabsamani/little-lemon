import { Route, Routes } from 'react-router-dom';
import Styles from './reservation.module.scss';
import FormPage1 from '../components/form/FormPage1';
import FormPage2 from '../components/form/FormPage2';
import FormPage3 from '../components/form/FormPage3';

const Reservation = () => {
    return (
        <section className={Styles.reservation}>
            <div className={Styles.container}>
                <div className={Styles.intro}>
                    <h1>little lemon</h1>
                    <h2>chicago</h2>
                </div>
                <div className={Styles.form} >
                    <Routes>
                        <Route path="/" element={<FormPage1 />} />
                        <Route path="2" element={<FormPage2 />} />
                        <Route path="3" element={<FormPage3 />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Reservation;
