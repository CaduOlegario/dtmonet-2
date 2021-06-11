import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/style";
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }
  
  return (
    <TransactionProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}
