import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { planets } from '../modal/planets';
import PlanetCard from '../components/PlanetCard';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={24} color="white" />
        <Text style={styles.title}>treva</Text>
        <Feather name="search" size={24} color="white" />
      </View>
      <View style={styles.planetList}>
        <FlatList
          data={planets}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { planet: item })}>
              <PlanetCard planet={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3E3963',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    background:
      'linear-gradient(to right, #1e5799 0%,#207cca 41%,#207cca 43%,#7db9e8 100%)',
  },
  planetList: {
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
});
