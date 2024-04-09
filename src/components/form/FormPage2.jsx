import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Styles from "./FormPage2.module.scss"

import FormPage2Input from '../include/form/FormPage2Input';
import Button from '../include/Button';
import useMYContext from '../../hook/useContext';

const FormPage2 = () => {
    const { setForm } = useMYContext()

    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const navigate = useNavigate()
    function handleMouseDown() {
        setIsHiddenPassword(false);
    }
    function handleMouseUp() {
        setIsHiddenPassword(true);
    }
    function onError(errors) {
        console.log("errors")
        console.log(errors)
    }
    function onSubmit(data) {
        setForm(form => ({ ...form, ...data }));
        navigate("/reservation/3")

    }
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <form className={Styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
            <p>sign in to collect points</p>
            <div className={Styles.row}>
                <FormPage2Input type="text" name="firstName" placeholder="first name" errors={errors} required register={{ ...register("firstName", { required: "first name is required" }) }} />
                <FormPage2Input type="text" name="lastName" placeholder="last name" errors={errors} required register={{ ...register("lastName", { required: "last name is required" }) }} />
                <FormPage2Input type="text" name="phoneNumber" placeholder="phone number" errors={errors} required register={{ ...register("phoneNumber", { required: "phone number is required" }) }} />
                <FormPage2Input type="email" name="email" placeholder="email" errors={errors} required register={{ ...register("email", { required: "email is required" }) }} />
                <FormPage2Input type={isHiddenPassword ? "password" : "text"} name="password" placeholder="password" errors={errors} required register={{ ...register("password", { required: "password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } }) }} >
                    <FontAwesomeIcon icon={isHiddenPassword ? faEye : faEyeSlash} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                </FormPage2Input>
                <label>
                    <textarea name="textarea" id="textarea" placeholder="add special request (optional)" {...register("textarea")}></textarea>
                </label>
            </div>
            <Button type="submit">continue</Button>
        </form>
    );
}

export default FormPage2;
