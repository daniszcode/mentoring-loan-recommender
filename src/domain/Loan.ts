type installments = [];
type Double = Number;

class Loan {
  id: String;
  type: String;
  tax: Double;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  installments: installments;
  totalAmount: Double;

  constructor(
    id,
    type,
    tax,
    createdAt,
    updateAt,
    paidAt,
    installments,
    totalAmount
  ) {
    this.id = id;
    this.type = type;
    this.tax = tax;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
    this.paidAt = paidAt;
    this.installments = installments;
    this.totalAmount = totalAmount;
  }
}

class Installments extends Loan {
  id: String;
  number: Number;
  amountToCharge: Double;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: String;

  constructor(
    type,
    tax,
    updateAt,
    paidAt,
    installments,
    totalAmount,
    id,
    number,
    amountToCharge,
    dueDate,
    createdAt,
    status
  ) {
    super(
      id,
      type,
      tax,
      createdAt,
      updateAt,
      paidAt,
      installments,
      totalAmount
    );
    this.id = id;
    this.number = number;
    this.amountToCharge = amountToCharge;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
    this.status = status;
  }

  createInstallmentPlan = (
    totalAmount: Double,
    quantityInstallments: Number,
    tax: Double
  ) => (Number(totalAmount) / Number(quantityInstallments)) * Number(tax);
}

const newLoanIns = new Installments(
  "emprestimo",
  10,
  "2000 - 01 - 01",
  "2000 - 01 - 01",
  5,
  20,
  123,
  456,
  52,
  20031,
  "2000 - 01 - 01",
  "paid"
);

console.log(newLoanIns.createInstallmentPlan(2, 5, 4));
