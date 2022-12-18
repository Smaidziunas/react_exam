import css from './Registration.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from '../UI/inputError/InputError';
import Container from '../UI/container/Container';
import Button from '../UI/button/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuthCtx } from '../../store/AuthContext';
import { sendRequest } from '../../helpers';
import toast, { Toaster } from 'react-hot-toast';

function RegistrationForm(props) {
  // IMPORTING CONTEXT
  const { login, isUserLoggedIn, loadingState, changeLoadingState } =
    useAuthCtx();

  const successNotif = () => toast(fn);

  const fn = () => {
    if (props.register) {
      return 'welcome on board!';
    }
    if (props.login) {
      return 'welcome back!';
    }
  };

  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '123456',
      tagsStringInput: '',
      tags: [],
      userId: 1,
      archived: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .trim()
        .min(4, 'entered email is too short')
        .max(120)
        .required('required field'),
      password: Yup.string().min(6).max(20).required(),
    }),
    // ==============================  ON FORMIK SUBMIT ===========================================
    onSubmit: async (values) => {
      // console.log('loadingState ===', loadingState);
      // changeLoadingState();

      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_API_KEY
      }`;

      let isUserLoggedIn = true;
      if (isUserLoggedIn)
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_API_KEY
        }`;
      // FOR SIGN UP let url =
      //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';
      // FOR LOGIN  let url =
      //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]';

      const [sendResult, postError] = await sendRequest(values, url);
      // sendRequest(whatToSend, url);
      // jeigu turim klaidu:
      if (postError) {
        console.log('postError ===', postError);
        // FORMIK ERRORS <<<<BE>>>>:
        const emailErrorValidation = () => {
          switch (postError.error.message) {
            case 'INVALID_EMAIL':
              return 'invalid email';
            case 'EMAIL_EXISTS':
              return 'such user already exist';
            case 'EMAIL_NOT_FOUND':
              return 'User does not exist, please Sign Up';
            default:
              break;
          }
        };
        const passwordErrorValidation = () => {
          switch (postError.error.message) {
            case 'EMAIL_NOT_FOUND':
              return '';
            case 'INVALID_PASSWORD':
              return 'Wrong Password';
            default:
              return split();
          }
          function split() {
            if (postError.error.message.includes(':')) {
              return postError.error.message.split(':')[1];
            } else {
              return postError.error.message;
            }
          }
        };
        formik.setErrors({
          email: emailErrorValidation(),
          password: passwordErrorValidation(),
        });
        // ==========================
        return;
      }
      // jeigu nera klaidu:    ===============  ON SUCESSFUL SUBMIT ====================================
      // console.log('sendResult ===', sendResult);

      history.push('/shops');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      login(sendResult);
      // const successNotif = () => toast(fn);
      // successNotif();
    },
  });

  // changeLoadingState();
  // console.log('loadingState ===', loadingState);

  return (
    <Container className={css.container}>
      {props.register ? <h2>Register</h2> : <h2>Log in</h2>}
      <i></i>
      {props.register && (
        <p className={css.notAMember}>
          Already a member?{' '}
          <span
            className={css.toLogin}
            onClick={() => {
              history.push('/login');
            }}
          >
            Login Here
          </span>
        </p>
      )}

      <form
        className={css.control}
        onSubmit={formik.handleSubmit}
        // autoComplete='off'
      >
        <div>
          <label htmlFor='Email'>Email</label>
          <input
            label='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email'
            placeholder='Enter Your Email Address'
            name='email'
          />
          <InputError formik={formik} field={'email'} />
        </div>
        <div>
          <label htmlFor='Password'>Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            placeholder={
              props.register ? 'Create Password' : 'Enter Your Password'
            }
            name='password'
          />
          {/* // FORMIK ERRORS <<<<FE>>>> */}
          <InputError formik={formik} field={'password'} />
        </div>

        <Button onClick={successNotif} secondary>
          {props.register
            ? 'Create new account'
            : 'Login with existing account'}
        </Button>
      </form>
    </Container>
  );
}
export default RegistrationForm;
