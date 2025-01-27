import css from "./Contact.module.css";
import { FaUser, FaPhone} from "react-icons/fa";

const Contact = ({id, name, number, onDelete }) => {
    return (
        <div className={css.contactWrapper}> 
           <div className={css.contactInfo}>
        <span className={css.contactName}>
          <FaUser className={css.icon} /> {name}
        </span>
        <span className={css.contactNumber}>
          <FaPhone className={css.icon} /> {number}
        </span>
        </div>
        <div className={css.btnWrapper}>
          <button className={css.deleteButton} onClick={() => onDelete(id)}>Delete</button>  
          </div>
             </div>
   ) 
}



export default Contact;