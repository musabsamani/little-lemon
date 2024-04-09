
const Select = ({ name, options, required = false, errors, register, ...props }) => {
    return (
        <label htmlFor={name}>
            <select id={name} name={name} requiredd={required} {...register} {...props}>
                {options.map((item, i) => {
                    return i === 0 ?
                        <option key={i} value="" selected disabled>{item}</option>
                        :
                        <option key={i} value={item}>{item}</option>
                }
                )}
            </select>
            {errors?.[name]?.message && <span>{errors?.[name]?.message}</span>}
        </label>
    );
}

export default Select;
