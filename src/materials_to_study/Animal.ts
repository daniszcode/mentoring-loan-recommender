export class Animal {
  nome: String;
  especie: String;
  classe: String;
  genero: String;

  constructor(nome: String, especie: String, classe: String, genero: String) {
    this.nome = nome;
    this.especie = especie;
    this.classe = classe;
    this.genero = genero;
  }

  emitirSom = (): void => {};
}
