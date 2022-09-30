import { useEffect, useState } from 'react';
import { formatPrice } from '../helpers';

export const ControlPresupuesto = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalExpense = expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    const totalAvailable = budget - totalExpense;
    setAvailable(totalAvailable);
    setSpent(totalExpense);
  }, [expenses]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatPrice(budget)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatPrice(available)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatPrice(spent)}
        </p>
      </div>
    </div>
  );
};
