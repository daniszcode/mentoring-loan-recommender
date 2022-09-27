type installments = Installments;
type Double = number;

class Loan {
  id: number;
  type: string;
  tax: Double;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  installments: Installments;
  totalAmount: Double;

  constructor(
    id: number,
    type: string,
    tax: Double,
    createdAt: Date,
    updatedAt: Date,
    paidAt: Date,
    installments: Installments,
    totalAmount: Double
  ) {
    this.id = id;
    this.type = type;
    this.tax = tax;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.paidAt = paidAt;
    this.installments = installments;
    this.totalAmount = totalAmount;
  }
  createInstallmentPlan = (
    totalAmount: Double,
    quantityInstallments: number,
    tax: Double
  ): number => (totalAmount / quantityInstallments) * tax;
}

class Installments {
  id: number;
  number: number;
  amountToCharge: Double;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  paidAt: Date | null;

  constructor(id, number, amountToCharge, dueDate, createdAt, updatedAt) {
    this.id = id;
    this.number = number;
    this.amountToCharge = amountToCharge;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = "open";
    this.paidAt = null;
  }

  paidInstallment = (): void => {
    if (this.status !== "paid") {
      (this.status = "Paid"), (this.paidAt = new Date());
    }
  };
}

const dataInstallments = new Installments(
  123,
  45,
  2000,
  new Date(2022, 4, 15),
  new Date(2022, 1, 7),
  new Date(2022, 1, 7),
  "paid"
);

const dataLoan = new Loan(
  123,
  "emprestimo",
  10,
  new Date(2022, 4, 15),
  new Date(2022, 1, 7),
  new Date(2022, 1, 7),
  dataInstallments,
  20
);

console.log(dataLoan.createInstallmentPlan(2, 5, 4));
console.log(dataInstallments.paidInstallment());
console.log(dataInstallments.paidAt);
console.log(dataInstallments.status);
