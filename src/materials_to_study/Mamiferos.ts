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

  override locomoverSe = (): void => {
    console.log(
      "os cães são quadrúpedes, o que quer dizer que se locomovem apoiando-se nas patas dianteiras e traseiras. Mais precisamente, eles se apoiam na pontinha das patas, já que os cães são digitígrados."
    );
  };
}
