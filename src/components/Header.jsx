import React from 'react';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <NuevoPresupuesto budget={budget} setBudget={setBudget} />
    </header>
  );
};
