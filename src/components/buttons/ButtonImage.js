import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ButtonImage = ({ onPress, children }) => {
  const { buttonStyle } = styles;
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
    justifyContent:'center',
    borderRadius: 5,        
    marginLeft: 5,
    marginRight: 5
  }
};

export { ButtonImage };
