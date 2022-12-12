import { Invoice } from "../../Invoice";
import { PaymentMethod } from "../../PaymentMethod";
import { invoiceMock } from "../../__mocks__/invoiceMock";
describe("when i called the invoice...", () => {
  it("id attribute are called", () => {
    expect(invoiceMock.id).toStrictEqual("123");
  });

  it("type attribute are called", () => {
    expect(invoiceMock.type).toBe("regular");
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
    expect(invoiceMock.updatedAt.toLocaleLowerCase()).toEqual(
      new Date().toLocaleDateString("br-BR")
    );
  });
  it("expired attribute are called", () => {
    expect(invoiceMock.expired).toStrictEqual(false);
  });
  it("installments attribute are called", () => {
    expect(invoiceMock.installments).toStrictEqual([]);
  });
  it("loanId attribute are called", () => {
    expect(invoiceMock.loanId).toStrictEqual(
      "LOA-15E96D5B-A2CD-446A-AFB8-46B71A2EC98E"
    );
  });

  it("dueDate attribute are called", () => {
    expect(invoiceMock.dueDate.toLocaleDateString()).toStrictEqual(
      "10/17/2022"
    );
  });
  it("custom methods are called", () => {
    enum PaymentType {
      "boleto",
      "pix",
    }

    const getterMethodMock = jest
      .spyOn(Invoice.prototype, "checkIfExpired")
      .mockImplementation(() => false);

    const instanceOfInvoice = new Invoice(
      "123",
      "regular",
      20,
      new Date(2022, 10, 2).toLocaleDateString("br-BR"),
      new Date().toLocaleDateString("br-BR"),
      [],
      "LOA45645645",
      new Date(2022, 9, 17),
      new PaymentMethod(PaymentType.boleto, 1212, "1234")
    );

    instanceOfInvoice.checkIfExpired();
    expect(getterMethodMock).toHaveBeenCalled();
  });
});
