import { IconContext } from 'react-icons';
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
  filterCategory: string;
  setFilterCategory: (ctgry: string) => void;
}
function ExpenseList({
  expenses,
  onDelete,
  filterCategory,
  setFilterCategory,
}: Props) {
  if (expenses.length < 1)
    return <p className="my-16 text-center text-lg font-light">No items</p>;
  return (
    <div className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
      <div>
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          className="select-bordered select mt-8 w-[100%]">
          <option value="">All categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
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
            {filterCategory
              ? expenses
                  .filter((expense) => expense.category === filterCategory)
                  .map((expense) => {
                    return (
                      <tr key={expense.id}>
                        <td className="whitespace-pre-line break-all">
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
                  })
              : expenses.map((expense) => {
                  return (
                    <tr key={expense.id}>
                      <td className="whitespace-pre-line break-all">
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
