import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../constants/Constants';

const Error = ({ errorMessage }) => {
  return (
    <View style={styles.errorStyle}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const styles = {
    errorStyle: {
    flex: 1,
    backgroundColor: Colors.ORANGE_BG_COLOR,
    height:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: '#fff'
  }
};

export { Error };
