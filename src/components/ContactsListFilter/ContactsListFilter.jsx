const ContactsListFilter = ({ filter, handleChangeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      type="text"
      name="keyword"
      onChange={handleChangeFilter}
      value={filter}
    />
  </div>
);
export { ContactsListFilter };
