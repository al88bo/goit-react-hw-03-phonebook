const Contact = ({ id, name, number, deleteContact }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={() => deleteContact(id)}>
      Delete
    </button>
  </li>
);
export { Contact };
