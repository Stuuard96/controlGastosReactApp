import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header = ({
  budget,
  setBudget,
  isValueBudget,
  setIsValueBudget,
  expenses,
  setExpenses,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValueBudget ? (
        <ControlPresupuesto
          budget={budget}
          expenses={expenses}
          setExpenses={setExpenses}
          setBudget={setBudget}
          setIsValueBudget={setIsValueBudget}
        />
      ) : (
        <NuevoPresupuesto
          budget={budget}
          setBudget={setBudget}
          setIsValueBudget={setIsValueBudget}
        />
      )}
    </header>
  );
};
