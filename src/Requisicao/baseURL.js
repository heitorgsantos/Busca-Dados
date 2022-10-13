import axios from'axios'

const searchApi = axios.create({
    baseURL: 'https://brasilapi.com.br/',
  });
  // https://brasilapi.com.br/api/cnpj/v1/{cnpj}
  
export default searchApi;