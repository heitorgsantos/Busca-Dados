import React, { useState } from "react";
import validaEmail from "../validations/validationData";
import validaSenha from "../validations/validationData";

import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate()
  const handleSubmit = () => {
    if (validaEmail(email) && validaSenha(password) === true) {
      return true;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleSubmit === true ? navigate('/') : false} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
