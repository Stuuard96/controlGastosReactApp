import { useEffect, useState } from 'react';
import { formatPrice } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Calculate expenses
    const totalExpense = expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    // Calculate available
    const totalAvailable = budget - totalExpense;
    // Calculate percentage
    const newPercentage =
      budget > 0 ? ((totalExpense / budget) * 100).toFixed(2) : 0;

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);

    setAvailable(totalAvailable);
    setSpent(totalExpense);
  }, [expenses]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Gastado`}
          styles={buildStyles({
            pathColor: '#3b82f6',
            textColor: '#3b82f6',
            pathTransitionDuration: 2,
            trailColor: '#f5f5f5',
            backgroundColor: '#3e98c7',
          })}
        />
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
