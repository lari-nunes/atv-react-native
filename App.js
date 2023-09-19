import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameList from './src/components/GameList';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <GameList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
