function ExpenseList() {
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
        <table className="table-c table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Milk</td>
              <td>5</td>
              <td>Groceries</td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>5</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;
