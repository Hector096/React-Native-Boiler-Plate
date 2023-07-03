import { Text, TouchableOpacity, View } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInput'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';



  
export type ForgetPassword = {
  id: string,
}
type ForgetPasswordProps = {
  changeScreen:(key:string)=>void
}

export const ForgetPassword = ({changeScreen}:ForgetPasswordProps) => {
  const { t } = useTranslation(['auth']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();


  const validationSchema = Yup.object().shape({
    id: Yup.string().email('Invalid email').required('Required'),
  });


  let initialValues: ForgetPassword = {
    id: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: ForgetPassword) => {
      // Handle form submission
      console.log(values);
    },
  });
  

  return (
    <View style={[Layout.fill]}>
       <Text style={[Layout.center,Fonts.textCenter,Fonts.titleSmall,Fonts.textPrimary,Gutters.regularBMargin]}> {t('auth:forgetpassword').toUpperCase()}</Text>
  <TextInputWithLabel label={t('auth:email')}
   handleChange={formik.handleChange('id')}
      onBlur={formik.handleBlur('id')}
      value={formik.values.id}
      keyboardType= "email-address"
      hasError={formik.touched.id && formik.errors.id ? true : false}
      error={formik.errors.id}
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
          style={[Common.button.rounded, Gutters.regularTMargin,Gutters.regularHMargin]}
          onPress={() =>formik.handleSubmit()}
        > 
        <Text style={[Fonts.textSmall]}>
          {t('auth:forgetpassword')}
          </Text>
        </TouchableOpacity>
      
  </View>
  )
}

