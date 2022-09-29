import { Children, useState } from 'react';
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({ budget, setBudget, setIsValueBudget }) => {
  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();
    if (budget < 0 || isNaN(budget)) {
      setMessage('El presupuesto es incorrecto');
      setIsValueBudget(false);
      return;
    }
    setMessage('');
    setIsValueBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade un presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {message.length > 0 ? <Mensaje type="error">{message}</Mensaje> : null}
      </form>
    </div>
  );
};
