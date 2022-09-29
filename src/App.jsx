import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValueBudget, setIsValueBudget] = useState(false);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValueBudget={isValueBudget}
        setIsValueBudget={setIsValueBudget}
      />
    </div>
  );
};
