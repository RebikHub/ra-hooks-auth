import React from 'react'

export default function NetoForm() {
  return (
    <form className="form">
      <input type="text" className="input-name" placeholder="Username" />
      <input type="text" className="input-password" placeholder="Password" />
      <button type="button" className="form-btn">Login</button>
    </form>
  )
}
