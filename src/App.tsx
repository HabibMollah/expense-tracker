import { useForm } from 'react-hook-form';
import Form from './Form';
import ExpenseList from './ExpenseList';

function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Form register={register} handleSubmit={handleSubmit} />
      <ExpenseList />
    </div>
  );
}

export default App;
