const Person = require("../../domain/Person").Person;
const personAddress = require("../../domain/Person");

describe("Testando os valores de retorno da classe Person", () => {
  const newPerson = new Person(
    123,
    "Harry",
    12345678910,
    "harry@potter.com",
    new Date(1990, 4, 7),
    "casado",
    personAddress
  );

  test("Testando o modulo name da classe Person", () => {
    expect(newPerson.name).toBe("Harry");
  });
  test("Testando o modulo id da classe Person", () => {
    expect(newPerson.id).toBe(123);
  });
  test("Testando o modulo document da classe Person", () => {
    expect(newPerson.document).toBe(12345678910);
  });
  test("Testando o modulo email da classe Person", () => {
    expect(newPerson.email).toBe("harry@potter.com");
  });
  test("Testando o modulo civilState da classe Person", () => {
    expect(newPerson.civilState).toBe("casado");
  });
  test("Testando o modulo borndate da classe Person", () => {
    expect(Date(1990, 4, 7)).toBe(newPerson.bornDate);
  });
});
