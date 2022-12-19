import { FormikConsumer, useFormik } from 'formik';
import css from './InputError.module.css';
import * as Yup from 'yup';

function InputError(props) {
  const addShop = props.addShop ? css.addingShop : '';
  const plchldr = props.placeholder ? css.placeholder : '';
  if (props.field && props.formik) {
    return (
      <p className={`${css.message} ${addShop} ${plchldr}`}>
        {props.formik.errors[props.field]}
      </p>
    );
  } else {
    return <p></p>;
  }
}
export default InputError;
