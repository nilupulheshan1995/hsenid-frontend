import { FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormBaseProps {
    formElements:Function;
    formTitle:string;
    init:any;
    handleSubmit?:Function;
}

const FormBase: FunctionComponent<FormBaseProps> = (props) => {
  return (
    <div>
      <h1 className="text-stone-600 text-xl font-semibold">{props.formTitle}</h1>
      <Formik
        initialValues={props.init}
        onSubmit={(values, { setSubmitting }) => {
          if(props.handleSubmit)
            props.handleSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting,values }) => {return props.formElements(isSubmitting,values)}}
      </Formik>
    </div>
  );
};

export default FormBase;
