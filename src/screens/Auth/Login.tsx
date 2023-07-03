import { Text, TouchableOpacity, View } from 'react-native'
import TextInputWithLabel from '../../components/common/TextInput'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

export type Credential = {
  id: string,
  password?: string
  }

  type LoginProps = {
    changeScreen:(key:string)=>void
  }

export const Login = ({changeScreen}:LoginProps) => {

  const { t } = useTranslation(['auth']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
  } = useTheme();

  const validationSchema = Yup.object().shape({
    id: Yup.string().email(t('auth:invalid') + " "+ t('auth:email')).required(t('auth:required')),
    password: Yup.string().required(t('auth:required')),
  });

  let initialValues:Credential = {
    id: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: Credential) => {
      // Handle form submission
      console.log(values);
    },
  });
  
  return (
    <View style={[Layout.fill]}>
      <Text style={[Layout.center,Fonts.textCenter,Fonts.titleSmall,Fonts.textPrimary,Gutters.regularBMargin]}> {t('auth:login').toUpperCase()}</Text>
      <View style={[Layout.fullWidth]}>
    <TextInputWithLabel label={t('auth:email')}
     handleChange={formik.handleChange('id')}
        onBlur={formik.handleBlur('id')}
        value={formik.values.id}
        keyboardType= "email-address"
        hasError={formik.touched.id && formik.errors.id ? true : false}
        error={formik.errors.id}
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
        <View style={[Layout.colReverse,Layout.alignItemsEnd]}>
        <TouchableOpacity
                        style={[Gutters.tinyTMargin,Gutters.smallHMargin]}
                      onPress={() =>changeScreen('isRegister')}
                    ><Text style={[Fonts.textTiny]}> {t('auth:register')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Gutters.tinyTMargin,Gutters.smallHMargin]}
                      onPress={() =>changeScreen('isForget')}
                    ><Text style={[Fonts.textTiny]}> {t('auth:forgetpassword')+"?"}</Text>
                    </TouchableOpacity>
        </View>
         <TouchableOpacity
            style={[Common.button.rounded, Gutters.regularTMargin,Gutters.regularHMargin]}
            onPress={() =>formik.handleSubmit()}
          > 
          <Text style={[Fonts.textSmall]}>
            {t('auth:login')}
            </Text>
          </TouchableOpacity>
       
      </View>

    </View>
  )
}
