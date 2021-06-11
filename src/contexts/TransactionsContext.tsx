import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = {
  title: string;
  amount: number;
  type: string;
  category: string;
}

type TransactionProviderProps = {
  children: ReactNode;
}

type TransctionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransctionsContextData>(
  {} as TransctionsContextData
)

export function TransactionProvider ({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions))
      .catch(err => console.error(err))
  }, [])

  async function createTransaction(transaction: TransactionInput) {
    await api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionContext.Provider>
  )
} 