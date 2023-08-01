import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomePage;
