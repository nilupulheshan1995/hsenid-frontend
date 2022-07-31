import { FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormBaseProps {
    formElements:Function;
    formTitle:string;
    init:any
}

const FormBase: FunctionComponent<FormBaseProps> = (props) => {
  return (
    <div>
      <h1 className="text-stone-600 text-xl font-semibold">{props.formTitle}</h1>
      <Formik
        initialValues={props.init}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => {return props.formElements(isSubmitting)}}
      </Formik>
    </div>
  );
};

export default FormBase;
