import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      style={{
        color: 'black',
        width: '129px',
        marginLeft: '20px',
        height: '55px',
      }}
      className="btn btn-primary btn-block loginButton"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
