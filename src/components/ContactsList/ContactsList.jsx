import { Contact } from './Contact';
import css from './Contact.module.css';

const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={css['contacts-list']}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);
export { ContactsList };
