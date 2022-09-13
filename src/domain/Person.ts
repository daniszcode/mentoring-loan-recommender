class Person {
  id: number;
  name: string;
  document: number;
  email: string;
  bornDate: Date;
  civilState: string;
  address: Address;

  constructor(
    id: number,
    name: string,
    document: number,
    email: string,
    bornDate: Date,
    civilState: string,
    address: Address
  ) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.bornDate = bornDate;
    this.civilState = civilState;
    this.address = address;
  }

  printPersonData = (
    id: number,
    name: string,
    document: number,
    email: string,
    bornDate: Date,
    civilState: string,
    street: string,
    complement: string,
    cep: string,
    city: string,
    state: string
  ) => {
    console.log(
      id,
      name,
      document,
      email,
      bornDate,
      civilState,
      street,
      complement,
      cep,
      city,
      state
    );
  };

  getDocument = () => {
    this.document;
  };
}

class Address {
  street: string;
  complement: string;
  cep: string;
  city: string;
  state: string;

  constructor(street, complement, cep, city, state) {
    this.street = street;
    this.complement = complement;
    this.cep = cep;
    this.city = city;
    this.state = state;
  }
}

const newPerson = new Person(
  123,
  "Harry",
  12345678910,
  "harry@potter.com",
  new Date(1990, 4, 7),
  "casado",
  Address
);

console.table(newPerson);

newPerson.printPersonData(
  123,
  "Harry",
  12345678910,
  "harry@potter.com",
  new Date(1990, 4, 7),
  "casado",
  "Rua dos alfeneiros, n° 4",
  "condado de surrey",
  "1234567",
  "Little Whinging",
  "Londres"
);

newPerson.getDocument();

exports.newPerson = newPerson;
