import { useForm } from 'react-hook-form';
import Form from './Form';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Milk', amount: '5', category: 'Groceries' },
    { id: 2, description: 'Water', amount: '1', category: 'Groceries' },
    { id: 3, description: 'Radio', amount: '15', category: 'Entertainment' },
    { id: 4, description: 'Electric wire', amount: '3', category: 'Utilities' },
    { id: 5, description: 'TV', amount: '500', category: 'Entertainment' },
    { id: 6, description: 'Rice', amount: '8', category: 'Groceries' },
  ]);
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Form register={register} handleSubmit={handleSubmit} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
