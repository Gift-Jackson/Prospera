import PropTypes from "prop-types";
import styles from "../Styles/InputField.module.css";

const SelectField = ({ label, name, id, onChange, value, options }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        {label}
        <span className={styles.red}>*</span>
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        <option value="" disabled>{`Select ${label}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
