import React, { useEffect, useState } from "react";
import NetoForm from "./components/NetoForm";
import NetoHeader from "./components/NetoHeader";
import NetoLogout from "./components/NetoLogout";
import NetoPlug from "./components/NetoPlug";

export default function App() {
  const [user, setUser] = useState({
    login: 'vasya', 
    password: 'password'
  })
  const [token, setToken] = useState(null)

useEffect(() => {
  fetch('http://localhost:7070/auth', {
    method: 'POST',
    body: JSON.stringify({
      login: user.login, 
      password: user.password
    })
  })
    .then(resp => resp.json())
    .then(token => {
      setToken(token)
      localStorage.setItem('token', JSON.stringify(token))
  })
}, [])
useEffect(() => {
  fetch('http://localhost:7070/private/me')
    .then(resp => resp.json())
    .then(json => console.log(json))
}, [token])

  return (
    <>
      <NetoHeader>
        {user === null ? <NetoForm /> : <NetoLogout user={user} />}
      </NetoHeader>
      <NetoPlug/>
    </>
  );
}
