import { ErrorMessage, Field, Form } from "formik";
import { Router, useRouter } from "next/router";
import { FunctionComponent } from "react";
import FormBase from "./FormBase";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const router = useRouter();

  const handleSubmit = (values:any) => {
    router.push('/dashboard');
    
  };

  return (
    <>
      <div className="w-1/4">
        <FormBase
          handleSubmit={handleSubmit}
          init={{ name: "", description: "" }}
          formTitle="Add Item form"
          formElements={(isSubmitting: any) => (
            <Form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <Field
                  type="text"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your password
                </label>
                <Field
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <Field
                    name="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default Login;
