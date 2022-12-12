import { PaymentMethod } from "./PaymentMethod";

var moment = require("moment"); // require
moment().format();

export class Invoice {
  id: string;
  type: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  expired: boolean;
  installments: string[];
  loanId: string;
  dueDate: Date;
  paymentMethod: PaymentMethod;

  constructor(
    id,
    type,
    amount,
    createdAt,
    updatedAt,
    installments,
    loanId,
    dueDate,
    paymentMethod
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.installments = installments;
    this.loanId = loanId;
    this.dueDate = dueDate;
    this.paymentMethod = paymentMethod;
  }
  checkIfExpired() {
    const currentDay = new Date().toLocaleDateString("br-BR");
    return moment(currentDay).isBefore(this.dueDate)
      ? (this.expired = false)
      : (this.expired = true);
  }
}

const invoice_1 = new Invoice(
  "123",
  "regular",
  20,
  new Date(2022, 10, 2).toLocaleDateString("br-BR"),
  new Date().toLocaleDateString("br-BR"),
  [],
  "LOA45645645",
  new Date(2022, 9, 17),
  new PaymentMethod(
    "LOA45645645",
    [],
    20,
    new Date(2022, 10, 2).toLocaleDateString("br-BR"),
    new Date().toLocaleDateString("br-BR"),
    true,
    "123"
  )
);

console.log(invoice_1.checkIfExpired());
console.log(invoice_1.expired);
console.log(invoice_1.expired);
