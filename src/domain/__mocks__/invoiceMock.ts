export const invoiceMock = {
  id: "123",
  type: "regular",
  amount: 20,
  createdAt: new Date(2022, 10, 2).toLocaleDateString("br-BR"),
  updatedAt: new Date().toLocaleDateString("br-BR"),
  expired: false,
  installments: [],
  loanId: "LOA-15E96D5B-A2CD-446A-AFB8-46B71A2EC98E",
  dueDate: new Date(2022, 9, 17),
};
