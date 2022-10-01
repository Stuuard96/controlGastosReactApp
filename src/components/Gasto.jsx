import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formateDate } from '../helpers';
import { formatPrice } from '../helpers';
import { diccionaryIcons } from '../assets/img';

export const Gasto = ({ expense, setExpenseEdit, setExpenseDelete }) => {
  const { id, name, amount, category, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseEdit(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => setExpenseDelete(id)} destructive>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};
