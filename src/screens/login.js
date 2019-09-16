import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';

const Form = (props) => (
  <View >
    <TextInput
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />

    <TextInput
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
    />

    <Button
      onPress={props.handleSubmit}
      title="Login"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);

