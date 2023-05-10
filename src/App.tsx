import { useForm } from 'react-hook-form';

function App() {
  const { register } = useForm();
  console.log(register('name'));
  return (
    <div>
      {/* Form */}
      <div className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
        <form className="form-control">
          <div>
            <div>
              <label className="label" htmlFor="description">
                Description
              </label>
              <input
                {...register('description')}
                type="text"
                className="input-bordered input w-[100%]"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="label" htmlFor="amount">
                Amount
              </label>
              <input
                {...register('amount')}
                type="number"
                className="input-bordered input w-[100%]"
                name=""
                id="amount"
              />
            </div>
            <div>
              <label className="label" htmlFor="catagory">
                Catagory
              </label>
              <select
                className="select-bordered select block w-[100%] rounded-lg p-2 text-xl"
                name=""
                id="catagory">
                <option value="">Groceries</option>
                <option value="">Utilities</option>
                <option value="">Entertainment</option>
              </select>
            </div>
          </div>
          <button className="btn my-4 w-[100%]" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
