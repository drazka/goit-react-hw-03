import clsx from "clsx";
import css from "./ContactList.module.css";
import contacts from '../../contacts.json';
import Contact from '../contact/Contact'

const ContactList = () => {
    return (
  <ul className={css.contactList}>
    {contacts.map(contact => (
          <li key={contact.id}>
            <Contact 
              name={contact.name} 
              number={contact.number} 
            />
          </li>
        ))}
  </ul>
    );
  };
  
  export default ContactList;

