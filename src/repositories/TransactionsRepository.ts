import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactionRepository = await getRepository(Transaction);

    const transaction = await transactionRepository.find();

    const income = transaction.reduce(
      (balance, oneTransaction) =>
        balance +
        Number(oneTransaction.type === 'income' ? oneTransaction.value : 0),
      0,
    );

    const outcome = transaction.reduce(
      (balance, oneTransaction) =>
        balance +
        Number(oneTransaction.type === 'outcome' ? oneTransaction.value : 0),
      0,
    );

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
