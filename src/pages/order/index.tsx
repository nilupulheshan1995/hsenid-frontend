import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import FormBase from "../../components/forms/FormBase";

const Order: NextPage = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <FormBase
        handleSubmit={handleSubmit}
        init={{ name: "", description: "" }}
        formTitle="Place Order form"
        formElements={(isSubmitting: any) => (
          <Form>
            <div className="inputWrapper">
              <label>Category</label>
              <Field type="" name="categoryId" as="select">
                <option value="null">select category</option>
                {/* {loadCategories()} */}
              </Field>
            </div>

            <div className="inputWrapper">
              <label>Item Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>


            <div className="inputWrapper">
              <label>Item Quantity</label>
              <Field type="text" name="qty" />
              <ErrorMessage name="description" component="div" />
            </div>
            

            <button className="submitBtn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      ></FormBase>
    </div>
  );
};

export default Order;
