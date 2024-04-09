import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Styles from "./FormPage3.module.scss"

import FormPage2Input from '../include/form/FormPage2Input';
import Button from '../include/Button';
import { validateCreditCardNumber, validateExpirationDate } from '../../utils/validation';
import useMYContext from '../../hook/useContext';

const FormPage3 = () => {
    const navigate = useNavigate()
    const { setForm } = useMYContext()

    function onError(errors) {
        console.log("errors")
        console.log(errors)
    }

    function onSubmit(data) {
        toast.success("request send!");
        setForm(form => ({ ...form, ...data }));
        setTimeout(() => navigate("/"), 7000)
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <form className={Styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
            <ToastContainer />
            <p>credit card details</p>
            <div className={Styles.row}>
                <FormPage2Input type="number" name="cardNumber" placeholder="card number" errors={errors} required="true" register={{ ...register("cardNumber", { required: "card number is required", validate: validateCreditCardNumber }) }} />
                <FormPage2Input type="text" name="firstLast" placeholder="first name / last name" errors={errors} required="true" register={{ ...register("firstLast", { required: "name is required" }) }} />
                <FormPage2Input type="text" name="expDate" label="exp date" placeholder="MM / YYYY" errors={errors} required="true" register={{ ...register("expDate", { required: "expiration date is required", validate: validateExpirationDate }) }} />
                <FormPage2Input type="number" name="cvv" label="CVV" errors={errors} required="true" register={{ ...register("cvv", { required: "CVV is required" }) }} />
                <div className={Styles.radio}>
                    <FormPage2Input type="radio" defaultChecked id="radioEmail" name="confirmationVia" value="email" label="send me booking confirmation via email" errors={errors} register={{ ...register("confirmationVia") }} />
                    <FormPage2Input type="radio" id="radioText" name="confirmationVia" value="text" label="send me booking confirmation via text" errors={errors} register={{ ...register("confirmationVia") }} />
                </div>
            </div>
            <Button type="submit">book</Button>
        </form>
    );
}

export default FormPage3;
