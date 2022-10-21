import React, { useEffect, useState } from "react";
import fetchApiBrasil from "../Requisicao/fetchApiBrasil";
import { validaCNPJ } from "../validations/validateCnpj";
import { Navigate, useNavigate } from "react-router-dom";
import { InputData } from "./components/DadosCnpj";
import HeaderMain from "../components/HeaderMain";
import styled from "styled-components";
function Home() {
  // 47960950000121
  const [numCnpj, setNumCnpj] = useState("");
  const [btnDBuscar, setBtnDBuscar] = useState(true);
  const [btnDResultados, setBtnDResultados] = useState(true);
  const [resultFetch, setResultFech] = useState({});
  const navigate = useNavigate();

  const handleFetchApi = async () => {
    const response = await fetchApiBrasil(numCnpj);
    setBtnDResultados(false);
    console.log(response, "RESPONSE");
    setResultFech(response);
    return response;
  };

  const handleClick = async () => {
    setBtnDBuscar(true);
    setBtnDResultados(true);
    setNumCnpj("");
  };
  const handlePage = () => {
    navigate("/resultados", { state: resultFetch });
  };
  //   useEffect(() => {
  //     console.log(handleFetchApi(), 'aqui')
  //   },[])

  return (
    <div>
      <HeaderMain />
      <div className=" ">
        <input
          class="form-control mb-5 mt-3"
          type="text"
          placeholder="Insira um CNPJ válido para a consulta"
          aria-label="default input example"
          value={numCnpj}
          required
          onChange={(e) => setNumCnpj(e.target.value)}
        />
        <div>
          <button
            className="btn btn-primary"
            disabled={validaCNPJ(numCnpj) === false ? btnDBuscar : false}
            onClick={() => handleFetchApi()}
          >
            Buscar
          </button>
          <button
            className="btn btn-primary mx-3"
            disabled={btnDResultados}
            onClick={() => handlePage()}
          >
            Ver Resultados
          </button>
          {/* <Navigate to="/resultados" state={resultFetch}/> */}
          <button className="btn btn-primary" onClick={handleClick}>
            Nova Busca
          </button>
        </div>
        <h3 className="d-flex justify-content-center mt-5">Buscador de Dados</h3>

      </div>
    </div>
  );
}


const CnpjInvalido = styled.p `
  display  = ``
`

export default Home;
