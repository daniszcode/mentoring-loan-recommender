import { Animal } from "./Animal";

export class Ave extends Animal {
  corPenas: String;
  tipoBico: String;
  voa: Boolean;

  constructor(
    nome: String,
    especie: String,
    classe: String,
    genero: String,
    corPenas: String,
    tipoBico: String,
    voa: Boolean
  ) {
    super(nome, especie, classe, genero);
    this.corPenas = corPenas;
    this.tipoBico = tipoBico;
    this.voa = voa;
  }

  voar = (): void => {
    if (this.voa) {
      console.log("Voando");
    } else {
      console.log("Esta espécie de ave não voa");
    }
  };
}
