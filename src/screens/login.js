import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';

const Form = (props) => (
  <View >
    <TextInput
      value={props.values.nick}
      onChangeText={text => props.setFieldValue('nick', text)}
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
  mapPropsToValues: () => ({ nick: '', password: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);

