import { useState } from "react";
import InputField from "../../Global/Compo/InputField";
import MessageField from "../../Global/Compo/MessageField";
import SelectField from "../../Global/Compo/SelectField";
import styles from "../Styles/ApplicationForm.module.css";
import PropTypes from "prop-types";

const options = [
  { value: "personal", label: "Personal" },
  { value: "business", label: "Business" },
];

const ApplicationForm = ({ onFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    grantType: "",
    message: "",
    idPdf: null,
    organization: "",
    contactName: "",
    projectName: "",
    projectBudget: "",
    fundingAmount: "",
    timeline: "",
    description: "",
    projectPdf: null,
    additionalInformation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) newErrors.email = "E-mail address is required";
    if (!formValues.phone) newErrors.phone = "Phone number is required";
    if (!formValues.grantType) newErrors.grantType = "Grant type is required";
    if (!formValues.organization)
      newErrors.organization = "Organization name is required";
    if (!formValues.contactName)
      newErrors.contactName = "Contact name is required";
    if (!formValues.projectName)
      newErrors.projectName = "Project name is required";
    if (!formValues.projectBudget)
      newErrors.projectBudget = "Project budget is required";
    if (!formValues.fundingAmount)
      newErrors.fundingAmount = "Funding amount is required";
    if (!formValues.timeline)
      newErrors.timeline = "Project timeline is required";
    if (!formValues.description)
      newErrors.description = "Project description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit();
      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.gridInp}>
          <InputField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your full name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            type="text"
            name="company"
            label="Company/ School (Optional)"
            placeholder="ACME Inc."
            id="company"
            value={formValues.company}
            onChange={handleChange}
          />
        </div>
        <div className={styles.gridInp}>
          <InputField
            type="email"
            name="email"
            label="E-mail Address"
            placeholder="Enter e-mail address"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            type="number"
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            id="phone"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>
        <SelectField
          id="grant-type"
          name="grantType"
          label="Grant Type"
          options={options}
          value={formValues.grantType}
          onChange={handleChange}
          error={errors.grantType}
        />
        <MessageField
          type="message"
          label="Message"
          name="message"
          placeholder="Hello, I'm interested in the grant... "
          value={formValues.message}
          onChange={handleChange}
        />

        <InputField
          type="file"
          name="idPdf"
          label="ID or Document"
          placeholder=""
          id="id-pdf"
          onChange={handleChange}
        />
        <br />
        <div className={styles.gridInp}>
          <InputField
            type="text"
            name="organization"
            label="Organization Name"
            placeholder="Enter the organization"
            id="organization"
            value={formValues.organization}
            onChange={handleChange}
            error={errors.organization}
          />
          <InputField
            type="text"
            name="contactName"
            label="Contact Name"
            placeholder="Enter contact name..."
            id="contact"
            value={formValues.contactName}
            onChange={handleChange}
            error={errors.contactName}
          />
          <InputField
            type="text"
            name="projectName"
            label="Project Name"
            placeholder="Enter project name"
            id="project"
            value={formValues.projectName}
            onChange={handleChange}
            error={errors.projectName}
          />
          <InputField
            type="number"
            name="projectBudget"
            label="Project Budget($)"
            placeholder="100,000"
            id="budget"
            value={formValues.projectBudget}
            onChange={handleChange}
            error={errors.projectBudget}
          />
          <InputField
            type="number"
            name="fundingAmount"
            label="Requested Funding Amount($)"
            placeholder="100,000"
            id="funding-amount"
            value={formValues.fundingAmount}
            onChange={handleChange}
            error={errors.fundingAmount}
          />
          <InputField
            type="text"
            name="timeline"
            label="Project Timeline"
            placeholder="3 months"
            id="timeline"
            value={formValues.timeline}
            onChange={handleChange}
            error={errors.timeline}
          />
        </div>
        <MessageField
          type="message"
          label="Project Description"
          name="description"
          placeholder="What about your project?... "
          value={formValues.description}
          onChange={handleChange}
          error={errors.description}
        />

        <InputField
          type="file"
          name="projectPdf"
          label="Attachments (.pdf, .docx, etc.)"
          placeholder=""
          id="project-pdf"
          onChange={handleChange}
        />

        <MessageField
          type="message"
          label="Additional Information"
          name="additionalInformation"
          placeholder="Additional information..."
          value={formValues.additionalInformation}
          onChange={handleChange}
        />
        <button type="submit">
          Apply &nbsp; <i className="fa-regular fa-paper-plane"></i>
        </button>
      </form>
    </>
  );
};

ApplicationForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default ApplicationForm;
