import { useState } from 'react'
import './App.css'
import MemberCard from './components/memberCard/memberCard'

function App() {
  const [validation, setValidation] = useState()

  function validateWithServer(user){
    console.log("Validating with server")
    console.log("User: ", user)
    fetch('http://localhost:8889/v1/validate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((json) => {
      console.log("Results: ", json);
      return json.results;
    })
    .catch((error) => {
        console.log(error);
        window.alert('Problem validating member');
    });
  }

  return (
    <>
      <MemberCard validateData = {validateWithServer}/>
    </>
  )
}

export default App
