// Função que soma dois números
function somar(a, b) {
  return a + b
}

// Função que subtrai dois números
function subtrair(a, b) {
  if (a < 0) {
    return -a - (+b)
  }
  if (b < 0) {
    return a - (-b)
  }
  if (a < 0 && b < 0) {
    return -a - (-b)
  }
  return a - b
}
// Função que multiplica dois números
function multiplicar(a, b) {
  return a * b
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Erro")
  }
  return a / b
}

// Função que verifica se um número é par
function ehPar(a) {
  return a % 2 === 0
}

// Função que verifica se um número é maior que  outro
function encontrarMaior(a, b) {
  if (a > b) {
    return a
  } else if (b > a) {
    return b
  } else {
    throw new Error("Error")
  }
}


// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  encontrarMaior,
};
