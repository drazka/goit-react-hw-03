import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactList from './components/contactList/ContactList'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
  )
}

export default App
