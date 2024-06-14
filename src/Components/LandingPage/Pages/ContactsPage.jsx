import Transition from "../../Global/Transition";
import Contacts from "../Compo/Contacts";
import Title from "../Compo/Title";

const ContactsPage = () => {
  return (
    <>
      <Transition>
        <div className="main-container">
          <Title
            title="Contact Us"
            subtitle="For enquiries, feel free to send a message."
          />
          <Contacts />
        </div>
      </Transition>
    </>
  );
};

export default ContactsPage;
