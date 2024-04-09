import React from 'react';

const FormPage2Input = ({ label, id, name, required = false, errors, children, register, ...props }) => {
    return (
        <>
            <label>
                {label && <p>{label}</p>}
                <input id={id ? id : name} requiredd={`${required}`} {...register} {...props} />
                {children}
                {errors?.[name]?.message && <span>{errors?.[name]?.message}</span>}
            </label>
        </>
    );
}

export default FormPage2Input;
