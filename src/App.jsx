import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} />
    </div>
  );
};
