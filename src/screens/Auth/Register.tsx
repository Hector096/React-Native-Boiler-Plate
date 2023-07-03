import { Text, TouchableOpacity, View } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInput'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';



  
export type Register = {
  name: string,
  id: string,
  password: string,
  phone:string
}

type RegisterProps = {
  changeScreen:(key:string)=>void
}

export const Register = ({changeScreen}:RegisterProps) => {
  const { t } = useTranslation(['auth']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
  } = useTheme();


  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('auth:required')),
    id: Yup.string().email(t('auth:invalid') + " "+ t('auth:email')).required(t('auth:required')),
    password: Yup.string().required(t('auth:required')),
    phone: Yup.string().required(t('auth:required')),
  });


  let initialValues: Register = {
    name:'',
    phone:'',
    id: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: Register) => {
      // Handle form submission
      console.log(values);
    },
  });
  

  return (
    <View  style={[Layout.fill]}>
        <Text style={[Layout.center,Fonts.textCenter,Fonts.titleSmall,Fonts.textPrimary,Gutters.regularBMargin]}> {t('auth:register').toUpperCase()}</Text>

    <TextInputWithLabel label={t('auth:name')}
   handleChange={formik.handleChange('name')}
      onBlur={formik.handleBlur('name')}
      value={formik.values.name}
      keyboardType= "default"
      hasError={formik.touched.name && formik.errors.name ? true : false}
      error={formik.errors.name}
      />

  <TextInputWithLabel label={t('auth:email')}
   handleChange={formik.handleChange('id')}
      onBlur={formik.handleBlur('id')}
      value={formik.values.id}
      keyboardType= "email-address"
      hasError={formik.touched.id && formik.errors.id ? true : false}
      error={formik.errors.id}
      />
      <TextInputWithLabel label={t('auth:phone')}
   handleChange={formik.handleChange('phone')}
      onBlur={formik.handleBlur('phone')}
      value={formik.values.phone}
      keyboardType= "phone-pad"
      hasError={formik.touched.phone && formik.errors.phone ? true : false}
      error={formik.errors.phone}
      />
       <TextInputWithLabel label={t('auth:password')}
   handleChange={formik.handleChange('password')}
      onBlur={formik.handleBlur('password')}
      value={formik.values.password}
      keyboardType= "default"
      secureTextEntry={true}
      hasError={formik.touched.password && formik.errors.password ? true : false}
      error={formik.errors.password}
      />
      <View style={[Layout.row,Layout.justifyContentEnd]}>
      <TouchableOpacity
            style={[Gutters.smallHMargin]}
            onPress={() =>changeScreen('islogin')}
          > 
          <Text style={[Fonts.textSmall]}>
            {t('auth:login')+"?"}
            </Text>
          </TouchableOpacity>
      </View>
     
    
       <TouchableOpacity
          style={[Common.button.rounded, Gutters.smallTMargin,Gutters.regularHMargin]}
          onPress={() =>formik.handleSubmit()}
        > 
        <Text>
          {t('auth:register')}
          </Text>
        </TouchableOpacity>
  </View>
  )
}
