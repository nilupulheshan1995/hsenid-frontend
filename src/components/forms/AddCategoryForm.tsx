import { ErrorMessage, Field, Form } from "formik";
import { FunctionComponent } from "react";
import { addCategories } from "../../api/base-api";
import FormBase from "./FormBase";

interface AddCategoryFormProps {}

const AddCategoryForm: FunctionComponent<AddCategoryFormProps> = () => {
  
    const handleSubmit = (values: any) => {
        addCategories(values).then((res) => {
            alert(JSON.stringify(res,null,2))
        });
    };

  return (
    <FormBase
      handleSubmit={handleSubmit}
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
          <button className="submitBtn" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    ></FormBase>
  );
};

export default AddCategoryForm;
