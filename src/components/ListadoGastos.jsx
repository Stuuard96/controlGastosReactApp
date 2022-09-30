import React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
      {expenses.map((expense) => (
        <Gasto key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
