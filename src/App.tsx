import Form from './Form';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

function App() {
  interface Expense {
    id: string;
    description: string;
    amount: number;
    category: string;
  }
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [filterCategory, setFilterCategory] = useState('');
  function onDelete(id: string) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold">💸MoneyMate</h1>
      </div>
      <Form expenses={expenses} setExpenses={setExpenses} />
      <ExpenseList
        expenses={expenses}
        onDelete={onDelete}
        filterCategory={filterCategory}
        setFilterCategory={(category: string) => setFilterCategory(category)}
      />
    </div>
  );
}

export default App;
