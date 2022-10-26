import { Animal } from "./Animal";

export class Ave extends Animal {
  corPenas: string;
  tipoBico: string;
  voa: boolean;

  constructor(
    nome: string,
    especie: string,
    classe: string,
    genero: string,
    corPenas: string,
    tipoBico: string,
    voa: boolean
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

class Galinha extends Ave {
  constructor(
    nome: string,
    especie: string,
    classe: string,
    genero: string,
    corPenas: string,
    tipoBico: string,
    voa: boolean
  ) {
    super(nome, especie, classe, genero, corPenas, tipoBico, voa);
  }
  override emitirSom = (): void => {
    console.log("có-có-ri-có");
  };
}

const galinacea = new Galinha(
  "Galinha Rafinha",
  "Gallus gallus domesticus",
  "aves galiformes e fasianídeas",
  "Gallus",
  "Marrom e curtas",
  "bico pequeno",
  false
);

galinacea.voar();
galinacea.emitirSom();
