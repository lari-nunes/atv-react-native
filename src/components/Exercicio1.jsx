import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import MyButton from './MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {},
});

const Exercicio1 = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (text) => {
    setCountryName(text);
    setIsButtonDisabled(text.length === 0);
  };

  const fetchCountry = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = response.data[0]; 
      setCountryData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCountryName('Brazil');
    fetchCountry();
  }, []);

  const countryInfo = [
    { label: "Nome oficial: ", value: countryData?.name?.official },
    { label: "Região: ", value: countryData?.region },
    { label: "Subregião: ", value: countryData?.subregion },
    { label: "Área: ", value: `${countryData?.area} km²` },
    { label: "População: ", value: countryData?.population },
    { label: "Capital: ", value: countryData?.capital },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de um país"
        onChangeText={handleInputChange}
        value={countryName}
      />
      <MyButton
        title="Buscar país"
        onPress={fetchCountry}
        disabled={isButtonDisabled}
      />
      {countryData && (
        <FlatList
          data={countryInfo}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Exercicio1;
