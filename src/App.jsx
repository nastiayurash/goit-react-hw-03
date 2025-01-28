import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState, useMemo } from "react";
import { nanoid } from "nanoid";
import './App.css';

const App = () => {
   const initialContacts = useMemo(() => [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ], []); 

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [searchBox, setSearchBox] = useState("");

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.setItem("contacts", JSON.stringify(initialContacts)); 
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts, initialContacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((contact) => contact.id !== contactId);
      return updatedContacts;
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="header">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchBox} onSearch={setSearchBox} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;



