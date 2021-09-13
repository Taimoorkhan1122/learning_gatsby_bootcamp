import React from 'react'
import {RouteComponentProps} from '@reach/router';

type Props = RouteComponentProps

const Login: React.FC<Props> = () => {
  return (
    <div>
      <h3>Login page with client side routing</h3>
    </div>
  )
}

export default Login
