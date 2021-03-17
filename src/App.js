import './App.css';
import { useState } from 'react';

function App() {
const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const submitForm = () =>{
  var user ={
    name: name,
    lastName: lastName,
    email: email,
    password: password,
  }
}


  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">FIRST NAME:</label>
        <input 
          type="text"
          id="firstName"
          onChange={(event)=>{
            setName(event.target.value)
        }}
        />
        <label htmlFor="lastName">LAST NAME:</label>
         <input 
          type="text"
          id="lastName"
          onChange={(event)=>{
            setLastName(event.target.value)
        }}
        />
        <label htmlFor="email">E-MAIL:</label>
         <input         
          type="text"
          id="email"
          onChange={(event)=>{
            setEmail(event.target.value)
        }}
        />
        <label htmlFor="password">PASSWORD:</label>
         <input 
          type="password"
          id="password"
          onChange={(event)=>{
            setPassword(event.target.value)
        }}
        />
        <input type="submit" id="submit"/>
      </form>      
    </div>
  );
}

export default App;
