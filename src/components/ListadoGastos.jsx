import React from 'react';
import { Gasto } from './Gasto';

export const ListadoGastos = ({
  expenses,
  setExpenseEdit,
  setExpenseDelete,
  filter,
  expenseFilter,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter.length > 0 ? (
        <>
          <h2>
            {expenseFilter.length
              ? 'Gastos'
              : 'No hay Gastos en esta categoría'}
          </h2>
          {expenseFilter.map((expense) => (
            <Gasto
              key={expense.id}
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              setExpenseDelete={setExpenseDelete}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
          {expenses.map((expense) => (
            <Gasto
              key={expense.id}
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              setExpenseDelete={setExpenseDelete}
            />
          ))}
        </>
      )}
    </div>
  );
};
