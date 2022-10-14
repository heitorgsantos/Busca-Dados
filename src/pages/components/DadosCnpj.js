import React from "react";
import { useLocation } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";

function DadosCnpj() {
  const location = useLocation();
  const {
    bairro,
    cnpj,
    cep,
    data_inicio_atividade,
    logradouro,
    municipio,
    numero,
    razao_social,
  } = location.state;
  console.log(bairro, cnpj, "LOG");
  return (
    <div >
      <HeaderMain />
      <div class=' mt-5'>
        <h1 >Resultados</h1>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="fw-semibold">Bairro: </span>
            {bairro}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">CNPJ: </span>
            {cnpj}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">CEP: </span>
            {cep}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">Data Início de Atividade: </span>
            {data_inicio_atividade}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">Logradouro: </span>
            {logradouro}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">Município: </span>
            {municipio}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">Número: </span>
            {numero}
          </li>
          <li class="list-group-item">
            <span class="fw-semibold">Razão Social: </span>
            {razao_social}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DadosCnpj;
