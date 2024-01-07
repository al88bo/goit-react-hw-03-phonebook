import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsListFilter } from './ContactsListFilter/ContactsListFilter';

const STORAGE_KEY = 'Contacts_array';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = formData => {
    const hasDuplicate = this.state.contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicate) return alert(`${formData.name} is already in contacts.`);
    formData.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, formData],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(obj => obj.id !== contactId),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(obj =>
      obj.name.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    ); // (Note: any string includes an empty string)
    return (
      <SectionWrapper title="Phonebook">
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsListFilter
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </SectionWrapper>
    );
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    contacts && this.setState({ contacts });
  }

  componentDidUpdate() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
  }
}

export { App };
