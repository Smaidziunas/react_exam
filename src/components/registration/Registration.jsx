import css from './Registration.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from '../UI/inputError/InputError';
import Container from '../UI/container/Container';
import Button from '../UI/button/Button';
import { useHistory } from 'react-router-dom';

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
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
    onSubmit: (values) => {
      console.log('values ===', values);
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
      <form className={css.control} onSubmit={formik.handleSubmit}>
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
          <InputError formik={formik} field={'password'} />
        </div>
        <Button secondary>
          {props.register
            ? 'Create new account'
            : 'Login with existing account'}
        </Button>
        {/* <p>Forgot password?</p> */}
        <button>BACK TO LOGIN</button>
      </form>
    </Container>
  );
}
export default RegistrationForm;
