import React, {useEffect, useCallback} from "react";
import {
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import { useFormik } from 'formik';
import useTranslation from "next-translate/useTranslation";
import { useHistory } from 'react-router-dom'
import validationsForm from './validationSchema'
import MyFieldInput from "../UI/MyFieldInput/MyFieldInput";
import classes from './Form.module.scss'



const Form = () => {
  const { t } = useTranslation()
  const router = useHistory()
  const optionsClass = [
    {value: "5", label: "5"},
    {value: "6", label: "6"},
    {value: "7", label: "7"},
    {value: "8", label: "8"},
    {value: "9", label: "9"},
    {value: "10", label: "10"},
    {value: "11", label: "11"},
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      selectClass: '',
    },
    validationSchema: validationsForm,
    onSubmit: (values, {resetForm}) => {
      // sendMessageTotelegram(`Ім'я: ${values.name}, телефон: ${values.phone}, клас: ${values.selectClass}`)
      setTimeout(() => {
        sessionStorage.setItem('userName', values.name)
        resetForm()
        router.push('/thanks');
        window.location.reload()
      }, 1000)
    },
  });

  const handleSubmit = useCallback(() => {
    formik.handleSubmit();
  }, [formik]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [handleSubmit]);

  const myError = formik.errors.name || formik.errors.phone ||  formik.errors.selectClass || !formik.values.name

  return (
    <form className={classes.Form}>
      <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1000">
        <MyFieldInput  
          id="name" 
          label={t('common:form.name')} 
          value={formik.values.name} 
          onChange={formik.handleChange} 
          touched={formik.touched.name}
          error={formik.errors.name}
        />
      </div>
      <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1300">
        <MyFieldInput 
          id="phone" 
          label={t('common:form.phone')} 
          value={formik.values.phone}  
          onChange={formik.handleChange}
          touched={formik.touched.phone}
          error={formik.errors.phone}
          placeholder='0672345678'
          inputProps={{
            inputMode: 'numeric',
          }}
        />
      </div>
      <div className={classes.TextField} data-aos="fade-up" data-aos-duration="1600">
        <MyFieldInput 
          id="selectClass" 
          label={t('common:form.class')} 
          value={formik.values.selectClass}  
          onChange={formik.handleChange("selectClass")}
          touched={formik.touched.selectClass}
          error={formik.errors.selectClass}
          SelectProps={{ MenuProps: { disableScrollLock: true } }}
          select
        >
          {optionsClass.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MyFieldInput>
      </div>
      <div className={myError ? `${classes.Button} ${classes.ButtonDisabled}` : classes.Button}>
        <Button variant="contained" onClick={handleSubmit}>{t('common:form.button')}</Button>
      </div>
    </form>
  );
};

export default Form;















