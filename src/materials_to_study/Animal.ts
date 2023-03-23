export class Animal {
  nome: string;
  especie: string;
  classe: string;
  genero: string;

  constructor(nome: string, especie: string, classe: string, genero: string) {
    this.nome = nome;
    this.especie = especie;
    this.classe = classe;
    this.genero = genero;
  }

  emitirSom = (): void => {};
  locomoverSe = (): void => {};
}
