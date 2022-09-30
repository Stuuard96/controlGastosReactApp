import { formateDate } from '../helpers';
import { diccionaryIcons } from '../assets/img';
import { formatPrice } from '../helpers';

export const Gasto = ({ expense }) => {
  const { name, amount, category, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionaryIcons[category]} alt="Imagen categoria" />
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{formateDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">{formatPrice(amount)}</p>
    </div>
  );
};
