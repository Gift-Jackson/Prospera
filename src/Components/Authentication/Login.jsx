import { useState } from "react";
import InputField from "../Global/Compo/InputField";
import Title from "../LandingPage/Compo/Title";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form or perform actions
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <>
      <AuthLayout>
        <Title title="Login" subtitle="Access your Prospera account." />
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField
            label="E-mail Address"
            type="email"
            placeholder="Enter your e-mail address..."
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          <InputField
            label="Password"
            type="password"
            placeholder="Not less than 6 characters..."
            name="password"
            id="pwd"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <button type="submit">Login</button>
        </form>
        <p className={styles.text}>
          Don&apos;t have an account?{" "}
          <Link to="/register" className={styles.mark}>
            Register now
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Login;
