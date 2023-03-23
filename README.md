Contrato da API POST para cadastro de novos Loans:

URL (endpoint): */api/loans*
Method: *POST*


```
Request Body:
{
  "id": "string",
  "type": "string",
  "tax": Double,
  "createdAt": "Date",
  "updatedAt": "Date",
  "paidAt": "Date",
  "installments": [
    {
      "number": "string",
      "dueDate": "Date",
      "value": Double,
    "amountToCharge": Double,
    "dueDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
    "status": "string",
    "paidAt": "Date" | "null";
   }],   "totalAmount": "Double"  }
```


Response Body:

```
{
  "id": "string",
  "type": "string",
  "tax": Double,
  "createdAt": "Date",
  "updatedAt": "Date",
  "paidAt": "Date",
  "installments": [
    {
      "number": "string",
      "dueDate": "Date",
      "value": Double,
    "amountToCharge": Double,
    "dueDate": "Date",
    "createdAt": "Date",
    "updatedAt": "Date",
    "status": "string",
    "paidAt": "Date" | null;
    }
  ],
  "totalAmount": Double
}
```


Status:

*201 Created: O Loan foi criado com sucesso.
400 Bad Request: O corpo da requisição é inválido ou está faltando algum campo obrigatório.
500 Internal Server Error: Ocorreu um erro interno no servidor.*

Mensagem de tratamento:

*201 Created: "Loan criado com sucesso."
400 Bad Request: "Erro ao criar Loan. Verifique se todos os campos obrigatórios foram preenchidos corretamente."
500 Internal Server Error: "Erro interno no servidor."*


Mapeamento dos possíveis status HTTP retornados:

*201 Created: Indica que o Loan foi criado com sucesso.
400 Bad Request: Indica que ocorreu um erro na validação dos dados enviados na requisição.
500 Internal Server Error: Indica que ocorreu um erro interno no servidor que impediu o processamento da requisição.*
