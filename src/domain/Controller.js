class Controller {
  constructor(loanService) {
    this.loanService = loanService;
  }

  async createLoan(req, res) {
    try {
      const {
        id,
        type,
        tax,
        createdAt,
        updatedAt,
        paidAt,
        installments,
        totalAmount,
      } = req.body;

      const loan = await this.loanService.createLoan(
        id,
        type,
        tax,
        createdAt,
        updatedAt,
        paidAt,
        installments,
        totalAmount
      );

      res.status(201).json(loan);
    } catch (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({
          message:
            "Erro ao criar Loan. Verifique se todos os campos obrigatórios foram preenchidos corretamente.",
        });
      } else {
        res.status(500).json({ message: "Erro interno no servidor." });
      }
    }
  }
}
