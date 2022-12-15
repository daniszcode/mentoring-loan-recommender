import { v4 } from "uuid";

enum PaymentType {
  "boleto",
  "pix",
}
export class PaymentMethod {
  id: string;
  type: PaymentType;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  expired: boolean;
  invoiceId: string;

  constructor(type: PaymentType, amount: number, invoiceId: string) {
    this.id = v4();
    this.amount = amount;
    this.createdAt = new Date();
    if (PaymentType.boleto) {
      this.expired = false;
    }
    this.invoiceId = invoiceId;
    this.type = type;
    this.updatedAt = new Date();
  }
}

const instancia1 = new PaymentMethod(PaymentType.boleto, 1212, "1234");

console.log(instancia1);
