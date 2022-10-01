import { useState } from 'react';
import { Header } from './components/Header';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import { NuevoGasto } from './assets/img';

export const App = () => {
  const [budget, setBudget] = useState('');
  const [isValueBudget, setIsValueBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  return (
    <div
      className={modal ? 'fixed' : ''}
      // style={
      //   modal
      //     ? {
      //         overflow: 'hidden',
      //         height: '100vh',
      //       }
      //     : null
      // }
    >
      <Header
        budget={budget}
        setBudget={setBudget}
        isValueBudget={isValueBudget}
        setIsValueBudget={setIsValueBudget}
        expenses={expenses}
      />
      {isValueBudget ? (
        <>
          <main>
            <ListadoGastos expenses={expenses} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={NuevoGasto.default}
              alt="IconNewExpense"
              onClick={handleAddExpense}
            />
          </div>
        </>
      ) : null}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          setExpenses={setExpenses}
          expenses={expenses}
        />
      )}
    </div>
  );
};
