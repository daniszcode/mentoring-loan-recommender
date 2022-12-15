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

  override locomoverSe = (): void => {
    console.log(
      "Assim como seus parentes pavões e faisões, as galinhas que encontramos em fazendas, sítios e granjas apresentam um “voo batido”: elas batem rapidamente as asas e se movimentam por até 10 metros, voltando rapidamente ao chão."
    );
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
