import { Animal } from "./Animal";
export class Mamifero extends Animal {
  pelagem: String;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    pelagem: String
  ) {
    super(nome, especie, classe, genero);
    this.pelagem = pelagem;
  }
}

export class Cachorro extends Mamifero {
  raca: String;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    pelagem: String,
    raca: String
  ) {
    super(nome, especie, classe, genero, pelagem);
    this.raca = raca;
  }

  override emitirSom = (): void => {
    console.log("Au au au!");
  };
}
