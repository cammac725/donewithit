import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({title, handlePress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >     
      <Text style={styles.text}>{title}</Text>      
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default AppButton;