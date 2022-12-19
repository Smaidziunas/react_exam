import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendRequest } from '../../helpers';
import { useAuthCtx } from '../../store/AuthContext';
import Button from '../UI/button/Button';
import Container from '../UI/container/Container';
import InputError from '../UI/inputError/InputError';
import css from './AddShopForm.module.css';

function AddShopForm(props) {
  const { uId, notifyShop } = useAuthCtx();
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      shopName: 'RANDOM SHOP',
      town: 'Kaunas',
      startYear: '1981',
      description: 'Basketball balls',
      ImageUrl: 'https://picsum.photos/200/300',
      userId: uId,
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
      startYear: Yup.number()
        .positive()
        .integer()
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
    // ==============================   FORMIK SUBMIT ==================================

    onSubmit: (values) => {
      values.userId = uId;
      const handleNewShop = async () => {
        const url = `${import.meta.env.VITE_REAL_DB_URL}/r-exam/shops.json`;

        const [ats, err] = await sendRequest(values, url);
        history.push('/shops');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        notifyShop();
      };
      handleNewShop();
    },
  });
  return (
    <Container className={css.container}>
      <h2>Enter Your Shop Details Below</h2>
      <i></i>

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
      </form>
    </Container>
  );
}
export default AddShopForm;
