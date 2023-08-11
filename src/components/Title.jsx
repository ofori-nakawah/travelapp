import {Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

Title.defaultProps = {
  text: 'hello',
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#000',
  },
});
