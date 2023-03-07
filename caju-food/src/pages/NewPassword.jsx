import React, { useState } from 'react'
import { Button, CardLabel, Header, Navbar } from './Styles';

const NewPassword = () => {

  const resetPassword = (e) => {
    e.preventDefault()
    console.log(`Email: ${email}`);
  }

  const [email, setEmail] = useState()

  return (
    <Navbar>
      <Header>Esqueci a Senha</Header>
      <CardLabel>
        <label htmlFor="email">Digite o seu email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </CardLabel>

      <Button type="submit" onClick={resetPassword}>Enviar</Button>
    </Navbar>
  )
}

export default NewPassword