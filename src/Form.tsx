import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dispatch } from 'react';

const schema = z.object({
  description: z
    .string()
    .min(2, { message: 'Description must be 2 characters at least' })
    .max(20, { message: "Description can't be more than 20 characters" }),
  amount: z
    .number({ invalid_type_error: 'Amount required' })
    .min(0.01)
    .max(100_000),
  category: z.enum(['Groceries', 'Utilities', 'Entertainment'], {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  setExpenses: Dispatch<React.SetStateAction<Expense[]>>;
}

function Form({ expenses, setExpenses }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
      <form
        className="form-control"
        onSubmit={handleSubmit((data) => {
          setExpenses([...expenses, { ...data, id: crypto.randomUUID() }]);
        })}>
        <div>
          <div>
            <label className="label" htmlFor="description">
              Description
            </label>
            <input
              {...register('description')}
              type="text"
              className="input-bordered input w-[100%]"
              id="description"
              placeholder="e.g. Milk"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <input
              {...register('amount', { valueAsNumber: true })}
              type="number"
              step="any"
              className="input-bordered input w-[100%]"
              id="amount"
              placeholder="$0.01 - $100,000"
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>
          <div>
            <label className="label" htmlFor="category">
              Category
            </label>
            <select
              {...register('category')}
              className="select-bordered select block w-[100%] rounded-lg p-2"
              id="category">
              <option value=""></option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>
        <button className="btn my-4 w-[100%]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
