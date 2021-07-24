import React from "react";
import { useForm } from "react-hook-form";

const Content = ({
  currentStep,
  stepList,
  handleStatusChange,
  setAllContent,
  currentStatus,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAllContent(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-left flex flex-col items-center mt-10 my-16"
    >
      {currentStep === 1 && (
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide text-gray-200 font-bold mb-2">
            Business Owner?
          </label>
          <div className="relative">
            <select
              {...register("first", { required: true })}
              onChange={handleStatusChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {currentStep === stepList[stepList.length - 1] && (
        <button
          className="px-6 py-3 rounded-full bg-green-400 text-gray-800 font-semibold"
          type="submit"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default Content;
