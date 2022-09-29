export const ControlPresupuesto = ({ budget }) => {
  const formatBudget = (budget) => {
    return budget.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatBudget(budget)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatBudget(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatBudget(0)}
        </p>
      </div>
    </div>
  );
};
