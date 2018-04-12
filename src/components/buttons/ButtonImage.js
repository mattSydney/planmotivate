import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ButtonImage = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>

      <Image
          source={require('../../../assets/AddButton.png')}
        />

    </TouchableOpacity>
  );
};

const styles = {
 
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,        
    marginLeft: 5,
    marginRight: 5
  }
};

export { ButtonImage };
