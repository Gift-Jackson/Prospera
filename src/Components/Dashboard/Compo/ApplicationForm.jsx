import InputField from "../../Global/Compo/InputField";
import MessageField from "../../Global/Compo/MessageField";
import SelectField from "../../Global/Compo/SelectField";
const options = [
  { value: "personal", label: "Personal" },
  { value: "business", label: "Business" },
];
const ApplicationForm = () => {
  return (
    <>
      <form>
        <div className="">
          <InputField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your full name"
            id="name"
          />
          <InputField
            type="text"
            name="company"
            label="Company/ School (Optional)"
            placeholder="ACME Inc."
            id="company"
          />
        </div>
        <InputField
          type="email"
          name="email"
          label="E-mail Address"
          placeholder="Enter e-mail address"
          id="email"
        />
        <InputField
          type="number"
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          id="phone"
        />
        <SelectField
          id="grant-type"
          name="grant-type"
          label="Select Grant Type"
          options={options}
        />
        <MessageField
          type="message"
          label="Message"
          name="message"
          placeholder="Hello, I'm interested in the grant... "
        />
        <InputField
          type="file"
          name="id-pdf"
          label="ID or Document"
          placeholder=""
          id="id-pdf"
        />
        <InputField
          type="text"
          name="organization"
          label="Organization Name"
          placeholder="Enter the organization"
          id="organization"
        />
        <InputField
          type="text"
          name="contact-name"
          label="Contact Name"
          placeholder="Enter contact name..."
          id="contact"
        />
        <InputField
          type="text"
          name="project-name"
          label="Project Name"
          placeholder="Enter project name"
          id="project"
        />
        <MessageField
          type="message"
          label="Project Description"
          name="description"
          placeholder="What about your projet?... "
        />
        <InputField
          type="number"
          name="project-budget"
          label="Project Budget($)"
          placeholder="100,000"
          id="budget"
        />
        <InputField
          type="number"
          name="funding-amount"
          label="Requested Funding Amount($)"
          placeholder="100,000"
          id="funding-amount"
        />
        <InputField
          type="text"
          name="timeline"
          label="Project Timeline"
          placeholder="3 months"
          id="timeline"
        />
        <InputField
          type="file"
          name="project-pdf"
          label="Attachments (.pdf, .docx, etc.)"
          placeholder=""
          id="project-pdf"
        />

        <MessageField
          type="message"
          label="Additional Information"
          name="additional-information"
          placeholder="Additional information..."
        />
        <button type="submit">Apply</button>
      </form>
    </>
  );
};

export default ApplicationForm;
