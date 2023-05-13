import { IconContext } from 'react-icons';
import { RxCross2 } from 'react-icons/rx';
import { IoCloseSharp } from 'react-icons/io5';
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <div className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
      <div>
        <select id="filter" className="select-bordered select mt-8 w-[100%]">
          <option value="">All categories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <div className="my-4">
        <table className="table-compact table w-[100%] lg:table-normal">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td>
                    <button
                      onClick={() => onDelete(expense.id)}
                      className="p-1 text-lg text-red-300 hover:text-red-600">
                      <IconContext.Provider
                        value={{ style: { marginBottom: '-4px' } }}>
                        <IoCloseSharp />
                      </IconContext.Provider>
                    </button>
                    {expense.description}
                  </td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                {expenses.reduce((acc, expense) => acc + expense.amount, 0)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;
