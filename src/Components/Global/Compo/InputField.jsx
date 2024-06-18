import PropTypes from "prop-types";
import styles from "../Styles/InputField.module.css";
import { useState } from "react";
const InputField = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  accept
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className={styles.input}>
        <label htmlFor={id}>
          {label}
          <span className={styles.red}>*</span>
        </label>
        <div className={styles.field}>
          <input
            type={isPasswordVisible ? "text" : type}
            name={name}
            id={id}
            placeholder={placeholder}
            accept={accept}
            value={value}
            onChange={onChange}
          />
          {type === "password" && (
            <span
              onClick={togglePasswordVisibility}
              className="material-symbols-outlined"
            >
              {isPasswordVisible ? "visibility" : "visibility_off"}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.string,
};

export default InputField;
