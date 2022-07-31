import { ErrorMessage, Field, Form } from "formik";
import { FunctionComponent } from "react";
import FormBase from "./FormBase";

interface AddCategoryFormProps {}

const AddCategoryForm: FunctionComponent<AddCategoryFormProps> = () => {
  return (
    <FormBase
      init={{ name: "", description: "" }}
      formTitle="Add Category form"
      formElements={(isSubmitting: any) => (
        <Form>
          <div className="w-1/3 flex justify-between">
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className="w-1/3 flex justify-between">
            <label>Description</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    ></FormBase>
  );
};

export default AddCategoryForm;
