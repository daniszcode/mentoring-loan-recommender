type Double = number;

class Loan {
  id: string;
  type: string;
  tax: Double;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  installments: Installment[];
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
      let installment = new Installment(
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

class Installment {
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

  public payInstallment(): void {
    let status = this.status;

    if (status !== "paid") {
      (this.status = "paid"), (this.paidAt = new Date());
    } else {
      throw new Error(`Parcela já está paga!`);
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

const installment = new Installment(
  "12",
  123,
  10,
  new Date(2022, 4, 15),
  new Date(2022, 4, 15),
  new Date(2022, 4, 15)
);

class A {
  a() {
    console.log("sou declarada em A");
  }
}

class B {
  a() {
    console.log("sou declarada em B");
  }
}

class AB extends B {
  lendoB() {
    console.log(this.a());
  }
}

const res = new AB();
console.log(res.lendoB());
// console.log(installment.payInstallment());
// console.log(installment.status);
// console.log(installment.paidAt);
