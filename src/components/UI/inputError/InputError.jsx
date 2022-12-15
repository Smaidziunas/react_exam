import { FormikConsumer, useFormik } from 'formik';
import css from './InputError.module.css';
import * as Yup from 'yup';

function InputError(props) {
  if (props.field && props.formik) {
    return <p className={css.message}>{props.formik.errors[props.field]}</p>;
  } else {
    return <p></p>;
  }
}
export default InputError;
