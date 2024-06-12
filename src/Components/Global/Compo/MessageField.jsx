import PropTypes from "prop-types";
import styles from "../Styles/InputField.module.css"
const MessageField = ({
    label,
    type,
    placeholder,
    name,
    id,
    onChange,
    value,}) => {
  return (
      <>
      <div className={styles.input}>
        <label htmlFor={id}>{label}<span className={styles.red}>*</span></label>
              <textarea
                  rows="5"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
      </>
  )
}

MessageField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

export default MessageField