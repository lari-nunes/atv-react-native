import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#930521',
      margin: 35,
      padding: 26,
      marginBottom: 20,
      width: 320
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Jogos gratuitos</Text>
    </View>
  );
};

export default Header;