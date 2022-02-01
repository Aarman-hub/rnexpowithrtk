import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Container = ({children}) => {
  return (
    <View>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});
