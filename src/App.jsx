import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import { NuevoGasto } from './assets/img';
import { Filtros } from './components/Filtros';

export const App = () => {
  const [budget, setBudget] = useState('');
  const [isValueBudget, setIsValueBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [expenseDelete, setExpenseDelete] = useState('');
  const [filter, setFilter] = useState('');
  const [expenseFilter, setExpenseFilter] = useState([]);

  let getBudgetLocalStorage = localStorage.getItem('budget')
    ? Number(localStorage.getItem('budget'))
    : '';
  let getExpensesLocalStorage =
    JSON.parse(localStorage.getItem('expenses')) ?? [];

  useEffect(() => {
    setBudget(getBudgetLocalStorage);
    setExpenses(getExpensesLocalStorage);
    getBudgetLocalStorage > 0 && setIsValueBudget(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? '');
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit]);

  useEffect(() => {
    if (expenseDelete.length > 0) {
      const newExpenses = expenses.filter(
        (expense) => expense.id !== expenseDelete
      );
      setExpenses(newExpenses);
      setExpenseDelete('');
    }
  }, [expenseDelete]);

  useEffect(() => {
    if (filter.length > 0) {
      const expensesFilter = expenses.filter(
        (expense) => expense.category === filter
      );
      setExpenseFilter(expensesFilter);
    }
  }, [filter]);

  const handleAddExpense = () => {
    setModal(true);
    setExpenseEdit({});
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
            <Filtros filter={filter} setFilter={setFilter} />
            <ListadoGastos
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              setExpenseDelete={setExpenseDelete}
              filter={filter}
              expenseFilter={expenseFilter}
            />
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
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          setExpenses={setExpenses}
          expenses={expenses}
        />
      )}
    </div>
  );
};
