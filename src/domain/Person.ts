class Person {
  id: Number;
  name: String;
  document: Number;
  email: String;
  bornDate: Date;
  civilState: String;
  address: String;

  constructor(id, name, document, email, bornDate, civilState, address) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.bornDate = bornDate;
    this.civilState = civilState;
    this.address = address;
  }

  printPersonData = () =>
    `id: ${this.id} name: ${this.name} document: ${this.document} email: ${this.email} borndate: ${this.bornDate} civil state: ${this.civilState} adress: ${this.address} `;

  getDocument = () => `Documento: ${this.document}`;
}

const newPerson = new Person(
  123,
  "Luisa Mel",
  12345678,
  "luisa@gmail.com",
  "1985 - 01 - 01",
  "casada",
  "sitio do pica-pau amarelo, 13"
);

console.log(newPerson.printPersonData());
console.log(newPerson.getDocument());

class Address extends Person {
  street: String;
  complement: String;
  cep: Number;
  city: String;
  state: String;

  constructor(
    id,
    name,
    document,
    email,
    bornDate,
    civilState,
    address,
    street,
    complement,
    cep,
    city,
    state
  ) {
    super(id, name, document, email, bornDate, civilState, address);
    this.street = street;
    this.complement = complement;
    this.cep = cep;
    this.city = city;
    this.state = state;
  }
}
