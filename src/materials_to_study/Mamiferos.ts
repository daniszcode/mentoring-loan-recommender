import { Animal } from "./Animal";

export class Mamifero extends Animal {
  pelagem: string;

  constructor(
    nome: string,
    especie: string,
    classe: string,
    genero: string,
    pelagem: string
  ) {
    super(nome, especie, classe, genero);
    this.pelagem = pelagem;
  }
}

export class Cachorro extends Mamifero {
  raca: string;

  constructor(
    nome: string,
    especie: string,
    classe: string,
    genero: string,
    pelagem: string,
    raca: string
  ) {
    super(nome, especie, classe, genero, pelagem);
    this.raca = raca;
  }

  override emitirSom = (): void => {
    console.log("Au au au!");
  };
}
