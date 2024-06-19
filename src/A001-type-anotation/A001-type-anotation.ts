/* eslint-disable */
//Tipos basicos
let nome: string = 'Ancelmo'; //Qualquer tipo de string
let idade: number = 30; //Qualquer tipo de numero
let adulto: boolean = true //Tipo logico: true ou false
let symbol: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //bigint

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers1: number[] = [1, 2, 3, 4];
let arrayStrings: Array<string> = ['1', '2', '3'];

//Objetos (Type Anotation)
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 25,
  nome: 'Ancelmo'
};

//Funcoes
function soma(x: number, y: number): number {
  return x + y;
}

const soma1: (x: number, y: number) => number = (x, y) => x + y;
