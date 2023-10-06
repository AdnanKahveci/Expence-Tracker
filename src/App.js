import React from 'react';
import {Header} from './components/Header';

import './App.css';
import { Balence } from './components/Balence';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import  {AddTransaction}  from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>   
      <div className="container">
        <Balence/>
      </div>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
