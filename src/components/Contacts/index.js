import { useState,useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css";

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      fullname:"Yusuf",
      phone_number:123444
    },
     {
      fullname:"Mehmet",
      phone_number:1454555
    },
     {
      fullname:"Ayşe",
      phone_number:5668888
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts}  contacts={contacts}/>
    </div>
  )
}

export default Contacts
