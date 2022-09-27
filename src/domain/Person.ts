export class Person {
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

  printPersonData = () => {
    console.log(
      this.id,
      this.name,
      this.document,
      this.email,
      this.bornDate,
      this.civilState,
      this.address.street,
      this.address.complement,
      this.address.cep,
      this.address.city,
      this.address.state
    );
  };

  getDocument = () => {
    this.document;
  };
}

export class Address {
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
