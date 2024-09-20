const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  encontrarMaior,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar(10, 20)).toBe(30)
});

test("Soma dois números negativos corretamente", () => {
  expect(somar(-5, -20)).toBe(-25)
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(20, 5)).toBe(15)
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(20, -25)).toBe(-5)
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(5, 10)).toBe(50)
});

test("Multiplica número por zero", () => {
  expect(multiplicar(5, 0)).toBe(0)
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(20, 10)).toBe(2)
});

test("Lança erro ao dividir por zero", () => {
  expect(
    () => {
      dividir(2, 0)
    }
  ).toThrow("Erro");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(20)).toBe(true)
});

test("Verifica se o número é ímpar", () => {
  expect(ehPar(21)).toBe(false)
});

//Testes para a função encontrarMaior
test("Verifica A é maior que B", () => {
  expect(encontrarMaior(10, 1)).toBe(10)
});

test("Verifica B é maior que a", () => {
  expect(encontrarMaior(5, 50)).toBe(50)
});
