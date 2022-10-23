type Double = number;

export class Invoice {
  id: string;
  type: string;
  amount: Double;
  createdAt: Date;
  updatedAt: Date;
  expired: boolean;
  installments: string[];
  loanId: string;
  dueDate: Date;

  constructor(
    id,
    type,
    amount,
    createdAt,
    updatedAt,
    expired,
    installments,
    loanId,
    dueDate
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expired = expired;
    this.installments = installments;
    this.loanId = loanId;
    this.dueDate = dueDate;
  }

  checkIfExpired() {
    const currentDay = new Date().toLocaleDateString("br-BR");
    return this.dueDate.toLocaleDateString("br-BR") === currentDay
      ? (this.expired = true)
      : (this.expired = false);
  }
}

const invoice_1 = new Invoice(
  "123",
  "regular",
  20,
  new Date(2022, 10, 2).toLocaleDateString("br-BR"),
  new Date().toLocaleDateString("br-BR"),
  false,
  [],
  "LOA45645645",
  new Date(2022, 9, 17)
);
