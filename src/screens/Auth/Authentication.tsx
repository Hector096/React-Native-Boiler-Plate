import React, { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { Login } from './Login';
import { Register } from './Register';
import { ForgetPassword } from './ForgetPassword';
import { scale } from 'react-native-size-matters';

const Authentication = () => {
const [ process , setProcess] = useState({
  islogin: true,
  isRegister: false,
  isForget: false,
})


const toggleComponent = (key:string)=>{
  setProcess((prev) => ({
    ...prev,
    islogin: key === 'islogin',
    isRegister: key === 'isRegister',
    isForget: key === 'isForget',
  }));
}

  const {
    Gutters,
    Layout,
  } = useTheme();


  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter
        ]}
      >
          <Brand height={scale(250)} width={scale(250)} />        
      </View>
      <View
        style={[
          Layout.fill,
          Layout.fullWidth,
          Gutters.smallHPadding,
          Gutters.regularVMargin
        ]}
      >
        {process.islogin?(
          <Login changeScreen={(key)=>{toggleComponent(key)}} />
        ):process.isRegister?(<Register changeScreen={(key)=>{toggleComponent(key)}}/>):
        process.isForget?(<ForgetPassword changeScreen={(key)=>{toggleComponent(key)}}/>):null}

      </View>
    </ScrollView>
  );
};

export default Authentication;
