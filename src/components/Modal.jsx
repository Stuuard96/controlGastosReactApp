import { useRef, useState } from 'react';
import { Mensaje } from './Mensaje';
import { generateId } from '../helpers';
import { CloseBtn } from '../assets/img';

const initialForm = {
  name: '',
  amount: '',
  category: '',
};

export const Modal = ({
  setModal,
  setAnimateModal,
  animateModal,
  setExpenses,
  expenses,
}) => {
  const [message, setMessage] = useState('');
  const [formExpenses, setFormExpenses] = useState(initialForm);
  const { name, amount, category } = formExpenses;

  const formSelected = useRef();
  const handleChangeExpenses = ({ target }) => {
    const { name, value } = target;
    setFormExpenses({
      ...formExpenses,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes('')) {
      setMessage('Todos los campos son obligatorios');
      setTimeout(() => {
        setMessage('');
      }, 3000);

      return;
    }

    formSelected.current.reset();
    formExpenses.id = generateId();
    formExpenses.date = Date.now();
    formExpenses.amount = Number(formExpenses.amount);
    setExpenses([...expenses, formExpenses]);
    setFormExpenses(initialForm);
    setMessage('');
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className={`cerrar-modal ${animateModal ? 'animarCloseBtn' : ''}`}>
        <img
          src={CloseBtn.default}
          alt="Close Button"
          onClick={closeModal}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <form
        ref={formSelected}
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          {message.length > 0 ? (
            <Mensaje className="error" type="error">
              {message}
            </Mensaje>
          ) : null}
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="nombre"
            name="name"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={name}
            onChange={handleChangeExpenses}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            name="amount"
            type="number"
            placeholder="Añade la cantidad del gasto: ej.300"
            value={amount}
            onChange={handleChangeExpenses}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            name="category"
            defaultValue={'DEFAULT'}
            onChange={handleChangeExpenses}
          >
            <option value="DEFAULT" disabled>
              -- Seleccione --
            </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Agregar Gasto" />
      </form>
    </div>
  );
};
