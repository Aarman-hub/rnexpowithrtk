import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.wrap}>
      <Text>Home Screen</Text>
      <Text>Sub Title</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    wrap:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});
