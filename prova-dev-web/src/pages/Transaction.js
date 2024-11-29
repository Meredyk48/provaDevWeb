import React from 'react';
import ListaComponent from '../components/ListaComponent';


const Transaction = () => {
  return (
    <div>
      <h1>Transações</h1>
      <div className="lista">
      <ListaComponent />
      </div>
    </div>
  );
};

export default Transaction;