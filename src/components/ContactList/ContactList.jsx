import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

export default function ContactList({ contactInfo, onDelete }) {
  return (
    <ul className={css.list}>
      {contactInfo.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}