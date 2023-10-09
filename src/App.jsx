import { useState } from 'react'
import './App.css'
import MemberCard from './components/memberCard/MemberCard'
import StatusCard from './components/statusCard/StatusCard'

function App() {
  const [validation, setValidation] = useState()
  const [status, setStatus] = useState("")

  function validateWithCode(user){
    console.log("User: ", user)
    callServer(user, "http://localhost:8889/v1/validatewithcode")
  }

  function validateWithGoRule(user){
    console.log("User: ", user)
    callServer(user, "http://localhost:8889/v1/validatewithgorule")
  }

  function validateWithGrule(user){
    console.log("User: ", user)
    callServer(user, "http://localhost:8889/v1/validatewithgrule")
  }

  function callServer(user, url){
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((json) => {
      console.log("Results: ", json);
      setStatus(json)
      return json.results;
    })
    .catch((error) => {
        console.log(error);
        window.alert('Problem validating member');
    });
  }

  return (
    <>
      <MemberCard code = {validateWithCode}
                  gorules = {validateWithGoRule}
                  grule = {validateWithGrule} />
      <StatusCard status={status}/>
    </>
  )
}

export default App
