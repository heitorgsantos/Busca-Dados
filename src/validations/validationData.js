const validaEmail = (email) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!regex.test(email)) {
    // console.log('E-mail incorreto');
  }
  // console.log(email,' Logado')
  return regex.test(email);
};

const validaSenha = (senha) => {
  if (senha.length < 8) {
    return false;
  }
  // console.log(senha, ' Senha correta')
  return true;
};

module.exports = {
  validaEmail,
  validaSenha,
};
