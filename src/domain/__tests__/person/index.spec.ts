import { Address, Person } from "../../Person";

describe("Testando os valores de retorno da classe Person", () => {
  const personAddress = new Address(
    "Rua dos alfeneiros, n° 4",
    "condado de surrey",
    "1234567",
    "Little Whinging",
    "Londres"
  );

  const newPerson = new Person(
    123,
    "Harry",
    12345678910,
    "harry@potter.com",
    new Date(1990, 4, 7),
    "casado",
    personAddress
  );

  test("Testando o atributo name da classe Person", () => {
    expect(newPerson.name).toBe("Harry");
  });
  test("Testando o atributo id da classe Person", () => {
    expect(newPerson.id).toBe(123);
  });
  test("Testando o atributo document da classe Person", () => {
    expect(newPerson.document).toBe(12345678910);
  });
  test("Testando o atributo email da classe Person", () => {
    expect(newPerson.email).toBe("harry@potter.com");
  });
  test("Testando o atributo civilState da classe Person", () => {
    expect(newPerson.civilState).toBe("casado");
  });
  test("Testando o atributo borndate da classe Person", () => {
    const data = new Date(1990, 4, 7);
    console.log(data.toLocaleDateString());
    expect(data.getMonth()).toBe(newPerson.bornDate.getMonth());
    expect(data.getFullYear()).toBe(newPerson.bornDate.getFullYear());
    expect(data.getDate()).toBe(newPerson.bornDate.getDate());
  });
});
