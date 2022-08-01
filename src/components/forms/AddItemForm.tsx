import * as React from 'react';
import { ErrorMessage, Field, Form } from "formik";
import { FunctionComponent } from "react";
import { addItem, GET_ALL_CATEGORIES_API } from "../../api/base-api";
import useFetch from "../../hooks/useFetchHook";
import FormBase from "./FormBase";

interface AddItemFormProps {}

const AddItemForm: FunctionComponent<AddItemFormProps> = () => {
  const { data, error } = useFetch<any[]>(GET_ALL_CATEGORIES_API);

  const loadCategories = () => {
    if (!!data && Array.isArray(data)) {
      return data.map((opt) => (
        <Field as="option" key={opt.categoryId} value={opt.categoryId}>
          {opt.name}
        </Field>
      ));
    }
  };

  const handleSubmit = (value:any) => { 
    value = {...value,categoryId:Number(value.categoryId)}
    addItem(value).then((res) => {
      alert(JSON.stringify(res,null,2));
    })
  }

  return (
    <FormBase
      handleSubmit={handleSubmit}
      init={{ name: "", description: "" }}
      formTitle="Add Item form"
      formElements={(isSubmitting: any) => (
        <Form>
          <div className="inputWrapper">
            <label>Item Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Item Description</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Unit Price</label>
            <Field type="number" name="unitPrice" />
            <ErrorMessage name="unitPrice" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Available Stock</label>
            <Field type="number" name="avStock" />
            <ErrorMessage name="avStock" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Unit Cost</label>
            <Field type="number" name="unitCost" />
            <ErrorMessage name="unitCost" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Pre-Order Margin</label>
            <Field type="number" name="preOrderMargin" />
            <ErrorMessage name="preOrderMargin" component="div" />
          </div>
          <div className="inputWrapper">
            <label>Category</label>
            <Field type="" name="categoryId" as="select" >
              <Field value="null" as="option">select category</Field>
              {loadCategories()}
            </Field>
          </div>

          <button className='submitBtn' type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    ></FormBase>
  );
};

export default AddItemForm;
