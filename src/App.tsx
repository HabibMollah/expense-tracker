import Form from './Form';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Milk', amount: 5, category: 'Groceries' },
    { id: 2, description: 'Water', amount: 1, category: 'Groceries' },
    { id: 3, description: 'Radio', amount: 15, category: 'Entertainment' },
    { id: 4, description: 'Electric wire', amount: 3, category: 'Utilities' },
    { id: 5, description: 'TV', amount: 500, category: 'Entertainment' },
    { id: 6, description: 'Rice', amount: 8, category: 'Groceries' },
  ]);

  const [filterCategory, setFilterCategory] = useState('');
  function onDelete(id: number) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }
  return (
    <div>
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={onDelete}
        filterCategory={filterCategory}
        setFilterCategory={(ctgry: string) => setFilterCategory(ctgry)}
      />
    </div>
  );
}

export default App;
