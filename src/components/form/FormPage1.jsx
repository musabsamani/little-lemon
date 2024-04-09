import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../include/Button';
import Select from '../include/form/Select';

import Styles from './formPage1.module.scss';
import { GetTimeAPI, GetDatesAPI } from '../../utils/getDatesAPI';
import { useEffect, useState } from 'react';
import useMYContext from '../../hook/useContext';

let numberOfDinersArray = ["number of diners", 2, 4, 6, 8]
let occasionArray = ["occasion", "Dinner", "Birthday celebration", "Anniversary", "Business meeting", "Casual gathering", "Romantic dinner", "Special event"]

const FormPage1 = () => {
    const { setForm } = useMYContext()
    const navigate = useNavigate()
    const [timeArray, setTimeArray] = useState([])
    const [dateArray, setDateArray] = useState([])

    useEffect(() => {
        setTimeArray(GetTimeAPI())
        setDateArray(GetDatesAPI())
    }, []);

    function onSubmit(data) {
        setForm(form => ({ ...form, ...data }));
        navigate("2")
    }
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <div className={Styles.formPage1}>
            <div className={Styles.intro}>
                <p>find a table for any occasion</p>
                <div className={Styles.row}>
                    <img src="./landing/restaurant.jpg" alt="reservation" />
                    <img src="./landing/restaurant chef B.jpg" alt="reservation" />
                </div>
            </div>
            <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.row}>
                    <Select name="time" required="true" options={timeArray} errors={errors} register={{ ...register("time", { required: "time is required" }) }} />
                    <Select name="date" required="true" options={dateArray} errors={errors} register={{ ...register("date", { required: "date is required" }) }} />
                    <Select name="numberOfDiners" required="true" options={numberOfDinersArray} errors={errors} register={{ ...register("numberOfDiners", { required: "number of diners field is required" }) }} />
                    <Select name="occasion" required="true" options={occasionArray} errors={errors} labele="ss" register={{ ...register("occasion", { required: "occasion field is required" }) }} />
                </div>
                <div className={Styles.row}>
                    <p>seating options</p>
                    <div className={Styles.row}>
                        <label htmlFor="standard">
                            <span>standard</span>
                            <input type="radio" value="standard" name="seating" id="standard" defaultChecked {...register("seating")} />
                        </label>
                        <label htmlFor="outside">
                            <span>outside</span>
                            <input type="radio" value="outside" name="seating" id="outside" {...register("seating")} />
                        </label>
                    </div>
                </div>
                <Button type="submit">let&apos;s go</Button>
            </form>
        </div>
    );
}

export default FormPage1;
