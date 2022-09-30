import React from 'react';
import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header = ({
  budget,
  setBudget,
  isValueBudget,
  setIsValueBudget,
  expenses,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValueBudget ? (
        <ControlPresupuesto budget={budget} expenses={expenses} />
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
