import React, { useEffect, useState } from "react";
import fetchApiBrasil from "../Requisicao/fetchApiBrasil";
import { validaCNPJ } from "../validations/validateCnpj";
import { redirect } from "react-router-dom";
function Home() {
  // 47960950000121
  const [numCnpj, setNumCnpj] = useState("");
  const [btnDBuscar, setBtnDBuscar] = useState(true);
  const [btnDResultados, setBtnDResultados] = useState(true);
  const [resultFetch, setResultFech] = useState({});

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


  //   useEffect(() => {
  //     console.log(handleFetchApi(), 'aqui')
  //   },[])

  return (
    <div className="div-main">
      <input
        type={"text"}
        value={numCnpj}
        onChange={(e) => setNumCnpj(e.target.value)}
      />
      <div>
        <button
          disabled={validaCNPJ(numCnpj) === false ? btnDBuscar : false}
          onClick={() => handleFetchApi()}
        >
          Buscar
        </button>
        <button
          disabled={btnDResultados}
          onClick={() => redirect("/resultados")}
        >
          Ver Resultados
        </button>
        <button onClick={handleClick}>Nova Busca</button>
      </div>
      <h1>{resultFetch.bairro}</h1>
    </div>
  );
}


export default Home;
