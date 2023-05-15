import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
function Form({ register, handleSubmit }: Props) {
  return (
    <div className="mx-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
      <form
        className="form-control"
        onSubmit={handleSubmit((data) => console.log(data))}>
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
              id="amount"
            />
          </div>
          <div>
            <label className="label" htmlFor="category">
              Category
            </label>
            <select
              className="select-bordered select block w-[100%] rounded-lg p-2 text-xl"
              id="category">
              <option value="groceries">Groceries</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
            </select>
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
