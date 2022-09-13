let { newPerson } = require("../../domain/Person");

test("test data response", () => {
  console.log(
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
    )
  );
  expect("address": [Function Address], "bornDate": 1990-05-07T03:00:00.000Z, "civilState": "casado", "document": 12345678910, "email": "harry@potter.com", "getDocument": [Function getDocument], "id": 123, "name": "Harry", "printPersonData": [Function printPersonData]).toBe(
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
    )
  );
});
