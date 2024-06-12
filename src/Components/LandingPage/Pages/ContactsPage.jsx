import Contacts from "../Compo/Contacts"
import Title from "../Compo/Title"

const ContactsPage = () => {
  return (
      <>
          <div className="main-container">
              <Title title="Contact Us" subtitle="For enquiries, feel free to send a message." />
              <Contacts/>
      </div>
      </>
  )
}

export default ContactsPage