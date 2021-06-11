import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg'
import OutComeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionContext } from '../../contexts/TransactionsContext';

import { Container } from "./style";

export function Summary () {

  const { transactions } = useContext(TransactionContext);
  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutComeImg} alt="Saídas" />
        </header>
        <strong>-R$200,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$8000,00</strong>
      </div>
    </Container>
  )
}