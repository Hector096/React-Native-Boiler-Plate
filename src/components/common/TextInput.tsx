import { useTheme } from '../../hooks'
import React from 'react'
import { View, Text, TextInput,KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native'

type InputProps = {
    label: string
    value?: string
    keyboardType:KeyboardTypeOptions
    multiline?: boolean
    secureTextEntry?: boolean
    hasError?: boolean
    error?:string
    styles?: StyleProp<TextStyle>
    onBlur: (value:any) => void
    handleChange: (value: string) => void
 }


const TextInputWithLabel = ({
    label,
    value,
    multiline,
    error,
    hasError,
    keyboardType,
    secureTextEntry,
    styles,
    handleChange,
    onBlur,
}: InputProps) => {

    const {
        Common,
        Fonts,
        Gutters,
        Layout,
      } = useTheme();

  return (
    <View style={[Gutters.tinyBMargin]}>
      {label && <Text style={[Fonts.textSmall]}>{label}</Text>}
      <TextInput
        value={value}
        style={[styles, Layout.fullWidth, Fonts.textSmall,Common.textInput]}
        autoCapitalize='none'
        multiline={multiline}
        onChangeText={handleChange}
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {hasError && <Text style={[Fonts.textSmall,Fonts.textError]}>{error}</Text>}
    </View>
  )
}

export default TextInputWithLabel
