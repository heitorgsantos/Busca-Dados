import React, { useState } from "react";
import validaEmail from "../validations/validationData";
import validaSenha from "../validations/validationData";

import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   if (validaEmail(email) && validaSenha(password) === true) {
  //     return true;
  //   }
  // };

  return (
    <div class='container' >
      <form >
        <div class="mb-3">
          <label class="form-label" for="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">
            Senha
          </label>
          <input
            class="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={() => (validaEmail(email) && validaSenha(password) === true ? navigate("/home") : console.log("Falha na autorização"))}
          type="submit"
          class="btn btn-primary"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
