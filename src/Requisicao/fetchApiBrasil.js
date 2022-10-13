import searchApi  from "../Requisicao/baseURL";
const fetchApiBrasil = async (cnpj) => {
  const request = searchApi
    .get(`api/cnpj/v1/${cnpj}`)
    .then((resp) => resp.data);
  return request;
};

export default fetchApiBrasil ;
