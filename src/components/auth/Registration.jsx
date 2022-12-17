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
/* APRASYMAS
Register puslapis
Šis puslapis turės meniu juostą (logotipas, login ir register nuorodos), 
formą su el. 
paštu ir slaptažodžiu – įvedus kreipiasi į firebase serverį. 

Sėkminga ar nesėkminga registracija išmeta notificationą (įskaičiuoti visus įmanomus 
error handlingus).

Formoje validuojam: 
• Email: (stringas, email tipo, privalomas laukas )
• Password: (stringas, mažiausiai 6 simboliai privalomas laukas)
Siunčiamas objektas I back { email: ‘’, password: ‘’ }

*/

function RegistrationForm(props) {
  // IMPORTING CONTEXT
  const { login, isUserLoggedIn } = useAuthCtx();

  //  ============== User Log in State =============
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  // //
  // const handleLogout = () => {
  //   setIsUserLoggedIn((prevState) => !prevState);
  // };
  // ==========================================

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
      password: Yup.string().min(4).max(20).required(),
    }),
    // ==============================  ON FORMIK SUBMIT ===========================================
    onSubmit: async (values) => {
      console.log('values ===', values);

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
            default:
              break;
          }
        };
        formik.setErrors({
          email: emailErrorValidation(),
          password: postError.error.message.includes(':')
            ? postError.error.message.split(':')[1]
            : postError.error.message,
        });
        // ==========================
        return;
      }
      // jeigu nera klaidu:    ===============  ON SUCESSFUL SUBMIT ====================================
      console.log('sendResult ===', sendResult);
      history.push('/shops');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      login(sendResult);
    },
  });

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
      {/* <h3>
        debug <br /> email: {formik.values.email} <br />
        password: {formik.values.password}
      </h3> */}
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
        <Button secondary>
          {props.register
            ? 'Create new account'
            : 'Login with existing account'}
        </Button>
        {/* <p>Forgot password?</p> */}
        <button type='button' onClick={() => console.log('clicked')}>
          {/* {isUserLoggedIn
            ? 'Create new account'
            : 'Login with existing account'} */}
        </button>
      </form>
    </Container>
  );
}
export default RegistrationForm;
