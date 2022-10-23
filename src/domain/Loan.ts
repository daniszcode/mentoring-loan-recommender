type Double = number;

class Loan {
  id: string;
  type: string;
  tax: Double;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  installments: Installments[];
  totalAmount: Double;

  constructor(
    id,
    type,
    tax,
    createdAt,
    updatedAt,
    paidAt,
    installments,
    totalAmount
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
    totalAmount: number,
    quantityInstallments: number,
    tax: number
  ) => {
    const amount = (totalAmount / quantityInstallments) * tax;

    for (let i = 0; i < quantityInstallments; i++) {
      let installment = new Installments(
        "122" + i,
        i + 1,
        amount,
        new Date(2022, 4, 15),
        new Date(),
        new Date()
      );
      this.installments.push(installment);
    }
  };
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
    this.paidAt = null;
    this.status = "open";
  }

  public paidInstallment(): void {
    if (this.status !== "paid") {
      (this.status = "paid"), (this.paidAt = new Date());
    } else {
      `Parcela já está paga!`;
    }
  }
}

const dataLoan = new Loan(
  123,
  "emprestimo",
  10,
  new Date(2022, 4, 15),
  new Date(2022, 1, 7),
  new Date(2022, 1, 7),
  [],
  20
);
