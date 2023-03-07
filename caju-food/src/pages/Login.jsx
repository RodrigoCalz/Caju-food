import React, { useState } from 'react'
import { Button, CardLabel, CardLogin, Header, Navbar } from './Styles';

const Login = () => {

  function teste(e) {
    e.preventDefault()
    console.log(`Login: ${login} e Senha: ${password}`);
  }

  function registerPage() {
    window.location.href = 'http://localhost:3000/register'
  }
  function newPassPage() {
    window.location.href = 'http://localhost:3000/newpassword'
  }

  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  return (
    <Navbar>
      <CardLogin>
        <Header>caju food</Header>
        <CardLabel>
          <label htmlFor="login">Login: </label>
          <input
            type="text"
            name='login'
            id='login'
            placeholder='Digite o seu login'
            onChange={(e) => setLogin(e.target.value)}
          />
        </CardLabel>

        <CardLabel>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Digite a sua senha'
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardLabel>
        <div>
          <Button type="submit" onClick={teste}>Entrar</Button>
          <br />
          <Button type="submit" onClick={newPassPage}>Esqueci a senha</Button>
          <br />
          <Button onClick={registerPage}>Cadastre-se</Button>
        </div>
      </CardLogin>

    </Navbar>
  )
}

export default Login