import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../UI/button/Button';
import Container from '../UI/container/Container';
import InputError from '../UI/inputError/InputError';
import css from './AddShopForm.module.css';

/* APRASYMAS

patekti galima tik prisijungus – router blocking/protectedRoute
Įsivaizduojame kad supildę formą skuriame parduotuvės įrašą ir siunčiame į back endą.
Šis puslapis turės meniu juostą (logotipas, shops, add-shop, logout nuorodos) bei 
formą, kurią užpildžius – išsiųs į firebase realtime database serverį (adresą rasite 
savo firebase konsolėje). Bet kokį atsaką, sėkmingą ar ne, atvaizduojame su atitinkamu
notificationu.

Formos laukai, validacijos: 

• shopName: input - (stringas, minimum 4 simboliai, privalomas laukas )
• town: input - (stringas, minimum 4 simboliai, privalomas laukas )
• startYear: input (skaicius, 4 simboliai, min 1970, max 2022, privalomas laukas)
• description: textarea - (stringas, mažiausiai 6 simboliai privalomas laukas)
• ImageUrl: input (stringas, min 5, privalomas)

Po kiekvienu lauku individualiai atvaizduojama klaida kuri neatitinka validacijos.

*/

function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      ImageUrl: '',
      tagsStringInput: '',
      tags: [],
      userId: 1,
      archived: false,
    },
    validationSchema: Yup.object().shape({
      shopName: Yup.string()
        .trim()
        .min(4, 'name is too short')
        .max(120)
        .required('required field'),
      town: Yup.string()
        .trim()
        .min(4, 'Town name is too short')
        .max(120)
        .required('required field'),
      startYear: Yup.string()
        .trim()
        .min(1970, 'Year must be after 1970')
        .max(2022)
        .required('required field'),
      description: Yup.string()
        .trim()
        .min(4, 'Description is too short')
        .required('required field'),
      ImageUrl: Yup.string()
        .trim()
        .min(4, 'Enter a valid url address')
        .required('required field'),
    }),

    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });
  return (
    <Container className={css.container}>
      <h2>Enter Your Shop Details Below</h2>
      <i></i>
      {/* <h3>
          debug <br /> email: {formik.values.email} <br />
          password: {formik.values.password}
        </h3> */}
      <form className={css.control} onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='shopName'>Shop name</label>
          <input
            label='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shopName}
            type='text'
            placeholder='Your Shop Name'
            name='shopName'
          />
          <InputError addShop formik={formik} field={'shopName'} />
        </div>
        <div>
          <label htmlFor='town'>Town</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
            type='text'
            placeholder='Town'
            name='town'
          />
          <InputError addShop formik={formik} field={'town'} />
        </div>
        <div>
          <label htmlFor='startYear'>Start Year</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
            type='text'
            placeholder='Year your company started'
            name='startYear'
          />
          <InputError addShop formik={formik} field={'startYear'} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder='Describe Your Shop'
            name='description'
          ></textarea>
          <InputError
            placeholder
            addShop
            formik={formik}
            field={'description'}
          />
        </div>
        <div>
          <label htmlFor='image'>Image</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ImageUrl}
            type='text'
            placeholder='Enter Your Image url address'
            name='ImageUrl'
          />

          <InputError addShop formik={formik} field={'ImageUrl'} />
        </div>

        {/*  */}
        <Button secondary>List Your Shop</Button>
        {/* <p>Forgot password?</p> */}
      </form>
    </Container>
  );
}
export default AddShopForm;
