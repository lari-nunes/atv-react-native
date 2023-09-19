import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    game: {
      backgroundColor: "#FCC9E3",
      padding: 10,
      margin: 10,
      borderRadius: 8
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 10,
    },
    info: {
      fontSize: 14,
      color: '#000',
      marginTop: 4,
    },
  });

import axios from 'axios';

const GameList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const {data}= await axios.get('https://www.freetogame.com/api/games');
      setGames(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const renderItem = ({ title, item }) => (
    <View style={styles.game}>
      <View>
        <Text>{title}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.short_description}</Text>
        <Text>Gênero: {item.genre}</Text>
        <Text>Plataforma: {item.platform}</Text>
        <Text>Desenvolvedor: {item.developer}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default GameList;
