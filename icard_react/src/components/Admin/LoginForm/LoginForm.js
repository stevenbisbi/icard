import React from 'react'
import "./LoginForm.scss"
import { Button, Form} from "semantic-ui-react"

export function LoginForm() {
  return (
    <Form className='login-form-admin'>
      <Form.Input name="email" placeholder="Correo electronico" />
      <Form.Input name="password" type='password' placeholder="Contraseña" />
        <Button type='submit' content="Iniciar Sesión" primary fluid />
    </Form>
  )
}
