import clsx from "clsx";
import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({name, number}) => {
    return (
  <div className={css.contact}>
    <div>
    <p className={css.contactName}><IoMdPerson size="24" className={css.iconName} />{name}</p>
    <p className={css.contactNumber}><BsFillTelephoneFill size="20" className={css.iconNumber} />{number}</p>
    </div>

    <button className={css.buttonDelete}>Delete</button>
  </div>
    );
  };
  
  export default Contact;