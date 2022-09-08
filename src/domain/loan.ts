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
}
