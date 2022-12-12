import { invoiceMock } from "../../__mocks__/invoiceMock";

describe("when i called the paymentMethod...", () => {
  it("id attribute are called", () => {
    expect(invoiceMock.id).toStrictEqual("123");
  });
  it("amount attribute are called", () => {
    expect(invoiceMock.amount).toStrictEqual(20);
  });

  it("createdAt attribute are called", () => {
    expect(invoiceMock.createdAt.toLocaleLowerCase()).toStrictEqual(
      "02/11/2022"
    );
  });
  it("updatedAt attribute are called", () => {
    expect(invoiceMock.updatedAt.toLocaleLowerCase()).toStrictEqual(
      new Date().toLocaleDateString("br-BR")
    );
  });
  it("expired attribute are called", () => {
    expect(invoiceMock.expired).toStrictEqual(false);
  });
});
