import React, { useState } from 'react'
import { CardLabel, CardLogin, Header, InputSubmit, Navbar } from './Styles';

const Register = () => {
  function newUser(e) {
    e.preventDefault()
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Celular: ${phone}`);
    console.log(`Endereço: ${address}`);
    console.log(`Senha: ${password}`);
    window.location.href = 'http://localhost:3000/'
  }

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()


  return (
    <Navbar>
      <CardLogin>
        <Header>Cadastre-se</Header>
        <form onSubmit={newUser}>
          <CardLabel>
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" id="name" placeholder='Seu nome' onChange={(e) => setName(e.target.value)}/>
          </CardLabel>

          <CardLabel>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder='Seu email' onChange={(e) => setEmail(e.target.value)}/>
          </CardLabel>

          <CardLabel>
            <label htmlFor="phone">Celular: </label>
            <input type="tel" name="phone" id="phone" placeholder='Seu número' onChange={(e) => setPhone(e.target.value)}/>
          </CardLabel>

          <CardLabel>
            <label htmlFor="address">Endereço: </label>
            <input type="text" name='address' id='address' placeholder='Seu endereço' onChange={(e) => setAddress(e.target.value)}/>
          </CardLabel>

          <CardLabel>
            <label htmlFor="password">Senha: </label>
            <input type="password" name="password" id="password" placeholder='Sua senha' onChange={(e) => setPassword(e.target.value)}/>
          </CardLabel>

          <div>
            <InputSubmit type="submit" value="Cadastrar" />
          </div>
        </form>
      </CardLogin>
        
    </Navbar>
  )
}

export default Register